<template>
  <div>
    <TabMunhead :tabname="'订阅内容'" :querymun=mun :index.sync=TabMunheadindex @query="gethotTab()"/>
    <Articleitem v-for="(item, index) in data" :key="'Articleitem' + index" :data=item :sty="0" />
  </div>
</template>

<script>
// @ is an alias to /src
import TabMunhead from "@/components/TabMunhead.vue";
import Articleitem from "@/components/item/Articleitem.vue";
export default {
  name: "subscription",
  data() {
    return {
      TabMunheadindex:0,
      mun:[
        {name:"我的关注", id:1},
        {name:"标签内容更新", id:2}
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
    TabMunhead, Articleitem
  },
  methods: {
    gethotTab(){
      console.log("触发获取",this.mun[this.TabMunheadindex].id)
    }
  },
  created() {
  }
};
</script>
<style lang="scss" scoped>
</style>