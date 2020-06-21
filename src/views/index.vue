<template>
  <div class="container">
    主页
    <button @click="dialogVisible =true">按钮</button>
    <myAlert2 :visible.sync="dialogVisible" :obj="obj">
      <div slot="header">头部</div>
      <div slot="content">身体{{obj.name}}</div>
      <div slot="footer">尾部</div>
      <div>默认值插asdasdasd槽</div>
      <template slot-scope="scope">
        {{scope.row}}
        <div v-for="(item,index) in scope.row" :key="index">{{item}}-</div>
      </template>
    </myAlert2>
    <button @click="handle" id="name" ref="name">{{name}}</button>
    <div>
      <button @click="redBtnHandle($event,'红色')">红色按钮</button>
      <button @click="greenBtnHandle">绿色按钮</button>
    </div>
    <div class="redArrow"></div>
  </div>
</template>

<script>
import People from '../js/people.js'
import myAlert2 from "../components/customeAlert2";

function log(target,name,decorator){
  console.log('target :',target)
  console.log('name :',name)
  console.log('decorator :',decorator)
  var old = decorator.value
  decorator.value = function(...arg){
     console.log('111111 :',arg)
    return old.apply(this,arg)
  }
}
export default {
  name: "",
  components: { myAlert2 },
  data() {
    return {
      dialogVisible: false,
      obj: { name: 123 },
      name:'123',
      
    };
  },
  watch:{
    
    dialogVisible(){
      console.log('变化了：',this.dialogVisible)
    }
  },
  mounted() {

    
   



    // this.$myAlert({
    //   msg:'666',
    //   confirm:function(){
    //     alert('点了确定')
    //   },
    //   cancel(){
    //     alert('点了取消')
    //   }
    // })

    var str = '123456789'
    var re = /[0-9]{4}/g
    var list = [...str.matchAll(re)]
    console.log('list ',list)
    list = list.map((item,index2) =>{
      var s = item[0]
      var index = item.index
      if(index2+1 == list.length){
        return s+' '+str.slice(index+4)
      }
      return s+' '
    })
    console.log(list.join(''))

    

    this.getPosition().then(res=>{
      console.log('定位》',res)
    })
    

  },
  methods: {
    getPosition () {
      return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
          console.log('存在',navigator.geolocation)
          
          navigator.geolocation.getCurrentPosition(function (position) {
            console.log('position',position)
            let latitude = position.coords.latitude
            let longitude = position.coords.longitude
            let data = {
              latitude: latitude,
              longitude: longitude
            }
            resolve(data)
          }, function () {
            reject(arguments)
          })
        } else {
          reject('你的浏览器不支持当前地理位置信息获取')
        }
      })
    },
    @log
    redBtnHandle(str){
      console.log('红色按钮点击')
    },
    greenBtnHandle(){
      console.log('绿色按钮点击')
    },
    handle(){
      this.name = '456'
      
      console.log(document.querySelector('#name'))
      console.log(this.$refs.name)
      this.$nextTick(()=>{
        console.log('--------------')
        console.log(document.querySelector('#name'))
        console.log(this.$refs.name)
      })
    }
  }
};
</script>

<style lang='scss' scoped>
.container {
  .redArrow{
    width: 0;
    height: 0;
    border-width: 50px;
    border-style: solid;
    border-color: transparent red transparent transparent;
  }
  .redArrow:before,.redArrow:after{
  position: absolute;
  content: '';
    left:5px;
    top:48.5px;
    border-width: 49px;
    border-style: solid;
    border-color: transparent #fff transparent transparent;
  }
}
</style>
