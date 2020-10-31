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

        <div class="search">
          <div class="li">
            <div class="icon"><img src="@/assets/img/search.png" /></div>
            <div class="input">
              <input  placeholder="Serach"/>
            </div>
          </div>
        </div>
        
        <div class="userhead r">
          <div class="ico"><i class="el-icon-arrow-down"></i></div>
          <div class="img"><img src="@/assets/userhead.png" /></div>
        </div>

        <div class="icobut r">
          <div class="img"><img src="@/assets/ico/header-add.png"></div>
        </div>

        <div class="icobut r">
          <div class="img"><img src="@/assets/ico/header-msg.png"></div>
          
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
    return {};
  },
  watch: {},
  methods: {
    logoutbutton(){
      logout()
      router.push({ name: "login" })
    }
  },
};
</script>