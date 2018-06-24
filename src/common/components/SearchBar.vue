<template>
  <div class="search">
    <div class="searchIcon" @click="showSearch">
      <img src="../../asset/index/searchIcon1.png">
    </div>
    <div class="searchBar" ref="searchBar" @click="hideSearch">
      <img class="searchText fl" src="../../asset/index/SearchText.png">
      <div class="searchBox fl clearfix">
        <input type="text" class="searchInput fl">
        <span class="spliterLine fl"></span>
        <img class="searchIcon fl" src="../../asset/index/searchIcon2.png">
      </div>

    </div>
  </div>
</template>

<script>
  import { TweenLite } from 'gsap'

  export default {
    name: 'SearchBar',
    methods: {
      showSearch () {
        TweenLite.to(this.$refs.searchBar, 1, {y: '0', ease: Elastic.easeOut.config(1, 0.5)})
      },
      hideSearch () {
        console.log('hideSearch')
        TweenLite.to(this.$refs.searchBar, 1, {y: '-200px'})
      }
    }
  }
</script>

<style scoped lang="scss">
  .search {
    right: 0;
    z-index: 99;
    position: absolute;
    > .searchIcon {
      top: 10px;
      right: 20px;
      width: 20px;
      position: absolute;
      cursor: pointer;
      img {
        width: 100%;
      }
    }
  }

  .searchBar {
    width: 100vw;
    left: -100vw;
    top: 0;
    padding: 14vw 5vw;
    position: absolute;
    background: #373743;
    box-sizing: border-box;
    vertical-align: bottom;
    text-align: center;
    transform: matrix(1, 0, 0, 1, 0, -200);
    .searchText {
      width: 18vw;
    }
    .searchBox {
      width: 67vw;
      margin-left: 5vw;
      background-color: #fff;
      height: 5vw;
      line-height: 5vw;
      .searchIcon {
        width: 4vw;
        margin: 0.6vw 1.2vw;
      }
      .searchInput {
        width: 60vw;
        border: none;
        height: 5vw;
        line-height: 5vw;
      }
      .spliterLine {
        display: inline-block;
        width: 1px;
        height: 4vw;
        background-color: #9e9d9d;
        margin-top: 0.6vw;
      }
    }

  }

</style>
