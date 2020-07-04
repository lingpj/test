<template>
  <div class='container'>
    
  </div>
</template>

<script>
export default {
  name: '',
  components:{},
  data () {
    return {
    }
  },

  mounted(){
    
    // yield是ES6的新关键字，使生成器函数执行暂停，yield关键字后面的表达式的值返回给生成器的调用者。它可以被认为是一个基于生成器的版本的return关键字。
    // yield关键字实际返回一个IteratorResult（迭代器）对象，它有两个属性，value和done，分别代表返回值和是否完成。
    // yield无法单独工作，需要配合generator(生成器)的其他函数，如next，懒汉式操作，展现强大的主动控制特性。

    // 1、直接给原型对象添加，
    // yield 类似调用的next()函数

    // Object.prototype[Symbol.iterator] = function* () {
    //   for(let value in this){
    //     yield value
    //   }
    // }

    // 2、
    var obj = {
      name:'张三',
      age:18,
      '0':'哈哈',
      '1':'呵呵',
      '2':'恩恩',
      [ Symbol.iterator ]: function() {
        var self = this
        var index = 0
        return {
          next(){
            console.log('self',self,index)
            if(self[index]){
              return { value:self[index++],done:false }
            }else{
              return { value:undefined,done:true }
            }
          }
        }
      }
    }


    for (var key of obj) {
      console.log('遍历',key) 
    }

    

    // map和Object的不同点
    // 1、Map没有原型
    // 2、Map键是有序的
    // 3、是可for of 遍历的
    // 4、键可以是任意值，对象,函数...
    // 5、可以通过.size获取大小
    // 6、在频繁增删键值对的场景下表现更好。

    var a = new Map()
    a.set({name:123},456)
    console.log(a)

    console.log(Object.keys(obj))




 


















  },
  methods: {}
}
</script>

<style lang='scss' scoped>
 .container{}
</style>
