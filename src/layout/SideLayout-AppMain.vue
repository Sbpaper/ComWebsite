<template>
  <section class="app-main">
    <transition
      name="fade-transform"
      mode="out-in"
    >

      <div class="layoutPages">
        <div class="w">
          <div class="layout-lr2">
            <div class="l1">
              <IndexSidebar :tabname="'主学科'" :link="'/category/'" :tablink="'/category'" />
              <IndexSidebar :tabname="'专业标签'" :link="'/tag/'" :tablink="'/tag'" />
              <IndexSidebar :tabname="'热门内容标签'" :link="'/tag/'" />
            </div>
            <div class="r1">
              <router-view :key="key"></router-view>
            </div>
          </div>
        </div>
      </div>

    </transition>
  </section>
</template>

<script>
import IndexSidebar from "@/components/IndexSidebar.vue";
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    }
  },
  components: {
    IndexSidebar
  },
}
</script>
<style scoped>
.app-main {
  margin-top: 54px;
  min-height: calc(100vh - 54px);
  position: relative;
  overflow: hidden;
}
</style>
