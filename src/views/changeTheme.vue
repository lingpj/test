<template>
  <div class="container side-bar" style="padding:20px">
    1
    <div class="account-info">
      2
      <br>2
    </div>
    <button @click="handle">按钮</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  components: {},
  data() {
    return {
      colors: [
        {
          themeId: 1,
          familyPrimary: "#B7A3FF",
          familySecondary: "#879FFF",
          sideBarTop: "#8981D8"
        },
        {
          themeId: 2,
          familyPrimary: "#FDC5C5",
          familySecondary: "#F070A0",
          sideBarTop: "#E7829F"
        },
        {
          themeId: 3,
          familyPrimary: "#414D6C",
          familySecondary: "#2D1E3C",
          sideBarTop: "#423C50"
        }
      ],
      color: "",
      index: 1,
      style: ""
    };
  },
  // 思路：
  // 1、显示css默认样式 familyPrimary(key)-red(value)
  // 2、根据默认css样式新建对象,取反  red-familyPrimary
  // 3、将颜色值替换为变量
  // .side-bar {
  //   background: linear-gradient(familyPrimary, familySecondary) !important;
  // }
  // .side-bar .account-info {
  //   background: sideBarTop !important;
  // }
  // 3、后台获取颜色方案，随机取出一个方案，
  // 4、遍历key，用正则把key全局替换和css中变量一致的值，替换为value
  mounted() {
    this.color = this.colors[this.index];
    axios.get("/css/theme.css").then(res => {
      this.style = res.data
      let style = this.getStyleTemplate(res.data);
      this.writeNewStyle(style, this.color);
    });
  },
  methods: {
    handle() {
      this.index = this.index == 2 ? 0 : this.index+1;
      
      this.color = this.colors[this.index];
      let style = this.getStyleTemplate(this.style);
      console.log(style)
      this.writeNewStyle(style, this.color);
    },
    getStyleTemplate(data) {
      const colorMap = {
        "#B7A3FF": "familyPrimary",
        "#879FFF": "familySecondary",
        "#8981D8": "sideBarTop"
      };
      Object.keys(colorMap).forEach(key => {
        const value = colorMap[key];
        data = data.replace(new RegExp(key, "ig"), value);
      });
      return data;
    },
    writeNewStyle(originalStyle, colors) {
      let oldEl = document.getElementById("temp-style");
      let cssText = originalStyle;
      Object.keys(colors).forEach(key => {
        cssText = cssText.replace(new RegExp(key, "ig"), colors[key]);
      });
      const style = document.createElement("style");
      style.innerText = cssText;
      style.id = "temp-style";
      oldEl
        ? document.head.replaceChild(style, oldEl)
        : document.head.appendChild(style);
    }
  }
};
</script>

<style lang='scss' scoped>
.container {
}
</style>
