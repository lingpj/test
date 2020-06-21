<template>
  <div class='container'>
    <h1>提示:</h1>
    <p>{{msg}}</p>
    <button @click="this.confirmHandle">确定</button>
    <button @click="this.cancelHandle">取消</button>
  </div>
</template>

<script>
export default {
  name: '',
  components:{},
  data () {
    return {
      msg:'',
      confirm:function(){},
      cancel:function(){},
    }
  },

  mounted(){},
  methods: {
    uninstall(){
      this.$destroy(true);
      this.$el.parentElement.removeChild(this.$el)
    },
    confirmHandle(){
      this.confirm()
      this.uninstall()
    },
    cancelHandle(){
      this.cancel()
      this.uninstall()
    },
  }
}
</script>

<style lang='scss' scoped>
 .container{
   position: absolute;
   left: 50%;
   top: 0;
   background-color: rgba(0,0,0,.5);
   color: #fff;
   text-align: center;
   width: 200px;
   height: 300px;
   transform: translateX(-100px);
 }
</style>
