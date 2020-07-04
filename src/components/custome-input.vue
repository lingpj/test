<template>
  <div class='container' >
    <input type="text" :class="[getSize()]">
  </div>
</template>

<script>
export default {
  name: '',
  components:{},
  data () {
    return {
        size:'large'
    }
  },
  inject:['customeForm'],
  mounted(){
      console.log('>>',this.getSize())
  },
  methods: {
    getSize() {
      return  this.customeForm.size || this.size
    },
  }
}
</script>

<style lang='scss' scoped>
 .container{
     
     .small{
         width: 100px;
         background-color: red;
     }
     .middle{
         width: 150px;
          background-color: green;
     }
     .large{
         width: 400px;
          background-color: blue;
     }
 }
</style>
