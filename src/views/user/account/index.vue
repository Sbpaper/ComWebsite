<template>
    <div class="layout">
      <div class="w">
        <div class="title">我的账户</div>
      </div>
      <div class="w">
        <el-tabs tab-position="left" v-model="activeName" class="tab">
          <el-tab-pane label="我的" name="mainpage"></el-tab-pane>
          <el-tab-pane label="修改密码" name="changepassword"></el-tab-pane>
        </el-tabs>
        <div class="component"><component :is="isComponent" ></component></div>
    </div>
  </div>
</template>

<script>
import mainpage from "./mainpage.vue";
import changepassword from "./changepassword.vue";
export default {
    data() {
       return {
         activeName: "mainpage",
         componentsList: {
            mainpage: "mainpage",//需要引入具体的组件
            changepassword: "changepassword"
           }
       }
    },
    computed: {
        isComponent() {
              return this.componentsList[this.activeName];
        }
    },
    components: {
      mainpage, changepassword
    },
}
</script>

<style lang="scss" scoped>
.title{
  position: fixed;
  font-size: 24px;
  padding: 25px;
  padding-left: 0px;
}
.tab{
  margin-top: 80px;
  height: calc(100% - 190px);
  position: fixed;
}
.component{
  margin-top: 80px;
  float: right;
  width: calc(100% - 130px);
}
</style>