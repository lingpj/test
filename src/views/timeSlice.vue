
<template>
  <div class="container">
      <!-- 时间分片 -->
    <ul id="container"></ul>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },

  mounted() {
    //需要插入的容器
    let ul = document.getElementById("container");
    // 插入十万条数据
    let total = 100000;
    // 一次插入 20 条
    let once = 20;
    //总页数
    let page = total / once;
    //每条记录的索引
    let index = 0;
    //循环加载数据
    function loop(curTotal, curIndex) {
      if (curTotal <= 0) {
        return false;
      }
      //每页多少条
      let pageCount = Math.min(curTotal, once);
      window.requestAnimationFrame(function() {
        let fragment = document.createDocumentFragment();
        for (let i = 0; i < pageCount; i++) {
          let li = document.createElement("li");
          li.innerText = curIndex + i + " : " + ~~(Math.random() * total);
          fragment.appendChild(li);
        }
        ul.appendChild(fragment);
        loop(curTotal - pageCount, curIndex + pageCount);
      });
    }
    loop(total, index);
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
.container {
  font-size: 16px;
}
</style>
