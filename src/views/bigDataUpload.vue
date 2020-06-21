<template>
  <div>
    <input type="file" @change="handleFileChange">
    <el-button @click="handleUpload">上传</el-button>
  </div>
</template>

<script>
const LENGTH = 10; // 切片数量

export default {
  data: () => ({
    container: {
      file: null,
      data: []
    }
  }),
  methods: {
    //   文件切片
    createFileChunk(file, length = LENGTH) {
      var chunkSize = Math.ceil(file.size / length);
      var cur = 0;
      var temp = [];
      while (cur < file.size) {
        temp.push({ file: file.slice(cur, cur + chunkSize) });
        cur += chunkSize;
      }
      return temp;
    },
    // 上传切片
    async uploadChunks() {
      var reqList = this.data
        .map(({ chunk, hash }, index) => {
          const formData = new FormData();
          formData.append("chunk", chunk);
          formData.append("hash", hash);
          formData.append("filename", this.container.file.name);
          console.log('formData >',formData)
          return { formData };
        })
        .map(({ formData }) => {
          this.request({
            url: "http://localhost:3000",
            data: formData
          });
        });
       await Promise.all(reqList)       // 并发切片
    },
    // 点击上传
    async handleUpload() {
      if (!this.container.file) return;
      const fileChunkList = this.createFileChunk(this.container.file);
      this.data = fileChunkList.map(({ file }, index) => ({
        chunk: file,
        hash: this.container.file.name + "-" + index // 文件名 + 数组下标
      }));
      this.uploadChunks()
    },
    //   选取文件
    handleFileChange(e) {
        
      const [file] = e.target.files;
      if (!file) return;
      Object.assign(this.$data, this.$options.data());
      this.container.file = file;
    },
    // 封装请求
    // onload 判断状态码   onreadystate 判断 0-4
    request({ url, method = "post", data, headers = {}, requestList }) {
      return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        Object.keys(headers).forEach(key =>
          xhr.setRequestHeader(key, headers[key])
        );
        xhr.send(data);
        xhr.onload = e => {
          resolve({
            data: e.target.response
          });
        };
      });
    }
  }
};
</script>

