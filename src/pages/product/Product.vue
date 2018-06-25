<template>
  <div class="product">

    <div class="slider-hot">
      <div v-for="(item, index) in hotList" :key="index" @click="toDetail">
        <img :src="item.itemImg" class="slider-img">
      </div>
    </div>

    <div class="slider-cate2-wrapper">
      <div class="slider-cate2">
        <div v-for="item in cate2List" :key="item.id" class="cate2" @click="toCate3(item.id)">
          <img :src="item.p_thumb" class="slider-img">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import { vuexMixin } from '../../common/mixins'

  export default {
    name: 'Product',
    mixins: [vuexMixin],
    data: () => ({
      hotList: [
        {itemImg: require('../../assets/product/banner.png')},
        {itemImg: require('../../assets/product/banner.png')},
        {itemImg: require('../../assets/product/banner.png')},
      ],
      cate2List: []
    }),
    mounted () {
      if (!this.currentCate1Id) {
        return
      }
      $('.slider-hot').slick({
        arrows: false,
        autoplay: true,
      })

      this.axios.get('/yingfei/index.php/index/index/twocategory', {params: {ocatid: this.currentCate1Id}}).then(res => {
        this.cate2List = res.data
        this.$nextTick(function () {
          $('.slider-cate2').slick({
            slidesToShow: 5,
            appendArrows: '.slider-cate2-wrapper',
          })
        })
      })
    },
    methods: {
      toCate3 (cate2Id) {
        this.setState({goBackPosition: 'cate2'})
        this.setState({currentCate2Id: cate2Id})
        this.$emit('toCate3')
      },
      toDetail () {
        this.setState({goBackPosition: 'cate2'})

        this.$emit('toDetail')
      }
    },
    beforeDestroy () {
      try {
        $('.slider-hot').slick('unslick')
        $('.slider-cate2').slick('unslick')
      } catch (e) {}
    }
  }
</script>

<style scoped lang="scss">
  .product {
    width: 100vw;
    height: 100vh;
  }

  .slider-hot {
    font-size: 0;

    .slider-img {
      width: 100vw;
      height: 100vh;
    }
  }

  .slider-cate2-wrapper {
    top: 75%;
    font-size: 0;
    width: 100vw;
    height: 19vh;
    position: absolute;
    padding: 2vh 5vw;
    background-color: #7d6b5a;

    /deep/ .slick-arrow {
      width: 1vw;
      height: 4vw;
      &:before {
        content: '';
      }

      &.slick-prev {
        z-index: 2;
        left: 3vw;
        background-image: url("../../assets/product/left.png");
        background-repeat: no-repeat;
        background-size: contain;
      }

      &.slick-next {
        right: 3vw;
        background-image: url("../../assets/product/right.png");
        background-repeat: no-repeat;
        background-size: contain;
      }
    }

    .slider-cate2 {
      overflow: hidden;
    }

    .slider-img {
      margin: auto;
      width: 17vw;
      height: 15vh;
    }
  }
</style>
