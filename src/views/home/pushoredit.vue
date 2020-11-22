<template>
  <div class="layout">
    <div class="w" style="background-color: #fff; z-index: 99999">
      <div class="title">{{ pagetype == 0 ? "发布新文章" : "编辑文章" }}</div>
    </div>

    <div class="w">
      <div class="leftbar">
        <div class="inputtab">
          <div class="name">文章封面</div>
          <div class="content">
            <Upload
              :uploadkey="'article_cover'"
              :filename.sync="articleform.cover"
              :lodpath.sync="articleform.loadcover"
            />
          </div>
        </div>

        <div class="inputtab">
          <div class="name">文章标题</div>
          <div class="content">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="文章标题"
              v-model="articleform.title"
            >
            </el-input>
          </div>
        </div>

        <div class="inputtab">
          <div class="name">文章介绍</div>
          <div class="content">
            <el-input
              type="textarea"
              :rows="5"
              placeholder="介绍"
              v-model="articleform.introduce"
            >
            </el-input>
          </div>
        </div>

        <div class="inputtab">
          <div class="name">投稿类型</div>
          <div class="content">
            <el-select
              v-model="articleform.sourcetype"
              placeholder="文章来源"
              style="width: 100% !important"
            >
              <el-option
                style="width: 100% !important"
                v-for="item in options.sourcetype"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
        </div>

        <div
          class="inputtab"
          v-if="articleform.sourcetype == 2 || articleform.sourcetype == 3"
        >
          <div class="name">文章标题</div>
          <div class="content">
            <el-input
              v-model="articleform.sourceauthor"
              placeholder="原作者"
            ></el-input>
          </div>
        </div>

        <div class="inputtab">
          <div class="name">投稿类目</div>
          <div class="content">
            <el-select
              v-model="articleform.maincategory"
              placeholder="类目"
              style="width: 100% !important"
            >
              <el-option
                style="width: 100% !important"
                v-for="item in options.maincategory"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </div>
        </div>

        <div class="inputtab">
          <div class="name">活动栏目</div>
          <div class="content">
            <el-select
              v-model="articleform.activity"
              placeholder="活动"
              style="width: 100% !important"
            >
              <el-option
                style="width: 100% !important"
                v-for="item in options.activity"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
        </div>

        <div class="inputtab">
          <div class="name">编辑TAG</div>
          <div class="content">
            <el-tag
              :key="tag"
              v-for="tag in articleform.tags"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)"
            >
              {{ tag }}
            </el-tag>
            <el-input
              class="input-new-tag"
              v-if="inputVisible"
              v-model="inputValue"
              ref="saveTagInput"
              size="small"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm"
            >
            </el-input>
            <el-button
              v-else
              class="button-new-tag"
              size="small"
              @click="showInput"
              >+ New Tag</el-button
            >
          </div>
        </div>
      </div>
      <div class="redit">
        <editor
          v-model="articleform.content"
          :content="articleform.content"
          class="editor"
        />
        <el-button @click="Putdoc()">确认无误，点击投稿</el-button>
        {{ articleform }}
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Upload from "@/components/Upload.vue";
import Editor from "@/components/Editor.vue";
import { Getitem, Putarticle } from "@/api/article";
import { Querylist } from "@/api/category";
export default {
  name: "Home",
  data() {
    return {
      dynamicTags: ["标签一", "标签二", "标签三"],
      inputVisible: false,
      inputValue: "",
      options: {
        sourcetype: [
          {
            value: 1,
            label: "原创",
          },
          {
            value: 2,
            label: "趣味论文分享",
          },
          {
            value: 3,
            label: "趣味网文分享",
          },
        ],
        maincategory: [],
        activity: [],
      },
      pagetype: 0,
      articleid: null,
      articleform: {
        title: null,
        content: null,
        introduce: null,
        cover: null,
        loadcover: null,
        sourceauthor: null,
        sourceaddr: null,
        sourcetype: [],
        maincategory: [],
        activity: null,
        tags: [],
      },
    };
  },
  components: {
    Upload,
    Editor
  },
  methods: {
    handleClose(tag) {
      this.articleform.tags.splice(this.articleform.tags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.articleform.tags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    },
    Putdoc() {
      this.$http(Putarticle(this.articleform), (res) => {
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
      });
    },
    GetItem(id) {
      this.$http(
        Getitem({
          id: id,
        }),
        (res) => {
          console.log(res);
          if (res.code == 200) {
            let doc = this.doc;
            let data = res.data;
            doc.id = data.id;
            doc.title = data.title;
            doc.cover = data.coverfile;
            doc.introduce = data.introduce;
            doc.category = data.category;
            doc.subcategory = data.subcategory;
            doc.content = data.content;
            this.shownowcover = data.cover;
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
    getmaincategory() {
      this.$http(
        Querylist({
          querypage: this.currentPage,
        }),
        (res) => {
          console.log(res);
          if (res.code == 200) {
            this.$message({
              message: res.msg,
              type: "success",
            });
            this.options.maincategory = res.data;
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
  },
  created() {
    let id = this.$route.query.id;
    if (id) {
      this.GetItem(id);
    }
    this.getmaincategory();
  },
};
</script>
<style lang="scss" scoped>
.leftbar {
  width: 300px;
  // position: fixed;
  float: left;
  // margin-top: 80px;
}
.redit {
  width: calc(100% - 300px - 30px);
  margin-top: 30px;
  float: right;
}
.title {
  font-size: 24px;
  padding: 25px;
  padding-left: 0px;
}
.inputtab {
  margin-bottom: 25px;
  .name {
    font-size: 14px;
    width: 100%;
    margin-bottom: 10px;
  }
  .content {
    display: flow-root;
  }
}
</style>