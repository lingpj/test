<template>
  <div class="myWaterfall" v-show="dataSource" ref="fallbox">
    <ul>
      <!--列的宽度应由计算的来-->
      <li v-for="(it,index) in col" :style="{width:(100/col-1)+'%'}" style="float:left" :ref="'col'+index" :key="it">
        <div v-for="goods in renderList[index]" :key="goods.ID" style="margin:5px 0;border:1px solid red" >
          <!-- <slot :goods="goods"/> -->
          <img :src="goods.hoverUrl" style="width:100%">
        </div>
      </li>
      <div style="clear:both"></div>
    </ul>
    <div class="loading" v-show="rendering">
      <div class="wait">
        <span>L</span>
        <span>o</span>
        <span>a</span>
        <span>d</span>
        <span>i</span>
        <span>n</span>
        <span>g</span>
        ...
      </div>
    </div>
    <p class="nomore" v-if="over">没有更多了>>></p>
  </div>
</template>
<script>
export default {
  props: ["col", "onReachBottom"],
  data() {
    return {
      loading: false, //是否处于加载状态，用于触底事件的节流
      nowPage: 1,
      dataSource: [], //数据列表
      over: false, //是否已经到底了
      lock: false, //请求锁
      rendering: false, //渲染中,防止渲染未完成高度获取不准确而导致可连续触发请求
      renderList: [] //渲染列表，根据dataSource+col初始化为二维数组
    };
  },

  methods: {
    computedOffset(obj, prop) {
      //工具函数,计算元素到body的绝对位置,获取obj元素的prop值（prop为offset中的某一项）
      if (obj == document.body || obj.offsetParent == document.body) {
        return parseInt(obj[prop]);
      }
      return parseInt(obj[prop]) + this.computedOffset(obj.offsetParent, prop); //递归
    },

    getDataList() {
      //数据加载
      //节流处理
      if (!this.loading && !this.over) {
        //不处于加载状态且有新数据
        let self = this;
        this.loading = true; //页数增加
        this.onReachBottom(self.nowPage).then(res => {
          //拼接
          self.rendering = true; //渲染状态中
          if (res.data.list.length > 0) {
            self.nowPage++;
            let len = self.dataSource.length;
            self.dataSource = self.dataSource.concat(res.data.list);
            self.fullData(len); //仅对新的数据做渲染，需要从原数组的终点开始
            self.lock = false;
          } else {
            //没有新数据
            self.over = true;
            self.rendering = false;
          }
          self.loading = false;
        });
      } else {
        //处于请求状态，节流,或已出现无数据（over），忽略请求
        return false;
      }
    },

    fullData(index) {
      //比较列的高度来判断向哪一个列中添加数据
      if (index < this.dataSource.length) {
        let self = this;

        let newImg = new Image();
        newImg.src =
          self.dataSource[
            index
          ].hoverUrl; /********防止错误********/ /*
　　　　　未防止图片长时间加载不成功，可设置超时时间，超时默认图片出错并替换为默认图片:
　　　　let loadTimer = setTimeout(_=>{
　　　　　　　newImg.onerror();　　　　//5秒主动触发失败
　　　　
　　　　　　},5000)
　　　　newImg.onerror=function(){
　　　　　　//如果图片加载失败，替换为默认图片
　　　　　　newImg.src="你的默认图片地址"
　　　　}
　　　　*/
        newImg.onload = () => {
          //需等待图片加载，否则高度不准确
          //加载成功，清除超时定时器
          // clearTimeout(loadTimer);

          let colHeightList = []; //所有列的高度表
          for (let i = 0; i < self.col; i++) {
            colHeightList[i] = self.$refs["col" + i][0].offsetHeight;
          } //获取最小列
          // console.log('>>>  ',colHeightList)

          let min = colHeightList.indexOf(Math.min.apply(Math, colHeightList)); // self.renderList[min].push(self.dataSource[index]);　　　　踩坑
          // console.log('>>>  ',self.renderList)
          let tar = self.renderList[min].concat(self.dataSource[index]); //需要更新视图，上面的使用push不会更新视图（操作的第二维）,使用set
          self.$set(self.renderList, min, tar);
          self.fullData(index + 1);
        };
      } else {
        this.rendering = false;
      }
    }
  },
  mounted() {
    let self = this; //渲染列 列表,根据如的col生成对应列数,并置为空的二维数组

    for (let i = 0; i < this.col; i++) {
      this.renderList[i] = [];
    } //请求首次数据:

    this.getDataList(); //监听滚动事件

    window.onscroll = function(e) {
      //监测触底
      //瀑布流高度 + 瀑布流的相对top < 可视区高度+滚动距离 ==触底
      //获取到瀑布流盒子
      let box = self.$refs.fallbox; //获取到盒子相对于文档的位置
      let top = self.computedOffset(box, "offsetTop");
      
      let height = box.offsetHeight; //可视区高度
      
      let clientHeight = document.documentElement.clientHeight; //滚动距离
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      console.log(height,clientHeight,scrollTop,e)
      if (
        top + height < clientHeight + scrollTop + 50 &&
        !self.lock &&
        !self.rendering
      ) {
        //触底判断,50用于提前触发,不用完全到底才触发
        //触底成功
        self.lock = true;
        self.getDataList();
      }
    };
    this.fullData(0);
  },

  beforeDestroy() {
    //取消滚动事件，重要，否则路由跳转后执行scroll事件将会有一堆的undefined
    window.onscroll = null; //滚动条置顶，否则路由跳转后滚动条的位置没有变化
    document.documentElement.scrollTop = 0;
  }
};
</script>
