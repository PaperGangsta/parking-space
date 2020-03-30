<template>
  <div class="icons">
    <swiper >
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl" class="icon-img-content">
          </div>
          <p class="icon-img-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeIcons',
    props:{
      list:Array
    },
    data() {
      return {
        iconList: []
      };
    },
    computed: {

      pages() {
        const pages = [];
        this.list.forEach((item, index) => {
          const page = Math.floor(index / 8);
          if (!pages[page]) {
            pages[page] = [];
          }
          pages[page].push(item);
        });
        return pages;
      }
    },
    methods: {}
  };
</script>

<style lang="stylus" scoped>
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
    font-family: "PingFangSC-Regular"

  .icon
    position: relative
    overflow: hidden
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%

    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: .44rem
      box-sizing: border-box;
      padding: .1rem

      .icon-img-content
        display: block
        margin: 0 auto
        height: 100%

    .icon-img-desc
      position: absolute;
      left: 0
      right: 0
      bottom: 0
      height: .44rem
      line-height: .44rem
      text-align: center
      color: #ccc
      overflow: hidden
      white-space: nowrap;
      text-overflow: ellipsis

</style>
