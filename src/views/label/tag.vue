<template>
  <div>
    tag
    <div v-if="$route.params.id">IDData {{ $route.params.id }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "tag",
  data() {
    return {
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
</style>