<template>
  <div class='container'>
    <h1>今天天气真好</h1>
    <ul>
        <li v-for="(item,index) in list" :key="index"
        :style="{ backgroundImage:'url('+item.url+')',
        backgroundPosition:`${item.flag == 1 ? '50% 0': '0 50%'}`,
        backgroundSize:`${item.flag == 1 ?'auto 100%':  '100%'}`,
         }">

        </li>
    </ul>
    <!-- <div id="img" ></div> -->
  </div>
</template>

<script>
import decorator from '../js/decorator.js'
export default {
  name: '',
  components:{},
  data () {
    return {
        list:[]
    }
  },

  mounted(){
      
      this.initImage(['http://pwmall.parkwing.cn/1.jpg','http://pwmall.parkwing.cn/2.jpg']).then(res=>{
          console.log('res ',res)
          this.list = res
      })
      
  },
  methods: {
      initImage(list){
        var count = 0
        var _list = []
        return new Promise((resolve,reject) =>{
              list.forEach(element => {
                var img = new Image()
                img.src = element
                img.onload = function(){
                    count++
                    console.log('onload开始：',element)
                    console.log(count)
                    console.log('加载完成',img.width,img.height)
                    var flag = img.width - img.height > 0 ? 1 : 2
                    _list.push({
                        url:element,
                        width:img.width,
                        height:img.height,
                        flag:flag,   //宽1，竖2
                    })
                    if(count == list.length){
                        resolve(_list)
                    }
                }
            }) 
        });
      }
  }
}
</script>

<style lang='scss' scoped>
 .container{
     #img{
         width: 100px;
         height: 100px;
          border: 1px solid lightgray;
         background: url('http://pwmall.parkwing.cn/1.jpg') no-repeat;
         background-size: 100% ;
         background-position:0 50%;
     }
     ul{
         display: flex;
             justify-content: space-between;
         li{
            width: 100px;
            height: 100px;
            border: 1px solid lightgray;
            background-size: 100% ;
            background-repeat: no-repeat;
         }
     }
 }
</style>
