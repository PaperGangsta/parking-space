<template>
  <div>
   <div class="item" >
    <div class="item-title border-bottom">
      <span class="item-title-icon"></span>
      共享车位推荐
    </div>
   </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailList',
  };
</script>

<style scoped lang="stylus">
  .item-title-icon
    position: relative
    left: .06rem
    top: .06rem
    display: inline-block
    width: .36rem
    height: .36rem
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    margin-right: .1rem
    background-size: .4rem 3rem
  .item-title
    line-height: .8rem
    font-size: .32rem
    padding: 0 .2rem
  .item-children
    padding: 0 .2rem

</style>
