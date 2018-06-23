<template>
  <div class="product">

    <div class="slider-hot">
      <div v-for="(item, index) in hotList" :key="index">
        <img :src="item.itemImg" class="slider-img">
      </div>
    </div>

    <div class="slider-cate2-wrapper">
      <div class="slider-cate2">
        <div v-for="(item, index) in cate2List" :key="index" class="cate2" @click="toCate3">
          <img :src="item.itemImg" class="slider-img">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: 'Product',
    data: () => ({
      hotList: [
        {itemImg: require('../../assets/product/banner.png')},
        {itemImg: require('../../assets/product/banner.png')},
        {itemImg: require('../../assets/product/banner.png')},
      ],
      cate2List: [
        {itemImg: require('../../assets/product/01.png')},
        {itemImg: require('../../assets/product/02.png')},
        {itemImg: require('../../assets/product/03.png')},
        {itemImg: require('../../assets/product/04.png')},
        {itemImg: require('../../assets/product/05.png')},
        {itemImg: require('../../assets/product/06.png')},

      ]
    }),
    mounted () {
      $('.slider-hot').slick({
        arrows: false,
        autoplay: true,
      })
      $('.slider-cate2').slick({
        slidesToShow: 5,
        appendArrows: '.slider-cate2-wrapper',
      })

    },
    methods:{
      toCate3(){
        this.$emit('toCate3')
      }
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
      width: 19px;
      height: 73px;
      &:before {
        content: '';
      }

      &.slick-prev {
        z-index: 2;
        left: 50px;
        background-image: url("../../assets/product/left.png");

      }

      &.slick-next {
        right: 50px;
        background-image: url("../../assets/product/right.png");
      }
    }

    .slider-cate2 {
      overflow: hidden;
    }

    .slider-img {
      margin: auto;
      width: auto;
      height: 15vh;
    }
  }
</style>