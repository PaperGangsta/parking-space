<template>
  <div>
    <div class="recommend-title">景点周边找车位</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img"
               :src="item.imgUrl">
        </div>

        <div class="item-info">
          <p class="item-title">{{item.title}} </p>
          <p class="item-desc">{{item.desc}}</p>

        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeWeekend',
    props:{
      list:Array
    },
    data() {
      return {
        recommendList: []
      };
    }
  };


</script>

<style lang="stylus" scoped>
  .recommend-title
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem
    margin-top: .2rem

  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 55%

    .item-img
      width: 100%

  .item-info
    padding: .14rem .2rem .2rem .2rem
    min-width: 0;

  .item-title
    line-height: .48rem
    font-size: .28rem
    color: #212121
    padding-right: 1.4rem
    overflow: hidden
    white-space: nowrap;
    text-overflow: ellipsis

  .item-desc
    line-height: .42rem;
    font-size: .24rem
    color: #616161
    overflow: hidden
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-right: 1.4rem
</style>
