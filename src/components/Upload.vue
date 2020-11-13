<template>
    <el-row class="input">
        <el-upload
            
            :show-file-list="false"
            drag
            action
            :http-request="upLoad"
            multiple
        >
        <img v-if="lodpath" :src="lodpath" class="img" />
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      </el-upload>
      <div v-if="debug">
          {{uploadkey}}
          {{filename}}
          {{lodpath}}
          {{ospath}}
      </div>
    </el-row>
</template>

<script>
import { upload } from "@/api/common";
export default {
  name: 'Upload',
  props: {
    uploadkey: {
      type: String,
      default: ''
    },
    filename: {
      type: String,
      default: ''
    },
    lodpath: {
      type: String,
      default: ''
    },
    ospath: {
      type: String,
      default: ''
    },
    debug: {
      type: Boolean,
      default: false
    },
  },
  computed: {
  },
  created(){
  },
  methods: {
    upLoad(file) {
      const formData = new FormData();
      formData.append("file", file.file);
      formData.append("uploadKey", this.uploadkey);

      this.$http(upload(formData), (res) => {
        console.log(res);
        if (res.code == 200) {
          this.$emit("update:lodpath", res.data.lodpath)
          this.$emit("update:filename", res.data.filename)
          this.$emit("update:ospath", res.data.ospath)
        } else {
          this.$message({
            message: res.msg,
            type: "error",
            duration: 5 * 1000,
          });
        }
      });
    },
  }
}
</script>

<style scoped>
.img{
  width: 100%;
}
</style>