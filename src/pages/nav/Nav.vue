<template>
  <div class="nav">
    <img src="../../assets/nav/return.png" class="return">
    <img src="../../assets/nav/return.png" class="search">

    <span>首页</span>
    <span @click="toggleCates">分类 <img src="../../assets/nav/arrows.png"></span>
    <span>收藏夹</span>

    <div class="cate-list">
      <div v-for="(cate, index) in cateList" class="cate clearfix" :key="index" @click="toProduct">
        <img :src="cate.itemImg">
      </div>
    </div>
  </div>
</template>

<script>
  import { TweenMax } from 'gsap'

  export default {
    name: 'Nav',
    data: () => ({
      isBusy: false,
      showCates: false,
      cateList: [
        {itemImg: require('../../assets/nav/04.png')},
        {itemImg: require('../../assets/nav/05.png')},
        {itemImg: require('../../assets/nav/06.png')},
        {itemImg: require('../../assets/nav/07.png')},
        {itemImg: require('../../assets/nav/08.png')},
        {itemImg: require('../../assets/nav/09.png')},
        {itemImg: require('../../assets/nav/10.png')},
        {itemImg: require('../../assets/nav/11.png')},
      ]
    }),
    methods: {
      toggleCates () {
        if (this.isBusy) {
          return
        }

        this.isBusy = true
        setTimeout(() => {
          this.isBusy = false
          this.showCates = !this.showCates
        }, 1800)

        const $cates = Array.from(document.querySelectorAll('.cate-list .cate'))

        if (this.showCates) {
          TweenMax.staggerTo($cates.reverse(), .6, {x: '120', autoAlpha: 0, ease: Power4.easeIn}, .1)
        } else {
          TweenMax.staggerTo($cates, .6, {x: '0', autoAlpha: 1, ease: Power4.easeOut}, .1)
        }

      },
      toProduct () {
        this.$emit('toProduct')
      }
    }
  }
</script>

<style scoped lang="scss">
  .nav {
    width: 100%;
    height: 11vh;
    line-height: 10vh;
    position: absolute;
    color: #8f6f3e;
    background-color: #e8e8e8;
    text-align: center;
    border-top: 1vh solid #a77d4b;

    > span {
      font-size: 24px;
      margin: 0 3vw;
    }

    > img {
      top: 50%;
      position: absolute;
      transform: translateY(-50%);
    }

    .return {
      left: 5vw;
    }
    .search {
      right: 5vw;
    }

    .cate-list {
      position: absolute;
      font-size: 0;
      top: 10vh;
      left: 50%;
      transform: translateX(-50%);
      perspective: 800px;
      .cate {
        opacity: 0;
        transform: translateX(120px);
        padding: 1vh 0;
        background: rgb(54, 46, 43);
        transform-origin: left;
      }
      img {
        float: left;
        width: 7vw;
      }
    }
  }
</style>