<template>
  <section class="app-main">
    <div class="layoutPages">
      <div class="w">
        <div class="layout-lr2">
          <div class="l1">
            <IndexSidebar
              :tabname="'我关注的作者'"
              :link="'/category/'"
              :tablink="'/category'"
            />
            <IndexSidebar
              :tabname="'我感兴趣的标签'"
              :link="'/tag/'"
              :tablink="'/tag'"
            />
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
export default {
  name: "AppMain",
  computed: {
    key() {
      return this.$route.name !== undefined
        ? this.$route.name + +new Date()
        : this.$route + +new Date();
    },
  },
  components: {
    IndexSidebar,
  },
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
