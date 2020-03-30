<template>
  <div>
    <city-header/>
    <city-search :city="city"/>
    <city-list :city="city" :hot="hotCity" :letter="letter"/>
    <city-alphabet :city="city" @change="handleLetterChange"/>
  </div>
</template>

<script>
  import CityHeader from './components/Header'
  import CitySearch from './components/Search'
  import CityList from './components/List'
  import CityAlphabet from './components/Alphabet'
  import axios from 'axios'
  export default {
    name: 'City',
    components:{
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet
    },
    data(){
      return{
        city:{},
        hotCity:[],
        letter: ''
      }
    },
    methods:{
      getCityInfo(){
        axios.get('/static/mock/city.json')
          .then(this.handleGetCityInfoSucc)
      },
      handleGetCityInfoSucc(res){
        res = res.data;
        if(res.ret &&res.data){
          this.city = res.data.cities;
          this.hotCity = res.data.hotCities;
        }
      },
      handleLetterChange(letter){
        this.letter = letter;
      }
    },
    mounted() {
      this.getCityInfo()
    }
  };
</script>

<style scoped lang="stylus">

</style>
