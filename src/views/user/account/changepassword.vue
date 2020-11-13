<template>
  <div>

    <div class="page">
      <div class="tabname">请输入当前密码</div>
      <div class="li">
        <el-input placeholder="请输入密码" v-model="nowpassword" show-password></el-input>
      </div>
      <div class="tabname">请输入新密码</div>
      <div class="li">
        <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
      </div>
      <div class="li">
        <el-input placeholder="重复输入一次密码" v-model="repassword" show-password></el-input>
      </div>
      <div class="li">
        <el-button>确定</el-button>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "mainpage",
  data() {
    return {
        nowpassword: null,
        password: null,
        repassword: null
    };
  },
  components: {
  },
  methods: {
  },
  created() {
  }
};
</script>
<style lang="scss" scoped>
.page{
  margin-bottom: 30px;
  padding: 30px;
  // border: 1px dashed #f4f4f4;
  border: 1px solid #f4f4f4;
  box-shadow: 0px 3px 3px 3px #fbfbfb;
  border-radius: 3px;
  padding-bottom: 0;
  .tabname{
    font-size: 18px;font-weight: lighter;color: #3675ff;width: 100%;margin-bottom: 30px;
  }
  .li{
    width: 100%;
    margin-bottom: 30px;
  }
}
</style>