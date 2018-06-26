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

    <Nav @toProduct="toProduct" @toHome="toHome" @goBack="goBack"/>
    <FunctionBtn/>

    <div ref="$welcome" v-if="showWelcome" class="container welcome-container">
      <Welcome @toIndex="hideWelcome"/>
    </div>
  </div>
</template>

<script>
  import './common/lib'
  import 'normalize.css'
  import { vuexMixin } from './common/mixins'
  import { TimelineLite, TweenLite } from 'gsap'

  import Welcome from './pages/welcome/Welcome'
  import Nav from './pages/nav/Nav'
  import FunctionBtn from './pages/functionBtn/FunctionBtn'
  import Product from './pages/product/Product'
  import Cate3 from './pages/product/Cate3'
  import Detail from './pages/detail/Detail'

  export default {
    name: 'App',
    mixins: [vuexMixin],
    components: {Welcome, Nav, FunctionBtn, Product, Cate3, Detail},
    data: () => ({
      showWelcome: true,
      showProduct: false,
      showCate3: false,
      showDetail: false,
    }),
    methods: {
      hideWelcome () {
        const vm = this
        const {$welcome} = vm.$refs

        new TimelineLite({
          onComplete () {
            vm.toProduct()
          }
        }).set($welcome, {
          width: '100vh',
          'border-bottom-right-radius': '1000px',
        }).to($welcome, 1.5, {
          width: '1px',
          height: '1px',
          'border-bottom-right-radius': '1px',
        })
      },
      toProduct () {
        this.bus.$emit('hideCate')
        this.showProduct = false
        this.showWelcome = false
        this.showCate3 = false
        this.showDetail = false
        this.$nextTick(() => this.showProduct = true)
      },
      toCate3 () {
        this.bus.$emit('hideCate')
        this.showProduct = false
        this.showWelcome = false
        this.showCate3 = false
        this.showDetail = false

        this.$nextTick(() => this.showCate3 = true)
      },
      toDetail () {
        this.bus.$emit('hideCate')
        this.showProduct = false
        this.showWelcome = false
        this.showCate3 = false
        this.showDetail = false

        this.$nextTick(() => this.showDetail = true)
      },
      toHome () {
        this.bus.$emit('hideCate')
        this.showProduct = false
        this.showWelcome = false
        this.showCate3 = false
        this.showDetail = false

        this.$nextTick(() => this.showWelcome = true)
      },
      goBack () {
        if (this.showDetail) {
          return this.goBackPosition === 'cate3'
            ? this.toCate3()
            : this.toProduct()
        }

        if (this.showCate3) {
          this.toProduct()
        }
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
    height: 100%;
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

  .model {
    background-color: rgba(0, 0, 0, 0.6);
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
  }

</style>
