<template>
  <div class='container'>
    <slot></slot>  
  </div>
</template>

<script>
export default {
  name: '',
  components:{},
  data () {
    return {
        size:'small'
    }
  },
  provide(){
    return {
        customeForm:this
    }
  },

  mounted(){},
  methods: {}
}
</script>

<style lang='scss' scoped>
 .container{
     border: 1px solid #eee;
     margin: 20px;
     padding: 20px;
 }
</style>
