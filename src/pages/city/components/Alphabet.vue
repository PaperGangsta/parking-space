<template>
  <ul class="list">
    <li class="item" v-for="item of letters" :key="item" :ref="item" @click="handleLetterClick" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">{{item}}</li>
  </ul>
</template>

<script>
  export default {
    name: 'CityAlphabet',
    props:{
      city: Object
    },
    computed:{
      letters (){
        const letters = [];
        for (let i in this.city){
          letters.push(i);
        }
        return letters;
      }
    },
    data() {
      return {
        touchStatus: false,
        startY: 0,
        timer: null
      };
    },
    updated() {
      this.startY = this.$refs['A'][0].offsetTop;
    },
    methods: {
      handleLetterClick(e) {
        this.$emit('change', e.target.innerText);
      },
      handleTouchStart() {
        this.touchStatus = true;
      },
      handleTouchMove(e) {
        if (this.touchStatus) {
          if (this.timer) {
            clearTimeout(this.timer);
          }
          this.timer = setTimeout(() => {
            const touchY = e.touches[0].clientY - 79;
            const index = Math.floor((touchY - this.startY) / 20);

            if (index >= 0 && index < this.letters.length) {
              this.$emit('change', this.letters[index]);
            }
          }, 16);

        }
      },
      handleTouchEnd(){

      },
    }
  };
</script>

<style scoped lang="stylus">
  .list
    display :flex
    position : absolute
    top :1.58rem
    flex-direction :column
    justify-content:center
    right : 0
    bottom : 0
    width : .4rem
    .item
      text-align : center
      color : #00bcd4
      line-height : .4rem

</style>
