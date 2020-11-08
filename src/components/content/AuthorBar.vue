<template>
  <div class="AuthorBar">
    <div class="layout">
        <div class="w">

            <div class="header">
                <img src="@/assets/userhead.png" />
            </div>

            <div class="info">
                <div class="top">
                    <div class="username">毕导THU</div>
                    <div class="numbar">关注数 <span class="data">84</span></div>
                    <div class="numbar">粉丝数 <span class="data">8344</span></div>
                </div>
                <div class="bottom">
                    <div class="introduce">数理化狂热爱好者，想做出最好玩的科学视频！公众号/微博：毕导THU。商务联系:bidaodao7</div>
                </div>
                
                <div class="followbutton" v-if="followstatus == 0" @click="follow()">关注 | Follow</div>
                <div class="followbutton follownow" v-if="followstatus == 1" @click="unfollow()">已关注</div>

            </div>

            

        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthorBar',
  data(){
    return{
        followstatus: 0
    }
  },
  props: {
  },
  methods: {
    getdata(){
        this.followstatus = 0
    },
    follow(){
        this.followstatus = 1
    },
    unfollow(){
        this.followstatus = 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.AuthorBar{
    background-color: #fff;
    position: fixed;
    z-index: 10;
    top: 54px;
    overflow: hidden;
    width: 100%;
    height: 90px;
    box-shadow: 0 0 5px 0px #d0d0d0;
    .header{
        float: left;
        width: 90px;
        height: 90px;
        img{width: 100%;}
    }
    .info{
        width: calc(100% - 136px);
        position: relative;
        float: left;
        padding: 23px;
        .top{
            height: 18px;
            line-height: 18px;
            width: 100%;
            margin-bottom: 15px;
        }
        .bottom{
            height: 12px;
            line-height: 12px;
            width: 100%;
        }
        .username{
            float: left;
            font-size: 18px;color: #000;
        }
        .numbar{
            margin-left: 23px;
            float: left;
            font-size: 12px;
            .data{
                color: #007eff;
            }
        }
        .introduce{
            font-size: 12px;
        }
    }
    .followbutton{
        position: absolute;right: 0;top: 0;bottom: 0;margin: auto;border-radius: 4px;color: #007eff;
        height: 40px;padding-left: 23px;padding-right: 23px;text-align: center;border: 1px solid #007eff;line-height: 40px;
    }
    .follownow{
        color: #c8c8c8;
        border: 1px solid #c8c8c8;
    }
}
</style>