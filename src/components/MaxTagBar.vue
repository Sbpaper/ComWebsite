<template>
  <div class="MaxTagBar">
    <div class="name">{{ tagname }}</div>
    <div class="subbutton" v-if="subtype == 0" @click="sub()">订阅该标签</div>
    <div class="subbutton" v-if="subtype == 1" @click="unsub()">取消关注该标签</div>
  </div>
</template>

<script>
export default {
  name: "MaxTagBar",
  data() {
    return {
      tagname: "# XXX",
      subtype: 0
    };
  },
  props: {
    id: {
      type: Number,
      default: null,
    },
  },
  created() {
      this.gettpye()
  },
  methods: {
    gettpye(){
        this.subtype = 0
    },
    sub(){
        this.subtype = 1
    },
    unsub(){
        this.subtype = 0
    }
  },
};
</script>

<style lang="scss" scoped>
.MaxTagBar {
  border: 1px solid #c0c0c0;
  border-radius: 5px;
  padding: 32px;
  display: flow-root;
  .name{
    float: left;
    font-size: 18px;
    height: 38px;
    line-height: 38px;
  }
  .subbutton {
    padding: 8px;
    font-size: 14px;
    color: #000;
    border: 1px solid #c0c0c0;
    border-radius: 5px;
    float: right;
  }
}
</style>