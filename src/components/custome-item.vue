<template>
  <div class='container'>
     姓名：
     <slot></slot>
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

  mounted(){},
  methods: {}
}
</script>

<style lang='scss' scoped>
 .container{
     border:1px solid #eee;
     padding: 20px;
     margin: 20px;
 }
</style>
