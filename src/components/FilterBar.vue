<template>
  <div class="FilterBar" v-bind:class="{'FilterBarTBorder':tborder == true}">
      <div class="item">
        {{filterAllname}}
      </div>
      <div v-for="(item, index) in filterParams" :key="'FilterBar' + '-' + index" v-bind:class="{'active':index == filter ,'item':index != filter}" @click="queryChange(index)">
        {{item.name}}
      </div>
  </div>
</template>

<script>
export default {
  name: 'FilterBar',
  data(){
    return{
      // i:0
    }
  },
  props: {
    filterAllname:{
      type: String,
      default:"排序"
    },
    filter:{
      type: Number,
      default:0
    },
    filterParams:{
      type: Array,
      default: function(){
        return [
          {name:"最新", id:1},
          {name:"热门", id:2},
          {name:"评论数", id:3}
        ]
      }
    },
    tborder:{
      type: Boolean,
      default:true
    },
  },
  methods: {
    queryChange(index) {
      // console.log(index)
      // this.i = index
      this.$emit("update:filter", index)
      this.$emit('query')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

$itemheight: 45px;
.FilterBarTBorder{
  border-top: 1px solid #cecece;
}
.FilterBar{
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