<template>
  <VirtualList :listData="data" :bufferScale="5" :estimatedItemSize="100" v-slot="slotProps">
    <Item :item="slotProps.item"/>
  </VirtualList>
  
</template>

<script>
import VirtualList from "../components/infinateList.vue";
import Item from "../components/item.vue";

import faker from "faker";

let data = [];
for (let id = 0; id < 1000; id++) {
  data.push({
    id,
    value: faker.lorem.sentences() // 长文本
  });
}

export default {
  name: "app",
  data() {
    return {
      data
    };
  },
  components: {
    VirtualList,
    Item
  },
  mounted(){
    var arr = [11,22,33,44,55,66,77]
    // console.log('>>>>',this.binarySearch(arr,77))
  },
  methods:{
    //二分法查找
    binarySearch(list, value) {
      var s = 0, e = list.length
      var result = ''
      while(s <= e){
        var midIndex = ~~((s + e) /2)
        var midValue = list[midIndex]
        if(midValue == value){
          return midIndex
        }else if(midValue > value){
          e = midIndex -1
        }else{
          s = midIndex + 1
        }
      }
      return result
    },
  }
};
</script>

<style>
html {
  height: 100%;
}
body {
  height: 100%;
  margin: 0;
}
#app {
  height: 100%;
}
</style>
