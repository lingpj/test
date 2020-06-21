<template>
  <div class="container">
    <waterfall :col="2" :onReachBottom="onReachBottom">
      <goodsInfo slot-scope="{goods}" :goods="goods"/>
      <span  slot-scope="{goods}" :goods="goods">{{goods}}</span>
    </waterfall>
  </div>
</template>

<script>
import axios from "axios";
import waterfall from "./waterfall";
export default {
  name: "",
  components: { waterfall },
  data() {
    return {};
  },

  mounted() {
  //  this.onReachBottom(1).then(res=>{
  //      console.log(res)
  //  })
  },
  methods: {
    onReachBottom(n) {
      console.log('n  >>',n)
      var x = 10
      return new Promise((resolve, reject) => {
        axios.get("/json/waterfall.json").then(res => {
            resolve({
                data:{
                    list:res.data.slice(x*n,n*x+x)
                }
            })
        });
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.container {
}
</style>
