<template>
  <div>
   <div class="item">
     <el-card>
       <div slot="header" class="header">
         <div class="item-title border-bottom">
           <span class="item-title-icon"></span>
           共享车位优惠推荐
         </div>
       </div>
       <div class="list-item" v-for="(item,index) in content" :key="index" ref="wrapper">
         <div class="msg">
           <div class="title">
             {{item.title}}
           </div>
           <div class="tip-wra">
             <span class="tip-item"><img class="img-item"
                                         src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20202/6489a65436e6dd60420dae78f46d25d6.png">{{item.tipItem}}</span>
           </div>
           <div class="tag">
             <el-tag type="success">{{item.tip}}</el-tag>
           </div>
         </div>
         <div class="money-wra">
           <div class="money-item">
             ￥<span class="money-num">{{item.num}}</span>
           </div>
           <el-button type="warning">{{item.btn}}</el-button>
         </div>
       </div>
     </el-card>
   </div>
  </div>
</template>

<script>
  // eslint-disable-next-line no-unused-vars
  import Bscroll from 'better-scroll';

  const content = [
    {
      title: '小区年卡-畅享优惠(年卡)',
      tipItem: '一年内随意使用',
      tip: '放心购',
      num: 128,
      btn: '立即抢购'
    },
    {
      title: '小区月卡-自由停(月卡)',
      tipItem: '一月内自由停车!',
      tip: '放心购',
      num: 30,
      btn: '立即抢购'
    },
    {
      title: '小区周卡-省省省(周卡)',
      tipItem: '一周内随意使用',
      tip: '随心买',
      num: 12,
      btn: '立即预定'
    },
    {
      title: '小区次卡-时长你定(次卡)',
      tipItem: '用一次,买一次,随买随用',
      tip: '省心买',
      num: '5起售',
      btn: '立即查看'
    }
  ];
  export default {
    name: 'DetailList',
    data() {
      return {
        content: content
      };
    },
    mounted() {
      this.scroll = new Bscroll(this.$refs.wrapper);
    }
  };
</script>

<style scoped lang="stylus">
  .money-wra >>> .el-button
    font-size: .32rem
    padding: 0.2rem .3rem
    font-weight: 550

  .tag >>> .el-tag
    padding: 0 .1rem
    line-height: 14px
    height: 14px

  .item >>> .el-card__header
    padding: 0

    .item-title-icon
      position: relative
      left: .06rem
      top: .06rem
      display: inline-block
      width: .36rem
      height: .36rem
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      margin-right: .1rem
      background-size: .4rem 3rem

    .item-title
      line-height: .8rem
      font-size: .32rem
      padding: 0 .2rem

    .item-children
      padding: 0 .2rem

  .list-item
    box-sizing: border-box
    display: flex
    justify-content: space-between
    padding: 20px 0
    border-bottom: 1px solid #EBEEF5;

    .msg
      display: flex
      flex-direction: column

      .title
        font-size: .36rem

      .tip-wra
        margin-top: .17rem

        .tip-item
          font-size: .26rem

          .img-item
            width: .26rem
            height: .26rem

      .tag
        margin-top: .1rem

    .money-wra
      display: flex
      flex-direction: column
      justify-content: space-around
      align-items: center

      .money-item
        color: #ff8300

        .money-num
          font-size: 0.5rem;

  .list-item:nth-child(1)
    padding-top: 0

  .list-item:last-child
    border-bottom: none
</style>
