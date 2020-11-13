<template>
  <div class="Main">
    <div class="content-main main-content width-normal">
      <div class="loginbox">
        <div class="login-title">登录</div>
        <el-input
          v-model="username"
          class="txt-input"
          placeholder="用户名"
          prefix-icon="el-icon-user"
        ></el-input>
        <el-input
          v-model="email"
          class="txt-input"
          placeholder="账户"
          prefix-icon="el-icon-user"
        ></el-input>
        <el-input
          v-model="password"
          class="txt-input"
          placeholder="密码"
          prefix-icon="el-icon-key"
          show-password
        ></el-input>
        <el-input
          v-model="repassword"
          class="txt-input"
          placeholder="密码"
          prefix-icon="el-icon-key"
          show-password
        ></el-input>
        <div style="text-align: center; margin-top: 110px">
          <el-button
            type="primary"
            round
            align="center"
            @click.native="startregister"
            >立即登录</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Register } from "@/api/register";
// import { login } from "@/utils/auth";
export default {
  name: "login",
  created() {},
  data() {
    return {
      email: "",
      password: "",
      repassword: "",
      username: ""
    };
  },
  methods: {
    seedauth() {
      if (this.password == "") {
        this.$message({
          message: "密码不能为空",
          type: "error",
        });
        return false;
      } else {
        return true;
      }
    },
    startregister() {
      if (this.seedauth() == false) {
        return console.log("终止");
      }
      this.$message({
        message: "正在登录中",
        type: "success",
      });
      this.$http(
        Register({
          email: this.email,
          password: this.password,
          repassword: this.repassword,
          username: this.username
        }),
        (res) => {
          console.log(res);
          if (res.code == 200) {
            this.$message({
              message: "注册",
              type: "success",
            });
            this.$router.push({ name: "login" });
          } else {
            this.$message({
              message: res.msg,
              type: "error",
              duration: 5 * 1000,
            });
          }
        }
      );
    },
  },
};
</script>
<style type="css">
.el-divider__text {
  background-color: #fbfbfb;
  color: #9e9e9e;
}
</style>

<style lang="scss" scoped>
a,
li,
ul {
  text-decoration: none;
  list-style-type: none;
}

html,
body {
  margin: 0;
  padding: 0;
  border: 0;
}
.Main {
  min-height: calc(100vh - 0px);
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  .loginbox {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border-radius: 3px;
    width: 300px;
    height: 300px;
    z-index: 999;
    padding: 20px;
  }
  .login-title {
    color: #8a8a8a;
    margin: 0;
    border: 0;
    width: 100%;
    padding: 0;
    font-size: 14px;
    text-align: center;
  }
  .txt-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 100%;
    margin-top: 20px;
  }
}
</style>