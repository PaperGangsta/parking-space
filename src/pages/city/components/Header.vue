<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xeb99;</div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'CityHeader'
  };
</script>

<style scoped lang="stylus">
  .header
    position :relative
    overflow : hidden
    text-align :center
    height : .86rem
    line-height : .86rem
    color : white
    background : #3d92fb
    font-size: .32rem
  .header-back{
    position : absolute
    top :0
    left : 0
    width : .64rem
    text-align :center
    font-size : .4rem
    color :#ffffff
  }
</style>
