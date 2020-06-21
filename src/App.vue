<template>
  <div id="app">
    <router-view></router-view>
    <!-- <v-touch
      @pinchout="pinchout"
      @pinchin="pinchin"
      @panmove="panmove"
      @panstart="panstart"
      class="container"
      @panend="panend"
      :pinch-options="{ threshold: 0.09 }"
      :pan-options="{ threshold: 0.01 }"
      :style="{transform: 'scale('+scale+')',position:'absolute' ,transformOrigin: transformOrigin,top:top + 'px',left:left + 'px'}"
    >
      <div :style="{fontSize:scale*16 +'px',left:((index%18)*20) +'px',top:((index/18)*20) +'px'}" :key="index" v-for="(item,index) in 100" class="item">{{item}}</div>
    </v-touch>
    <div class="test">阿萨德</div> -->
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      list: [],
      scale:1,
      touchStatus: false,
      top: 0,
      left: 0,
      startX: 0, // ---移动的起点X轴 单位px
      startY: 0 // ---移动的起点Y轴 单位px
    };
  },
  computed:{
    // css样式控制.box缩放中心点
    transformOrigin: function () {
     
      return 0.474598076923077 * 100 + '%' + 0.475 * 100 + '%'
    },
  },
  methods: {
    // 当手指拖动的过程中
    panmove: function(ev) {
      let _this = this;
      if (_this.touchStatus) {
        // 本次座位图移动横纵坐标rem的值
        // _this.top = (ev.deltaY + _this.startY) / _this.screenRem;
        _this.top = (ev.deltaY + _this.startY)   
        _this.left = (ev.deltaX + _this.startX) 
        console.log( _this.top, _this.left)
      }
    },
    // 当手指拖动开始的时候
    panstart: function(ev) {
      console.log(ev)
      let _this = this;
      _this.touchStatus = true;
      // 获取上次记录的xy坐标作为起点
      _this.startY = _this.top  
      _this.startX = _this.left
    },
    // 当手指拖动结束的时候
    panend: function(ev) {
      let _this = this;
      _this.touchStatus = false;
      // if (_this.scale === 1) {
      //   // _this.top = 0;
      //   // _this.left = 0;
      // } else {
      //   // 如果宽度度移动超过了边界值 把移动置为边界值
      //   if (_this.left > _this.crossleft) {
      //     _this.left = _this.crossleft;
      //   } else if (_this.left < -_this.crossleft) {
      //     _this.left = -_this.crossleft;
      //   }

      //   // 如果高度移动超过了边界值 把移动置为边界值
      //   if (_this.top > _this.crosstop) {
      //     _this.top = _this.crosstop;
      //   } else if (_this.top < -_this.crosstop) {
      //     _this.top = -_this.crosstop;
      //   }
      // }
    },
    // 当缩放 放大的时候触发
    pinchout: function() {
      let _this = this;
      if (_this.scale >= 0 && _this.scale) {
        _this.scale += 0.02;
      }
    },
    // 当缩放 缩小的时候触发
    pinchin: function() {
      let _this = this;
      if (_this.scale > 0.5) {
        _this.scale -= 0.02;
      }
    }
  }
};
</script>

<style lang="scss" >
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
 body{
   
 }

#app,html,body{
  height: 100%;
}
body{
  font-size: 16px !important;
}
// #app {
//   .item {
//     width: 15px;
//     height: 15px;
//     background-color: pink;
//     text-align: center;
//     line-height: 15px;
//     display: inline-block;
//     // margin-right: 5px;
//     position: absolute;
//   }
//   .container{
//     position: relative;
//   }
//   .test{
//     margin-top: 300px;
//     width: 200px;
//     height: 200px;
//     background-color: red;
//   }
// }
</style>
