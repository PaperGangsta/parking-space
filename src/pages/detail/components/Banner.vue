<template>
  <div>
    <Fade>
      <common-gallery :imgs="galleryImgs" v-if="showGallery" @close="handleGalleryClose"/>
    </Fade>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img"
           :src="bannerImg">
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe77b;</span>{{this.galleryImgs.length}}</div>
      </div>
    </div>
  </div>

</template>

<script>
  import CommonGallery from '@/common/gallery/Gallery';
  import Fade from '../../../common/fade/Fade';
  export default {
    name: 'DetailBanner',
    props:{
      sightName:String,
      bannerImg:String,
      galleryImgs:Array
    },
    components: {
      CommonGallery,
      Fade
    },
    data() {
      return {
        showGallery: false
      };
    },
    methods: {
      handleBannerClick() {
        this.showGallery = true;
      },
      handleGalleryClose() {
        this.showGallery = false;
      }
    }
  };
</script>

<style scoped lang="stylus">
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    color: white

    .banner-img
      width: 100%

    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))

      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem

      .banner-number
        padding: 0 .4rem
        height: .32rem
        margin-top: .14rem
        line-height: .32rem
        border-radius: .2rem
        background: rgba(0, 0, 0, 0.8)
        font-size: .24rem

        .banner-icon
          font-size: .24rem
</style>
