<template>
  <div class="FilterBar">
      <div class="item">
        排序
      </div>
      <div v-for="(item, index) in filtertype" :key="'FilterBar' + '-' + index" v-bind:class="{'active':index == i ,'item':index != i}" @click="queryChange(index)">
        {{item.name}}
      </div>
  </div>
</template>

<script>
export default {
  name: 'FilterBar',
  data(){
    return{
      i:0
    }
  },
  props: {
    filter:{
      type: Number,
      default:0
    },
    filtertype:{
      type: Array,
      default: function(){
        return [
          {name:"最新", id:1},
          {name:"热门", id:2},
          {name:"评论数", id:3}
        ]
      }
    }
  },
  methods: {
    queryChange(index) {
      // console.log(index)
      this.i = index
      this.$emit("update:filter", index)
      this.$emit('query')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

$itemheight: 45px;
.FilterBar{
  border-top: 1px solid #cecece;
  width: 100%;
  display: flow-root;
  font-size: 13px;
  line-height: $itemheight;
  .item{
    margin-right: 21px;
    float: left;
    color: #939393;
    height: $itemheight;
  }
  .active{
    margin-right: 21px;
    float: left;
    color: #007eff;
    height: $itemheight;
    }
}
</style>