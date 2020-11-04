<template>
  <div class="TabMunhead">

    <div class="name">{{tabname}}</div>
    <div class="mun">
      <div v-for="(item, index) in querymun" :key="'TabMunhead' + tabname + '-' + index" v-bind:class="{'active':index == i ,'item':index != i}" @click="queryChange(index)">
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabMunhead',
  data(){
    return{
      i:0
    }
  },
  props: {
    tabname:{
      type: String,
      default: "tabname-components"
    },
    index:{
      type: Number,
      default:0
    },
    querymun:{
      type: Array,
      default: function(){
        return []
      }
    }
  },
  methods: {
    queryChange(index) {
      this.i = index
      this.$emit("update:index", index)
      this.$emit('query')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

$itemheight: 40px;
.TabMunhead{
  // margin-bottom: 30px;
  width: 100%;
  display: flow-root;
}
.name{
  font-size: 24px;color: #000;margin-right: 20px;float: left;
}
.mun{
  float: left;
  font-size: 14px;
  line-height: 38px;
  .item{
    float: left;
    height: $itemheight;
    padding-left: 8px;padding-right: 8px;
  }
  .active{
    float: left;
    border-bottom: 2px solid #d4d4d4;
    height: $itemheight;
    padding-left: 10px;padding-right: 10px;
    color: #007eff;
    }
}
</style>