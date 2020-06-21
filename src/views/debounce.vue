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
    // var func = this.debounce(function() {
    //   console.log(Math.random());
    // }, 300);
    var func = this.throttle(function() {
      console.log(Math.random());
    }, 1000);
    window.addEventListener("scroll", func);

  },
  methods: {
    debounce(fn, delay) {
      let timer = null;
      return function() {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          fn.apply(this, arguments);
        }, delay);
      };
    },
    throttle(fn, cycle) {
      let start = Date.now();
      let now;
      let timer;
      return function() {
        now = Date.now();
        clearTimeout(timer);
        if (now - start >= cycle) {
          fn.apply(this, arguments);
          start = now;
        } else {
          timer = setTimeout(() => {
            fn.apply(this, arguments);
          }, cycle);
        }
      };
    }
  }
};
</script>





<style lang='scss' scoped>
.container {
  height: 10000px;
}
</style>
