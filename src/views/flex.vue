<template>
  <div class='container'>
      列宽<input type="text" v-model="colDis"><br>
      列数<input type="text" v-model="number"><br>
      <button @click="()=>{ list.push('') }">增加数量</button>
    <ul>
        <li v-for="(item,index) in list" :key="index" :style="{ 
            width:`calc((100% - ${colDis * (number-1)}px) /${number})`,
            marginRight: index % number == number - 1 ? 0 : colDis+'px'
         }"></li>
    </ul>
    <div style="width:375px;background:green;">123</div>
  </div>
</template>

<script>
export default {
  name: '',
  components:{},
  data () {
    return {
        list:['','','',''],
        colDis:0,
        number:2
    }
  },

  mounted(){
      var testStr = "窗前明月光，疑是地上霜。阿斯蒂芬月光，疑是地阿萨德上霜";  
      var search = '月光'
      var re = new RegExp(search,'g')
      console.log(testStr.replace(re,`<${search}>`))
    //   while(re.test(testStr)){
    //    testStr = testStr.replace(search,`<${search}>`)
    //    console.log(testStr)
    //   }
    //   console.log(testStr)
  },
  methods: {},
  watch:{
       
  }
}
</script>

<style lang='scss' scoped>
 .container{
     ul{
         display: flex;
        flex-wrap:wrap;
        // justify-content: space-between;
        li{
            height: 100px;
            margin-bottom: 10px;
            background-color: red;
        }
     }
 }
</style>
