<template>
  <div>
    <div class="page">
      <div class="tabname">修改头像</div>

      <div class="li">
        <Upload :uploadkey='"userhead"' :filename.sync=headform.filename :lodpath.sync=headform.lodpath />
      </div>

      <div class="li">
        <el-button @click="Savehead()">保存当前头像</el-button><span> {{headform.filename}}</span>
      </div>
    </div>

    <div class="page">
      <div class="tabname">更改用户名</div>
      <div class="li">
        <el-input
          type="text"
          placeholder="请输入内容"
          v-model="username"
          maxlength="19"
          show-word-limit
        >
        </el-input>
      </div>

      <div class="li">
        <el-button @click="Saveusername()">保存</el-button>
      </div>
    </div>

    <div class="page">
      <div class="tabname">修改个人介绍</div>
      <div class="li">
        <el-input
          type="text"
          placeholder="请输入内容"
          v-model="introduce"
          maxlength="19"
          show-word-limit
        >
        </el-input>
      </div>

      <div class="li">
        <el-button @click="Saveintroduce()">保存</el-button><span> {{headform.filename}}</span>
      </div>
    </div>

    <div class="page">
      <div class="tabname">更多设置</div>
      
      <div class="li">
        <el-input
          type="textarea"
          :rows="3"
          placeholder="请输入内容"
          v-model="space_introduce">
        </el-input>
      </div>

      <div class="li">
        <el-input placeholder="请输入内容" v-model="comurl.space_url">
          <template slot="prepend">你的个人URL</template>
        </el-input>
      </div>

      <div class="li">
        <el-input placeholder="请输入内容" v-model="comurl.space_bilibili">
          <template slot="prepend">BiliBili个人主页</template>
        </el-input>
      </div>

      <div class="li">
        <el-input placeholder="请输入内容" v-model="comurl.space_youtube">
          <template slot="prepend">YouTube个人频道</template>
        </el-input>
      </div>

      <div class="li">
        <el-input placeholder="请输入内容" v-model="comurl.space_zhihu">
          <template slot="prepend">知乎主页</template>
        </el-input>
      </div>

      <div class="li">
        <el-input placeholder="请输入内容" v-model="comurl.space_github">
          <template slot="prepend">Github</template>
        </el-input>
      </div>

      <div class="li">
        <el-button @click="Savespace()">保存</el-button><span> {{headform.filename}}</span>
      </div>

      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Upload from "@/components/Upload.vue";
import { getuser, uploaduserhead } from "@/utils/auth";
import { UserInfo, Changeinfo, ChangeUsername } from "@/api/user";
export default {
  name: "mainpage",
  data() {
    return {
      headform: {
        filename: null,
        lodpath: null
      },
      username: null,
      introduce: null,
      space_introduce: null,
      comurl: {
        space_url:null,
        space_bilibili:null,
        space_youtube:null,
        space_zhihu:null,
        space_github: null
      }
    };
  },
  components: {
    Upload
  },
  methods: {
    getuserinfo(){
      this.$http(
        UserInfo({
          id: getuser().UserID,
          type: ["space","follow"]
        }),
        (res) => {
          console.log(res);
          if (res.code == 200) {
            
            this.username = res.data.username
            this.headform.lodpath = res.data.head
            this.introduce = res.data.introduce

            this.space_introduce = res.data.space_introduce
            this.comurl.space_url = res.data.space_url
            this.comurl.space_bilibili = res.data.space_bilibili
            this.comurl.space_youtube = res.data.space_youtube
            this.comurl.space_zhihu = res.data.space_zhihu
            this.comurl.space_github = res.data.space_github

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
    Savehead(){
      this.$http(
        Changeinfo({
          "head": this.headform.filename
        }),
        (res) => {
          console.log(res);
          if (res.code == 200) {
            this.$message({
              message: res.msg,
              duration: 5 * 1000,
            });
            uploaduserhead(res.data.userhead)
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
    Saveusername(){
      this.$http(
        ChangeUsername({
          "username": this.username
        }),
        (res) => {
          console.log(res);
          if (res.code == 200) {
            this.$message({
              message: res.msg,
              duration: 5 * 1000,
            });
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
    Saveintroduce(){
      this.$http(
        Changeinfo({
          "introduce": this.introduce
        }),
        (res) => {
          console.log(res);
          if (res.code == 200) {
            this.$message({
              message: res.msg,
              duration: 5 * 1000,
            });
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
    Savespace(){
      this.$http(
        Changeinfo({
          space_introduce: this.space_introduce,
          space_url: this.comurl.space_url,
          space_bilibili: this.comurl.space_bilibili,
          space_youtube: this.comurl.space_youtube,
          space_zhihu: this.comurl.space_zhihu,
          space_github: this.comurl.space_github,
        }),
        (res) => {
          console.log(res);
          if (res.code == 200) {
            this.$message({
              message: res.msg,
              duration: 5 * 1000,
            });
          } else {
            this.$message({
              message: res.msg,
              type: "error",
              duration: 5 * 1000,
            });
          }
        }
      );
    }
  },
  created() {
    this.getuserinfo()
  }
};
</script>
<style lang="scss" scoped>
.page{
  margin-bottom: 30px;
  padding: 30px;
  // border: 1px dashed #f4f4f4;
  border: 1px solid #f4f4f4;
  box-shadow: 0px 3px 3px 3px #fbfbfb;
  border-radius: 3px;
  padding-bottom: 0;
  .tabname{
    font-size: 18px;font-weight: lighter;color: #3675ff;width: 100%;margin-bottom: 30px;
  }
  .li{
    width: 100%;
    margin-bottom: 30px;
  }
}
</style>