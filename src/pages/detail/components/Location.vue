<template>
  <div class="wrapper">
    <div class="location-img">
      <img src="./img/location.png">
    </div>
    <div class="location-title">杭州市余杭区仓前街道2318</div>
    <span class="iconfont right">&#xe658;</span>
  </div>
</template>

<script>
  export default {
    name: 'Location'
  };
</script>

<style scoped lang="stylus">
  .wrapper
    display: flex
    flex-direction: row
    padding: .18rem .3rem
    align-items: center

  .location-img
    width: 24px;
    height: 24px

    img
      width: 100%
      height: 100%

  .location-title
    font-size: .33rem
    margin-right: auto
    margin-left: 0.1rem

  .right
    font-size: 0.38rem
    color: #9e9e9e;
</style>
