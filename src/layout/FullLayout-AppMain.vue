<template>
  <section class="app-main">
    <transition
      name="fade-transform"
      mode="out-in"
    >
      <router-view :key="key"></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    }
  }
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
