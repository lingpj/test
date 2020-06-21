<template>
  <div class="container">
    <!-- 自定义名称 -->
    <button v-on:click="show = !show">Toggle</button>
    <transition name="lpj-transition">
      <p v-if="show">hello</p>
    </transition>
    <!-- 使用animate.css库 -->
    <button v-on:click="show2 = !show2">Toggle</button>
    <transition
      name="lpj-animatecss"
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight"
    >
      <p v-if="show2">hello</p>
    </transition>
    <!-- 默认渲染 -->
    <transition
      appear
      appear-class="custom-appear-class"
      appear-to-class="custom-appear-to-class"
      appear-active-class="custom-appear-active-class"
      :duration="{enter:1000,leave:1000}"
    >
      <div>初始渲染动画</div>
    </transition>
    <!-- 元素切换 -->
    <button @click="show3 = !show3">toggle</button>
    <transition name="on" mode="out-in">
      <button v-if="show3" key="but1">on</button>
      <button v-else key="but2">off</button>
    </transition>
    <!-- 多个组件的过渡 -->
    <button @click="view = view == 'v-a' ? 'v-b' : 'v-a' ">toggle</button>
    <transition name="component-fade" mode="out-in">
      <component v-bind:is="view"></component>
    </transition>  
    <!-- 列表过渡 -->
    <div>
        <button @click="add">增加</button><button @click="remove">删除</button>
        <div>
          <transition-group name="list" tag="p">
            <span style="display:inline-block;width:30px;" v-for="(item,index) in list" :key="item">{{item}}</span>
          </transition-group>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {
    'v-a': {
      template: '<div>Component A</div>',
    },
    'v-b': {
      template: '<div>Component B</div>'
    }
  },
  data() {
    return {
      show: false,
      show2: false,
      show3: false,
      view:'v-a',
      list:[1,2,3,4,5,6,7,8,9],
      next:10,
    };
  },

  mounted() {},
  methods: {
    randomIndex: function () {
      return Math.floor(Math.random() * this.list.length)
    },
    add: function () {
      this.list.splice(this.randomIndex(), 0, this.next++)
    },
    remove: function () {
      this.list.splice(this.randomIndex(), 1)
    },
  }
};
</script>

<style lang='scss' scoped>
.container {
  .lpj-transition-enter-active {
    transition: all 0.3s ease;
  }
  .lpj-transition-leave-active {
    transition: all 0.3s ease;
  }
  .lpj-transition-enter,
  .lpj-transition-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
  .custom-appear-class {
    font-size: 40px;
    color: red;
    background: green;
  }
  .custom-appear-active-class {
    background: green;
  }
  .on-enter-active {
    transition: .3s ease;
  }
  .on-leave-active {
    transition: .3s ease;
  }

  .on-enter,.on-leave-to {
    opacity: 0;
    margin-left: 20px;
  }
  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .3s ease;
  }
  .component-fade-enter, .component-fade-leave-to
  /* .component-fade-leave-active for below version 2.1.8 */ {
    opacity: 0;
  }
  .list-enter-active, .list-leave-active {
    transition: all .3s ease;
  }
  .list-enter,.list-leave-to{
    opacity: 0;
    transform: translateY(30px);
  }
  
}
</style>
