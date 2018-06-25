<template>
  <div class="nav">
    <img src="../../assets/nav/return.png" class="return" @click="goBack">
    <img src="../../assets/nav/searchIcon.png" class="search" @click="toggleSearch">

    <span @click="toHome">首页</span>
    <span @click="toggleCates">分类 <img src="../../assets/nav/arrows.png" class="categoryArrow"></span>
    <span>收藏夹</span>

    <div class="cate-list">
      <div v-for="cate in cateList" class="cate clearfix" :key="cate.id" @click="toProduct(cate.id)">
        <img :src="cate.p_thumb">
      </div>
    </div>

    <div class="searchBar" ref="searchBar" @click="hideSearch">
      <img class="searchText fl" src="../../assets/nav/SearchText.png">
      <div class="searchBox fl clearfix">
        <input type="text" class="searchInput fl">
        <span class="spliterLine fl"></span>
        <img class="searchIcon fl" src="../../assets/nav/searchIcon2.png">
      </div>

    </div>
  </div>
</template>

<script>
  import { vuexMixin } from '../../common/mixins'
  import { TimelineLite, TweenLite } from 'gsap'

  export default {
    name: 'Nav',
    mixins: [vuexMixin],
    data: () => ({
      catesVisible: false,
      showTimeline: null,
      hideTimeline: null,
      searchVisible: false,
      cateList: []
    }),
    mounted () {
      this.bus.$on('hideCate', this.hideCates.bind(this))
      this.axios.post('/yingfei/index.php/index/index/onecategory').then(res => {
        this.cateList = res.data
        this.setState({currentCate1Id: this.cateList[0].id})
      })
    },
    methods: {
      toggleCates () {
        this.catesVisible
          ? this.hideCates()
          : this.showCates()
      },
      showCates () {
        this.catesVisible = true

        if (this.hideTimeline) {
          this.hideTimeline.pause()
        }

        if (this.showTimeline) {
          return this.showTimeline.restart()
        }

        this.showTimeline = new TimelineLite()
        const $cates = Array.from(document.querySelectorAll('.cate-list .cate'))

        this.showTimeline.staggerTo($cates, .6, {x: '0', autoAlpha: 1, ease: Power4.easeOut}, .1)
      },
      hideCates () {
        this.catesVisible = false
        if (this.showTimeline) {
          this.showTimeline.pause()
        }

        if (this.hideTimeline) {
          return this.hideTimeline.restart()
        }

        this.hideTimeline = new TimelineLite()
        const $cates = Array.from(document.querySelectorAll('.cate-list .cate'))
        this.hideTimeline.staggerTo($cates.reverse(), .6, {x: '120', autoAlpha: 0, ease: Power4.easeIn}, .1)
      },
      toProduct (cate1Id) {
        this.setState({currentCate1Id: cate1Id})
        this.$emit('toProduct')
      },
      toggleSearch () {
        this.searchVisible ? this.hideSearch() : this.showSearch()
      },
      showSearch () {
        this.searchVisible = true
        TweenLite.to(this.$refs.searchBar, 1, {y: window.innerHeight * 0.1, ease: Elastic.easeOut.config(1, 0.5)})
      },
      hideSearch () {
        this.searchVisible = false
        TweenLite.to(this.$refs.searchBar, 1, {y: '-300px'})
      },
      toHome () {
        this.$emit('toHome')
      },
      goBack () {
        this.$emit('goBack')

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
    .categoryArrow {
      width: 1vw;
    }
    > span {
      font-size: 1.5vw;
      margin: 0 3vw;
      cursor: pointer;
    }

    > img {
      top: 50%;
      position: absolute;
      transform: translateY(-50%);
    }

    .return {
      left: 5vw;
      width: 2vw;
      cursor: pointer;
    }
    .search {
      right: 5vw;
      width: 2vw;
      cursor: pointer;
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
    .searchBar {
      width: 100vw;
      left: 0;
      top: 0;
      padding: 2vw 32vw;
      position: absolute;
      background: #373743;
      box-sizing: border-box;
      vertical-align: bottom;
      text-align: center;
      transform: matrix(1, 0, 0, 1, 0, -200);
      .searchText {
        width: 4vw;
        margin-top: 0.3vw;
      }
      .searchBox {
        width: 28vw;
        margin-left: 1vw;
        background-color: #fff;
        height: 1.6vw;
        line-height: 1.6vw;
        border-radius: 3px;
        .searchIcon {
          width: 1vw;
          margin: 0.3vw 0.4vw;
        }
        .searchInput {
          width: 26vw;
          border: none;
          height: 1.6vw;
          line-height: 1.6vw;
        }
        .spliterLine {
          display: inline-block;
          width: 1px;
          height: 0.8vw;
          background-color: #9e9d9d;
          margin-top: 0.5vw;
        }
      }
    }
  }
</style>
