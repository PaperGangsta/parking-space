<template>
  <div>
    <div class="alert-wra">
      <div class="img-wra">
        <img src="./img/alert.png">
      </div>
      <p>疫情期间进出小区请测量体温、戴好口罩</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Alert'
  };
</script>

<style scoped lang="stylus">
  .alert-wra
    display: flex
    align-items: center
    white-space: nowrap
    text-overflow: ellipsis
    height: 64px
    background: #fff5e5;
    color: #ff8300;
    padding: 0 0.3rem

    .img-wra
      display: inline-block
      margin-right: .1rem

</style>
