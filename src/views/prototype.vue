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
      function Foo(){
          this.name = 123
      }
      var foo = new Foo()
      var obj = new Object()
      console.log('foo',foo,'obj',obj)
      console.log(foo.__proto__,Foo.prototype)
      console.log('Foo.__proto__',Foo)
      
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
 .container{}
</style>
