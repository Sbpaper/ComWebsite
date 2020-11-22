<template>
  <div class="IndexSidebar">
      <div class="title" v-if="tablink">
        <router-link :to="tablink">{{tabname}}</router-link>
      </div>
      <div class="title" v-if="!tablink">
        {{tabname}}
      </div>
      <div class="itemlis">
      <div v-for="(item, index) in data" :key="'IndexSidebar' + tabname + '-' + index" class="item">
            <router-link :to="link + item.id">
                {{item.name}}
            </router-link>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "IndexSidebar",
  data() {
    return {
        sourcetype:{
        }
    };
  },
  props: {
    data:{
      type: Array,
      default:function(){
          return [
              {
                  to:1,
                  title:"理学"
              }
          ]
      }
    },
    tablink:{
      type: String,
      default: ""
    },
    tabname:{
      type: String,
      default: "板块名"
    },
    link:{
      type: String,
      default: "/content/"
    }
  },
};
</script>

<style lang="scss" scoped>
.IndexSidebar{
  margin-bottom: 50px;
    .title{
        font-size: 18px;
        color: #000;
        width: 100%;
        margin-bottom: 15px;
    }
    .itemlis{
        .item{
            margin-bottom: 15px;
            font-size: 14px;
            color: #303030;
        }
    }
}
</style>