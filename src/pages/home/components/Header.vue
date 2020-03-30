<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xeb99;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xeb9c;</span>
      输入城市/景点/游玩/主题
    </div>
    <router-link to="/city">
      <div class="header-right ">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>

</template>

<script>
  import {style} from '../../../assets/styles/varibles';
  import {mapState} from 'vuex';
  console.log(style['theme-color']);
  export default {
    name: 'HomeHeader',
    computed: {
      ...mapState(['city'])
    }
  };
</script>

<style lang="stylus" scoped>
  .header
    display: flex
    height: 0.86rem;
    background: #3d92fb;
    color: #ffffff;
    line-height: 0.86rem;

    .header-left
      width: 0.64rem;
      float: left;

      .back-icon {
        text-align: center;
        font-size: 0.4rem;
      }

    .header-input
      flex: 1;
      background: #ffffff;
      border-radius: 0.1rem;
      line-height: 0.64rem;
      height: 0.64rem;
      margin-top: 0.12rem;
      margin-left 0.2rem;
      color: #ccc
      padding-left: 0.1rem


    .header-right
      min-width: 1.04rem;
      padding: 0.1rem
      float: right;
      text-align: center
      text-decoration: none;
      color: white

      .arrow-icon {
        font-size: 0.23rem;
        margin-left: -0.04rem;
      }


</style>
