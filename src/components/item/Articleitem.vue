<template>
  <div class="article-item">

    <div v-if="sty == 0">
      <router-link target="_blank" :to="'/content/' + data.id">
        <div class="itembox-style1">
          <div class="cover">
            <img :src="data.cover" />
          </div>
          <div class="r">
            <div class="title">{{ data.title }}</div>
            <div class="introduce">{{ data.introduce }}</div>
            <div class="bar">
                <div class="sourcetype" v-bind:class="{'sourcetypec1':data.sourcetype == 1,'sourcetypec2':data.sourcetype == 2,'sourcetypec3':data.sourcetype == 3}">
                    {{sourcetype[data.sourcetype]}}
                </div>
                <div class="author">
                    {{data.author}}
                </div>
                <div class="category">
                    {{data.category.name}}
                </div>
                <div class="user">
                    投稿者: {{data.user.username}}
                </div>
                <div class="commentcount">
                    <div class="ico">
                        <img src="@/assets/ico/commentcount.png">
                    </div>
                    <span>{{data.commentcount}} 个评论</span>
                </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>

    <div v-if="sty == 1">
      <router-link target="_blank" :to="'/content/' + data.id">
      <div class="itembox-style2">
        <div class="cover">
          <div class="bar" :style="`background-image: url(${require('@/assets/img/articleitemboxshow.png')});`">
            <div class="type" v-bind:class="{'sourcetypec1':data.sourcetype == 1,'sourcetypec2':data.sourcetype == 2,'sourcetypec3':data.sourcetype == 3}">
              {{sourcetype[data.sourcetype]}}
            </div>
            <div class="item">
              <div class="ico"><img src="@/assets/img/articleitemcemcount.png"></div>
              <div class="txt"><span>38</span> 个评论</div>
            </div>
          </div>
          <img :src="data.cover" />
        </div>
        <div class="title">
          <div class="main">{{ data.title }}</div>
          <div class="bar">
            <div class="item">作者: <span>{{data.author}}</span></div>
            <div class="item">投稿者: <span>{{data.user.username}}</span></div>
          </div>
        </div>
      </div>
        
      </router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: "Articleitem",
  data() {
    return {
        sourcetype:{
            1:"站内原创",
            2:"趣味论文分享",
            3:"趣味网文分享"
        }
    };
  },
  props: {
    data:{
      type: Object,
      default:function(){
          return {
            id:0,
            title:"【毕导】男同胞福音！如何解决尿尿时最尴尬的难题？建议偷偷收藏",
            introduce: "女生可能有所不知，我们男生上厕所的时候，一般都选隔壁没人的坑...毕竟隔壁有人跟你一起尿尿总觉得怪怪的。由此，男生的坑位多少就很有讲究了，今天我就用算法的思维跟大家讲讲，设计多少个坑位，才不至于尴尬的同时更划算",
            cover:"https://www.weivird.com/static/article/cover/20201029053553433.png",
            author: "毕导THU",
            pushtype: 1,
            sourcetype: 2,
            commentcount: 38,
            user:{
              username: "网文精选"
            }
        }
      }
    },
    sty:{
      type: Number,
      default:0
    }
  },
};
</script>

<style lang="scss" scoped>
.itembox-style1 {
  width: 100%;
  padding-bottom: 30px;
  display: flow-root;
  .cover {
    float: left;
    width: 190px;
    height: 119px;
    img {
      height: 100%;
      width: 100%;
    }
    margin-right: 15px;
  }
  .r {
    position: relative;
    float: left;
    width: calc(100% - 205px);
    height: 119px;
  }
  .title {
    font-size: 16px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .introduce {
    margin-top: 5px;
    color: #939393;
    font-size: 12px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .bar{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      line-height: 18px;
      font-size: 12px;color: #6f6f6f;
  }
  .sourcetype{
      float: left;
      height: 18px;
      padding-left: 4px;
      padding-right: 4px;
      font-size: 12px;
      color: #fff;
      border-radius: 3px;
      line-height: 18px;
      margin-right: 15px;
  }
  .author{float: left;margin-right: 15px;}
  .category{float: left;margin-right: 15px;}
  .user{float: left;margin-right: 15px;}
  .commentcount{float: left;
    .ico{float: left;width: 13px;height: 12px;margin-right: 5px;
        img{width: 100%;padding-top: 4px;}
    }
  }
}
.itembox-style2{
  width: 100%;
  .cover{
    position: relative;
    width: 100%;
    overflow: hidden;
    .bar{
      padding: 10px; position: absolute;bottom: 5px;left: 0;right: 0;
      .type{
        height: 18px;font-size: 12px;line-height: 18px;padding-left: 10px;padding-right: 10px;float: left;color: #fff;border-radius: 3px;
      }
      .item{
        float: left;color: #fff;line-height: 18px; font-size: 12px;margin-left: 10px;
        .ico{width: 13px;height: 12px;float: left;margin-right: 5px;margin-top: 2px;}
        .txt{
          float: left;
        }
      }
    }
    img{width: 100%;}
  }
  .title{
    .main{height: 35px;width: 100%;font-size: 14px;}
    .bar{
      margin-top: 13px;
      color: #6f6f6f;
      font-size: 13px;
      .item{float: left;margin-right: 10px;}
    }
  }
}
.sourcetypec1{
    background-color: #007eff;
}
.sourcetypec2{
    background-color: #0dbe00;
}
.sourcetypec3{
    background-color: #ff9600;
}
</style>