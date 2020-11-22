<template>
  <section class="app-main">
    <div class="layoutPages">
      <div class="w">
        <div class="layout-lr2">
          <div class="l1">
            <IndexSidebar
              :tabname="'主学科'"
              :link="'/category/'"
              :tablink="'/category'"
              :data=maincategory
            />
            <IndexSidebar
              :tabname="'热门标签'"
              :link="'/tag/'"
              :tablink="'/tag'"
              :data=tag
            />
            <!-- <IndexSidebar :tabname="'热门内容标签'" :link="'/tag/'" /> -->
          </div>
          <div class="r1">
            <transition name="fade-transform" mode="out-in">
              <router-view :key="key"></router-view>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import IndexSidebar from "@/components/IndexSidebar.vue";
import { Querylist } from "@/api/category";
import { tophottaglist } from "@/api/tag";
export default {
  name: "AppMain",
  data() {
    return {
        maincategory:[],
        tag:[]
    };
  },
  computed: {
    key() {
      return this.$route.name !== undefined
        ? this.$route.name + +new Date()
        : this.$route + +new Date();
    },
  },
  methods:{
    getside(){
      this.$http(
        Querylist({
        }),
        (res) => {
          console.log(res);
          if (res.code == 200) {
            this.$message({
              message: res.msg,
              type: "success",
            });
            this.maincategory = res.data;
          } else {
            this.$message({
              message: res.msg,
              type: "error",
              duration: 5 * 1000,
            });
          }
        }
      );
      this.$http(
        tophottaglist({
        }),
        (res) => {
          console.log(res);
          if (res.code == 200) {
            this.$message({
              message: res.msg,
              type: "success",
            });
            this.tag = res.data;
          } else {
            this.$message({
              message: res.msg,
              type: "error",
              duration: 5 * 1000,
            });
          }
        }
      );
    }
  },
  components: {
    IndexSidebar,
  },
  created(){
    this.getside()
  }
};
</script>
<style scoped>
.app-main {
  margin-top: 54px;
  min-height: calc(100vh - 54px);
  position: relative;
  overflow: hidden;
}
</style>
