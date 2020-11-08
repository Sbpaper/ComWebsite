<template>
  <div>
    <div class="search">
      <input
        class="input"
        v-model="searchInput"
        @keyup.enter="search()"
        placeholder="请输入内容"
      />
      <div class="buttom" @click="search()">搜索</div>
    </div>
    <FilterBar
      :filter.sync="filterBarIndex"
      :tborder="false"
      @query="search()"
      v-if="showfilter"
    />
    <div class="results">0 Results</div>
    <Articleitem
      v-for="(item, index) in data"
      :key="'Articleitem' + index"
      :data="item"
      :sty="0"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Articleitem from "@/components/item/Articleitem.vue";
import FilterBar from "@/components/FilterBar.vue";
import merge from "webpack-merge";
export default {
  name: "Find",
  data() {
    return {
      showfilter: false,
      searchInput: "",
      filterBarIndex: 0,
      page: 0,
      filterParams: [
        { name: "最新", id: 1 },
        { name: "热门", id: 2 },
        { name: "评论数", id: 3 },
      ],
      data: [
        {
          id: 0,
          title: "【毕导】男同胞福音！如何解决尿尿时最尴尬的难题？建议偷偷收藏",
          introduce:
            "女生可能有所不知，我们男生上厕所的时候，一般都选隔壁没人的坑...毕竟隔壁有人跟你一起尿尿总觉得怪怪的。由此，男生的坑位多少就很有讲究了，今天我就用算法的思维跟大家讲讲，设计多少个坑位，才不至于尴尬的同时更划算",
          cover:
            "https://www.weivird.com/static/article/cover/20201029053553433.png",
          author: "毕导THU",
          pushtype: 1,
          sourcetype: 3,
          commentcount: 38,
          category: {
            name: "理学",
            id: 1,
          },
          user: {
            username: "网文精选",
          },
        },
      ],
    };
  },
  components: {
    Articleitem,
    FilterBar,
  },
  methods: {
    search() {
      console.log(this.filterParams[this.filterBarIndex].id);
      this.$router.push({
        query: merge(this.$route.query, {
          keyword: this.searchInput,
          filter: this.filterBarIndex,
          page: this.page,
        }),
      });
    },
  },
  created() {
    if (this.$route.query.keyword) {
      this.searchInput = this.$route.query.keyword;
    }

    if (this.$route.query.page) {
      let page = Number(this.$route.query.page);
      this.page = page;
    } else {
      this.page = 0;
    }

    if (this.$route.query.filter) {
      let filter = Number(this.$route.query.filter);
      this.filterBarIndex = filter;
    } else {
      this.filterBarIndex = 0;
    }
    this.showfilter = true;
  },
};
</script>
<style lang="scss" scoped>
.search {
  font-size: 14px;
  height: 38px;
  line-height: 38px;
  .input {
    margin: 0;
    padding: 0 15px 0 15px;
    float: left;
    height: 38px;
    border: 1px solid #c0c0c0;
    margin-right: 10px;
    border-radius: 3px;
    width: 50%;
  }
  .buttom {
    height: 38px;
    border: 1px solid #c0c0c0;
    float: left;
    padding: 0 23px 0 23px;
    border-radius: 3px;
  }
}
.results {
  font-size: 18px;
  height: 45px;
  border-bottom: 1px solid #c0c0c0;
  line-height: 30px;
  margin-bottom: 15px;
}
</style>