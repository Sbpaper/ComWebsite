<template>
  <div>
    <TabMunhead :tabname=name :querymun=mun :index.sync=index @query="gethotTab()"/>
    <FilterBar :filter.sync=filter @query="gethotTab()" />
    <Articleitem v-for="(item, index) in data" :key="'Articleitem' + index" :data=item :sty="0" />
  </div>
</template>

<script>
// @ is an alias to /src
import TabMunhead from "@/components/TabMunhead.vue";
import FilterBar from "@/components/FilterBar.vue";
import Articleitem from "@/components/item/Articleitem.vue";
export default {
  name: "category",
  data() {
    return {
        name:"理学",
        index: 0,
        filter: 0,
        mun:[
          {name:"全部", id:1},
          {name:"站内原创", id:2},
          {name:"趣味论文分享", id:3},
          {name:"趣味网文分享", id:4}
        ],
        filtertype:[
          {name:"最新", id:1},
          {name:"热门", id:2},
          {name:"评论数", id:3}
        ],
        data:[
          {
            id:0,
            title:"【毕导】男同胞福音！如何解决尿尿时最尴尬的难题？建议偷偷收藏",
            introduce: "女生可能有所不知，我们男生上厕所的时候，一般都选隔壁没人的坑...毕竟隔壁有人跟你一起尿尿总觉得怪怪的。由此，男生的坑位多少就很有讲究了，今天我就用算法的思维跟大家讲讲，设计多少个坑位，才不至于尴尬的同时更划算",
            cover:"https://www.weivird.com/static/article/cover/20201029053553433.png",
            author: "毕导THU",
            pushtype: 1,
            sourcetype: 3,
            commentcount: 38,
            category: {
              name: "理学",
              id: 1
            },
            user:{
              username: "网文精选"
            }
          }
        ]
    };
  },
  components: {
    TabMunhead, FilterBar, Articleitem
  },
  methods: {
    gethotTab(){
      console.log("触发获取",this.mun[this.index].id, this.filtertype[this.filter].id)
    }
  },
  created() {
  }
};
</script>
<style lang="scss" scoped>
</style>