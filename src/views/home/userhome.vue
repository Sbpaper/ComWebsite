<template>
  <div class="layout">
    <div class="page-header">
      <div class="w">
        <div class="userheader"><img :src="userinfo.head" /></div>
        <div class="userbar">
          <div class="username">{{userinfo.username}}</div>
          <div class="introduce">
            {{ userinfo.introduce || "此人很懒什么都没留下"}}
          </div>
          <div class="set">
            <div
              class="follow followactivate"
              v-if="followstatus == 0"
              @click="follow()"
            >
              关注 | Follow
            </div>
            <div class="follow" v-if="followstatus == 1" @click="unfollow()">
              已关注
            </div>
            <div class="ditem">粉丝数 <span class="data">{{userinfo.fans_count}}</span></div>
            <div class="ditem">关注数 <span class="data">{{userinfo.follow_count}}</span></div>
            <div class="ditem">获赞 <span class="data">{{userinfo.praised_count}}</span></div>
          </div>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="w">
        <div class="layout-lr2">
          <div class="l1" style="position: inherit !important;">
              <div class="barh">介绍</div>
              <div class="introduce">{{userinfo.space_introduce || "此人很懒什么都没留下"}}</div>

              <div class="linklist">

                <div class="linkitem" v-if="userinfo.space_url">
                  <a target="_blank" :href="userinfo.space_url">
                  <div class="ico">
                    <img src="@/assets/ico/userpage-linkico1.png" />
                  </div>
                  <div class="r">
                    <div class="title">TA的链接</div>
                    <div class="link">{{userinfo.space_url}}</div>
                  </div>
                  </a>
                </div>

                <div class="linkitem" v-if="userinfo.space_bili">
                  <a target="_blank" :href="userinfo.space_bili">
                  <div class="ico">
                    <img src="@/assets/ico/userpage-linkico2.png" />
                  </div>
                  <div class="r">
                    <div class="title">TA的BILIBILI频道</div>
                    <div class="link">{{userinfo.space_bili}}</div>
                  </div>
                  </a>
                </div>

                <div class="linkitem" v-if="userinfo.space_youtube">
                  <a target="_blank" :href="userinfo.space_youtube">
                  <div class="ico">
                    <img src="@/assets/ico/userpage-linkico3.png" />
                  </div>
                  <div class="r">
                    <div class="title">TA的YOUTUBE频道</div>
                    <div class="link">{{userinfo.space_youtube}}</div>
                  </div>
                  </a>
                </div>

                <div class="linkitem" v-if="userinfo.space_zhihu">
                  <a target="_blank" :href="userinfo.space_zhihu">
                  <div class="ico">
                    <img src="@/assets/ico/userpage-linkico4.png" />
                  </div>
                  <div class="r">
                    <div class="title">TA的知乎</div>
                    <div class="link">{{userinfo.space_zhihu}}</div>
                  </div>
                  </a>
                </div>

                <div class="linkitem" v-if="userinfo.space_github">
                  <a target="_blank" :href="userinfo.space_github">
                  <div class="ico">
                    <img src="@/assets/ico/userpage-linkico5.png" />
                  </div>
                  <div class="r">
                    <div class="title">TA的GITHUB</div>
                    <div class="link">{{userinfo.space_github}}</div>
                  </div>
                  </a>
                </div>

              </div>

          </div>
          <div class="r1">
              <div class="barh">
                <FilterBar
                class="filter"
                :filterAllname="'全部'"
                :filter.sync="filterIndex"
                :filterParams="filterParams"
                :tborder="false"
                @query="getList()"
                />
              </div>
              <el-row :gutter="20">
                <el-col :span="6" v-for="(item, index) in data" :key="'Articleitem' + index">
                    <Articleitem
                    :data="item"
                    :sty="1"
                    />
                </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import FilterBar from "@/components/FilterBar.vue";
import Articleitem from "@/components/item/Articleitem.vue";
import { UserInfo } from "@/api/user";
export default {
  name: "userhome",
  data() {
    return {
      filterIndex: 0,
      followstatus: 0,
      filterParams: [
        { name: "站内原创", id: 1 },
        { name: "趣味论文分享", id: 2 },
        { name: "趣味网文分享", id: 3 },
      ],
      userinfo: {},
      userid: {},
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
    FilterBar, Articleitem
  },
  methods: {
    getuserinfo(){
      this.$http(
        UserInfo({
          id: this.$route.params.id,
          type: ["space","follow"]
        }),
        (res) => {
          console.log(res);
          if (res.code == 200) {
            this.userinfo = res.data
            this.userid = res.data.id
          } else {
            this.$message({
              message: res.msg,
              type: "error",
              duration: 5 * 1000,
            });
          }
        }
      );
    },
    follow() {
      this.followstatus = 1;
    },
    unfollow() {
      this.followstatus = 0;
    },
    getList() {},
  },
  created() {
    this.getuserinfo()
  },
};
</script>
<style lang="scss" scoped>
.page-header {
  width: 100%;
  padding-top: 66px;
  padding-bottom: 66px;
  border-bottom: 1px solid #dadada;
  display: flow-root;
}
.userheader {
  width: 140px;
  height: 140px;
  float: left;
  img {
    width: 100%;
  }
}
.userbar {
  margin-top: 12px;
  float: left;
  margin-left: 25px;
  .username {
    font-size: 24px;
    height: 24px;
  }
  .introduce {
    margin-top: 20px;
    font-size: 14px;
    height: 14px;
  }
  .set {
    margin-top: 20px;
    line-height: 40px;
  }
  .follow {
    padding-left: 23px;
    padding-right: 23px;
    height: 40px;
    font-size: 14px;
    color: #fff;
    background-color: #bfbfbf;
    float: left;
    border-radius: 3px;
  }
  .followactivate {
    background-color: #007eff;
  }
  .ditem {
    float: left;
    font-size: 14px;
    margin-left: 20px;
    color: #565656;
    .data {
      color: #007eff;
    }
  }
}
.filter{margin-top: 17.5px;margin-bottom: 17.5px;}
.barh{
    height: 80px;line-height: 80px;font-size: 14px;color: #898989; display: flow-root;
}
.introduce{
    font-size: 12px;
}
.linklist{
  margin-top: 25px;
}
.linkitem{
  margin-bottom: 25px;
  display: flow-root;
  .ico{
    float: left;
    width: 22px;height: 22px;
    margin-top: 5px;
    img{width: 100%;}
  }
  .r{
    width: calc(100% - 32px);
    float: right;
    color: #505050;
  }
  .title{
    font-size: 14px;
  }
  .link{
    font-size: 12px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
}
</style>