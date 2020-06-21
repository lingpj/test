<template>
  <div class="container" v-if="visible">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="content">
      <slot name="content">
          
      </slot>
      <slot :row="list"></slot>
    </div>
    <!-- <slot ></slot> -->
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {
    visible: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      list:['张三','李四','王五']
    };
  },

  mounted() {
      var self = this
      setTimeout(() => {
          self.$emit('update:visible',false)
      }, 3000);
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
.container {
  .container {
    background-color: #eee;
    width: 200px;
    height: 200px;
    position: fixed;
    top: calc((100vw - 200px) / 2);
    left: calc((100vw - 200px) / 2);
  }
  .header {
    height: 20%;
    background-color: lightgray;
  }
  .content {
    height: 60%;
  }
  .footer {
    background-color: lightgray;
    height: 20%;
  }
}
</style>
