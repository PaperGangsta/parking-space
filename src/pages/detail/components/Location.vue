<template>
  <div class="wrapper">
    <div class="location-img">
      <img src="./img/location.png">
    </div>
    <div class="location-title"></div>
    <span class="iconfont right"></span>
  </div>
</template>

<script>
  export default {
    name: 'Location'
  };
</script>

<style scoped lang="stylus">
  .wrapper
    display : flex
    flex-direction :row
    .location-title
      margin-right : auto
</style>
