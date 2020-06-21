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
    


  // function Person(name){
  //   this.name = name || '匿名'
  // }
  // Person.prototype.hellp = function(){
  //   console.log('你好')
  // }
  // 1、原型连继承
  // 缺点：父有子也有
  // function Child(){
  //   this.age = 18
  // }
  // Child.prototype = new Person()
  // var c = new Child()
  // console.log(c)
  // console.log(c.hellp)
  // console.log(c.__proto__)
  // console.log(c instanceof Child,c instanceof Person)
  // 2、构造函数继承
  // 缺点：访问不到prototype上的方法，c不是Person的实例
  // function Child(){
  //   this.age = 18
  //   Person.call(this)
  // }
  // var c = new Child()
  // console.log(c)
  // console.log(c.name)
  // console.log(c.hellp)
  // console.log(c.__proto__)
  // console.log(c instanceof Child,c instanceof Person)
  // 3、实例继承
  // 缺点：c不是Child的实例
  // function Child(){
  //   var _person = new Person()
  //   _person.age = 19
  //   return _person
  // }
  // var c = new Child()
  // console.log(c)
  // console.log(c.name)
  // console.log(c.hellp)
  // console.log(c.__proto__)
  // console.log(c instanceof Child,c instanceof Person)
  // 4、拷贝继承
  // 缺点：c不是Child的实例
  // function Child(){
  //   var _person = new Person()
  //   for (var key in _person) {
  //     Child.prototype[key] = _person[key]
  //   }
  // }
  // var c = new Child()
  // console.log(c)
  // console.log(c.name)
  // console.log(c.hellp)
  // console.log(c.__proto__)
  // console.log(c instanceof Child,c instanceof Person)
  // 5、组合继承
  // 缺点：调用两次构造函数的方法
  // function Child(){
  //   Person.call(this)
  // }
  // Child.prototype = new Person()
  // Child.prototype.constructor = Child
  // var c = new Child()
  // console.log(c)
  // console.log(c.__proto__)
  // console.log(c instanceof Child,c instanceof Person)
  // 6、寄生组合继承
  // 
  // function Child(){
  //   Person.call(this)
  // }
  // (function(){
  //   var Super = function(){}
  //   Super.prototype = Person.prototype
  //   Child.prototype = new Super()
  // })
  // var c = new Child()
  // console.log(c)
  // console.log(c.__proto__)
  // console.log(c instanceof Child,c instanceof Person)
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
 .container{}
</style>
