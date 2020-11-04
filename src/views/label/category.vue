<template>
  <div>
    category
    <div v-if="$route.params.id">IDData {{ $route.params.id }}</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "category",
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