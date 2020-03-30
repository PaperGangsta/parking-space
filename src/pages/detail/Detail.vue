<template>
  <div>
    <detail-banner :sightName="sightName" :galleryImgs = "galleryImgs" :bannerImg="bannerImg"/>
    <detail-header/>
    <div class="content">
      <Grade/>
      <Location/>
      <detail-list />
    </div>

  </div>
</template>

<script>
  import DetailBanner from './components/Banner';
  import DetailHeader from './components/Header';
  import DetailList from './components/List';
  import Grade from './components/Grade'
  import Location from './components/Location'
  import Axios from 'axios';

  export default {
    name: 'Detail',
    components: {DetailHeader, DetailBanner, DetailList,Grade,Location},
    data() {
      return {
        sightName: '',
        bannerImg: '',
        galleryImgs:[]
      };
    },
    mounted() {
      this.getDetailInfo();
    },
    methods: {
      getDetailInfo() {
        Axios.get('/static/mock/detail.json?', {params: {id: this.$route.params.id}}).then(this.handleGetDataSucc);
      },
      handleGetDataSucc(res) {
        console.log(res.data);
        res = res.data;
        if (res.ret && res.data) {
          const data = res.data;
          this.sightName = data.sightName;
          this.bannerImg = data.bannerImg;
          this.galleryImgs = data.gallaryImgs;
        }
      }
    }
  };
</script>

<style scoped lang="stylus">
  .content
    height: 50rem
</style>
