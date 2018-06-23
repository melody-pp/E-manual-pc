<template>
  <div id="app">

    <div ref="$Product" v-if="showProduct" class="container product-container">
      <Product @toCate3="toCate3" @toDetail="toDetail"/>
    </div>

    <div ref="$cate3" v-if="showCate3" class="container cate3-container">
      <Cate3 @toDetail="toDetail"/>
    </div>

    <div ref="$detail" v-if="showDetail" class="container detail-container">
      <Detail/>
    </div>

    <Nav @toProduct="toProduct"/>

    <div ref="$welcome" v-if="showWelcome" class="container welcome-container">
      <Welcome @toIndex="toProduct"/>
    </div>
  </div>
</template>

<script>
  import './common/lib'
  import 'normalize.css'
  import { TimelineLite, TweenLite } from 'gsap'

  import Welcome from './pages/welcome/Welcome'
  import Nav from './pages/nav/Nav'
  import Product from './pages/product/Product'
  import Cate3 from './pages/product/Cate3'
  import Detail from './pages/detail/Detail'

  export default {
    name: 'App',
    components: {Welcome, Nav, Product, Cate3, Detail},
    data: () => ({
      showWelcome: true,
      showProduct: false,
      showCate3: false,
      showDetail: false,
    }),
    methods: {
      toProduct () {
        this.showProduct = true

        this.showWelcome = false
        this.showCate3 = false
        this.showDetail = false
      },

      toCate3 () {
        this.showCate3 = true

        this.showProduct = false
        this.showDetail = false
      },
      toDetail () {
        console.log('toDetail app')
        this.showDetail = true

        this.showProduct = false
        this.showCate3 = false
      }
    }
  }
</script>

<style lang="scss">
  #app {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: "微软雅黑";
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }

  .clearfix {
    overflow: hidden;
    _zoom: 1;
    &:after {
      content: ".";
      display: block;
      height: 0;
      clear: both;
      visibility: hidden
    }
  }

  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  .container {
    overflow: hidden;
    position: absolute;
  }

  .welcome-container {
    position: absolute;
    z-index: 999;
  }

  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .slick-list {
    overflow: visible;
  }

  .slider-img {
    width: 100%;
  }

  .slick-dotted.slick-slider {
    font-size: 0;
    margin-bottom: 0;
  }

  .slick-dots {
    bottom: 15px;
  }

  .slick-dots li button:before {
    opacity: 1;
    color: #dcdcdc;
  }

  .slick-dots li.slick-active button:before {
    opacity: 1;
    color: #7d1820;
  }

  .slick-dots li {
    margin: 0;
  }
</style>
