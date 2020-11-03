<template>
  <div class="layoutPages">
    <div class="w">
      <div class="layout-lr2">
        <div class="l1">1</div>
        <div class="r1">
          <TabMunhead :tabname=hotTab.name :querymun=hotTab.mun :index.sync=hotTab.index @query="gethotTab()"/>
          <el-row :gutter="40">
            <el-col :span="12" v-for="(item, index) in hotTab.data" :key="'hotTab' + index">
              <Articleitem :data=item :style="0" />
            </el-col>
            <el-col :span="12" v-for="(item, index) in hotTab.data" :key="'hotTab1' + index">
              <Articleitem :data=item :style="0" />
            </el-col>
          </el-row>
          <TabMunhead :tabname=newTab.name />
          <el-row :gutter="40">
            <el-col :span="12" v-for="(item, index) in hotTab.data" :key="'hotTab2' + index">
              <Articleitem :data=item :style="0" />
            </el-col>
            <el-col :span="12" v-for="(item, index) in hotTab.data" :key="'hotTab3' + index">
              <Articleitem :data=item :style="0" />
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TabMunhead from "@/components/TabMunhead.vue";
import Articleitem from "@/components/item/Articleitem.vue";
export default {
  name: "Find",
  data() {
    return {
      hotTab:{
        name:"热门文章",
        index: 0,
        mun:[
          {name:"全部", id:1},
          {name:"站内原创", id:2},
          {name:"趣味论文", id:3},
          {name:"趣味网文分享", id:4}
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
      },
      newTab:{
        name:"最新投稿",
      }
    };
  },
  components: {
    TabMunhead, Articleitem
  },
  methods: {
    gethotTab(){
      console.log("触发获取",this.hotTab.mun[this.hotTab.index].id)
    },
    getnewTab(){
      console.log("触发获取","getnewTab")
    }
  },
  created() {

  }
};
</script>
<style lang="scss" scoped>
</style>