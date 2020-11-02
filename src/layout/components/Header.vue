<template>
  <div class="commin-header">
    <div class="layout">
    <div class="header">
      <div class="w">

        <div class="logo l">
          <img src="@/assets/img/logo.png" />
        </div>

        <div class="txtlogo l">
          <img src="@/assets/img/txt-logo.png" />
        </div>

        <div class="lien l"></div>

        <div class="description l">看沙雕，上沙雕</div>

        <div class="nav l">
          <div class="item"><div class="content">发现</div></div>
          <div class="active"><div class="content">我的订阅</div></div>
        </div>
        
        <div class="userhead r" @click="openporupc">
          <div class="ico"><i class="el-icon-arrow-down"></i></div>
          <div class="img"><img src="@/assets/userhead.png" /></div>
        </div>

        <div class="icobut r" v-if="headermodule == 1">
          <div class="img"><img src="@/assets/ico/header-add.png"></div>
        </div>

        <div class="icobut r" v-if="headermodule == 1">
          <div class="img"><img src="@/assets/ico/header-msg.png"></div>
        </div>

        <div class="search r" v-if="headermodule == 1">
          <div class="li">
            <div class="icon"><img src="@/assets/ico/search.png" /></div>
            <div class="input">
              <input  placeholder="Serach"/>
            </div>
          </div>
        </div>

        <div class="porup" v-if="openporup== true">
          <div class="user">
            <div class="header"><img src="@/assets/userhead.png" /></div>
            
            <div class="rbox">
               <div class="username">WeiVi</div>
               <div class="button">账号设置</div>
            </div>
          </div>
          <div class="mun">
            <div class="item"  v-if="headermodule == 2">
              <div class="ico"><img src="@/assets/ico/header-msg2.png" /></div>
              <div class="name">消息</div>
            </div>
            <div class="item"  v-if="headermodule == 2">
              <div class="ico"><img src="@/assets/ico/header-add2.png" /></div>
              <div class="name">新增</div>
            </div>
            <div class="item">
              <div class="ico"><img src="@/assets/ico/header-my.png" /></div>
              <div class="name">我的主页</div>
            </div>
            <div class="item">
              <div class="ico"><img src="@/assets/ico/header-create.png" /></div>
              <div class="name">我的创作</div>
            </div>
          </div>
          <div class="search2"  v-if="headermodule == 2">
            <div class="buttom">搜索</div>
            <input class="input" placeholder="请输入内容"/>
          </div>
          <div class="logout" @click="logoutbutton()">
            <div class="ico"><img src="@/assets/ico/header-logout.png" /></div>
            <div class="txt">退出登录</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import { logout } from "@/utils/auth";
import router from '@/router'
export default {
  name: "Header",
  components: {},
  data() {
    return {
      openporup: false,
      headermodule: 1,
      screenWidth: document.body.clientWidth,
    };
  },
  created(){
      console.log('true')
      if(document.body.clientWidth > 992){
          this.headermodule = 1
      }else{
          this.headermodule = 2
      }
  },
  watch: {
    headermodule(val){
      console.log(val)
    },

    screenWidth(val) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenWidth = val;
        this.timer = true;
        let that = this;
        setTimeout(function() {
          // 打印screenWidth变化的值
          if (that.screenWidth < 992) {
            that.headermodule = 2
          } else {
            that.headermodule = 1
          }
          console.log(that.screenWidth);
          that.timer = false;
        }, 400);
      }
    }
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };
  },
  methods: {
    openporupc(){
      if(this.openporup == false){
        this.openporup = true
      }else{
        this.openporup = false
      }
    },
    logoutbutton(){
      logout()
      router.push({ name: "login" })
    }
  },
};
</script>