<template>
    <div class="layout">
      <div class="w">
        <div class="title">我的创作中心</div>
      </div>
      <div class="w">
        <el-tabs tab-position="left" v-model="activeName" class="tab">
          <el-tab-pane label="全部文章" name="List"></el-tab-pane>
          <el-tab-pane label="正常文章" name="Liste"></el-tab-pane>
          <el-tab-pane label="审核中或等待审核" name="Listb"></el-tab-pane>
          <el-tab-pane label="我收到的评论" name="Lista"></el-tab-pane>
          <el-tab-pane label="回收站" name="Listc"></el-tab-pane>
        </el-tabs>
        <div class="component"><component :is="isComponent" ></component></div>
    </div>
  </div>
</template>

<script>
import List from "./list.vue";
import Lista from "./list2.vue";
import Listb from "./list.vue";
import Listc from "./list2.vue";
export default {
    data() {
       return {
         activeName: "List",
         componentsList: {
           List: "List",//需要引入具体的组件
           Lista: "Lista",
           Listb: "Listb",
           Listc: "Listc",
           Liste: "Listb"
           }
       }
    },
    computed: {
        isComponent() {
              return this.componentsList[this.activeName];
        }
    },
    components: {
      List,Lista, Listb,Listc
    },
}
</script>

<style lang="scss" scoped>
.title{
  font-size: 24px;
  padding: 25px;
  padding-left: 0px;
}
.tab{
  // margin-top: 40px;
  height: calc(100% - 190px);
  position: fixed;
}
.component{
  // margin-top: 40px;
  float: right;
  width: calc(100% - 100px);
}
</style>