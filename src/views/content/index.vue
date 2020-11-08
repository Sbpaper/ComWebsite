<template>
  <div>
    <AuthorBar />
    <div class="layout">
      <div class="w">
        <div class="page">
          <div class="title">
            困扰10亿人的拉屎压水花问题，我给出了最科学的策略！
          </div>
          <div class="info">
            <div class="item">
              发布于 2017-12-12
            </div>
            <div class="item">
              文章类型: <span class="import">转载</span>
            </div>
            <div class="item">
              原作者 <span class="import">毕导</span>
            </div>
            <div class="item">
              来源 (<span class="import">公众号：毕导 ID：bxt_thu</span>)
            </div>
            <div class="item">
              <a target="_blank" href="0"><span class="import">点我前往原文地址</span></a>
            </div>
          </div>
          <!-- <div v-if="$route.params.id">IDData {{ $route.params.id }}</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AuthorBar from "@/components/content/AuthorBar.vue";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    AuthorBar,
  },
  methods: {},
  created() {},
};
</script>
<style lang="scss" scoped>
.page {
  margin-top: 130px;
}
.title {display: flex; justify-content: center;
  width: 100%;
  font-size: 24px;
}
.info{display: flex; justify-content: center;
  width: 100%;
  font-size: 14px;
  margin-top: 15px;
  color: #838383;
  .item{
    float: left;
    margin-right: 23px;
  }
  .import{
    color: #007eff;
  }
}

</style>