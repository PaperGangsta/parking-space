<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xeb99;</div>
    </router-link>
    <router-link to="/" class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <div class="iconfont header-fixed-back">&#xeb99;</div>
      景点详情
    </router-link>
  </div>

</template>

<script>
  export default {
    name: 'DetailHeader',
    components: {},
    data() {
      return {
        showAbs: true,
        opacityStyle:{
          opacity: 0
        }
      };
    },
    activated() {
      window.addEventListener('scroll',this.handleScroll)
    },
    deactivated() {
      window.removeEventListener('scroll',this.handleScroll);
    },
    methods:{
      handleScroll(){
        const top = document.documentElement.scrollTop;
        if (top>60 ){
          let opacity = top/140;
          opacity = opacity>1?1:opacity;
          this.opacityStyle = {
            opacity
          }
          this.showAbs = false
        }
        else{
          this.showAbs = true
        }
      }
    }
  };
</script>

<style scoped lang="stylus">
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    border-radius: .4rem
    text-align: center
    line-height: .8rem
    background: rgba(0, 0, 0, 0.8)

    .header-abs-back
      color: #fff
      font-size: .4rem

  .header-fixed
    z-index : 2
    position: fixed
    top: 0
    left: 0
    right: 0
    text-align: center
    height: .86rem
    line-height: .86rem
    color: white
    background: #00bcd4
    font-size: .32rem

    .header-fixed-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #ffffff

</style>

