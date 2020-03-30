<template>
  <div>
    <div class="grade-wrapper">
      <div class="item left">
        <div class="score top">
          <span class="rate">4.9</span>分
          <span>很棒</span>
        </div>
        <div class="comment"><span>422条评论</span></div>
        <span class="iconfont item-arr">&#xe658;</span>
      </div>
      <div class="item">
        <div class="title top">
          小区简介
        </div>
        <div class="comment">
          开放时间、小贴士
        </div>
        <span class="iconfont item-arr">&#xe658;</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Grade'
  };
</script>

<style scoped lang="stylus">
  .grade-wrapper
    padding-top :.2rem
    display: flex
    border-radius : 1rem  1rem 0 0
    box-sizing : border-box
    align-items : center
    .left
      border-right : 1px solid rgba(0,0,0,0.1)

    .item
      position : relative
      flex:1
      padding-left : 0.2rem
      padding-top: 0.1rem
      .comment
        font-size : .24rem
        color : #9e9e9e;
      .top
        margin-bottom : 0.15rem
      .score
        font-size :.3rem
        color :#ff8300
        span:nth-child(2)
          margin-left : .2rem
        .rate
          display : inline-block
          margin-right : 0.15rem
          font-size : 0.5rem

      .item-arr
        color: #9e9e9e;
        font-size : .4rem
        position :absolute
        right : .2rem
        top : 50%
        transform : translateY(-50%)
</style>
