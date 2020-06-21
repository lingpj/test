<template>
  <div class="container"></div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },

  mounted() {
    var obj ={
      name:'张三',
      age:18
    }
    var {
      // name = nameCopy,
      name = '李四',
      age
    }  = {...obj}
    console.log(name,age)
  },
  methods: {
    hello(name = '123'){
      console.log(name)
    },  
    // new 操作符
    newFunction(constructor) {
      // 1、新建对象
      var o = {};

      // 3、继承原型上的方法
      o.__proto__ = constructor.prototype;

      // 2、call继承构造函数内的属性
      var result = constructor.call(o);

      // 4、判断构造函数是否返回了对象:有就用，没有就返回o
      if((typeof result) == 'object'){
        return result
      }else{
        return o
      }
      

    },
    // Instanceof 实现
    myInstanceof(left,right){

      var proto = Object.getPrototypeOf(left)
      while(true){
        if(proto == right.prototype) return true
        if(proto == null) return false
        proto =  Object.getPrototypeOf(left)
      }

    },
    ajax({url,methods,data,headers}){
      return new Promise((resolve,reject) =>{
        var request = new XMLHttpRequest()
        request.open(url,methods)

        for (const key in headers) {
          if (object.hasOwnProperty(key)) {
            const value = object[key];
            request.setRequestHeader(key,value)
          }
        }

        request.onreadystatechange = function(){
          if(request.readyState == 4){
            // 处理逻辑
          }
        }
        request.send(data)
      })
    }
  }
};
</script>

<style lang='scss' scoped>
.container {
}
</style>
