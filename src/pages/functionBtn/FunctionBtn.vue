<template>
  <div class="functionBtn">
    <img src="../../assets/functionBtn/collectIcon.png">
    <img src="../../assets/functionBtn/collectIcon.png" @click="toLocation=!toLocation">
    <img src="../../assets/functionBtn/shareIcon.png">
    <div @click="toLocation=!toLocation" v-show="toLocation" class="model">
      <div class="location-slider">
        <div class="location-slide"><img class="center" src="../../assets/map/001.png"></div>
        <div class="location-slide"><img class="center" src="../../assets/map/002.png"></div>
        <div class="location-slide"><img class="center" src="../../assets/map/003.png"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: 'FunctionBtn',
    data () {
      return {
        toLocation: false
      }
    },
    mounted () {
      $('.location-slider').slick({
        // dots: true,
        fade: true,
        autoplay: false,
      })
    },
  }
</script>

<style scoped lang="scss">
  .functionBtn {
    position: absolute;
    right: 0;
    top: 22vh;
    width: 3.6vw;
    img {
      width: 100%;
      cursor: pointer;
    }
    .location-slider {
      height: 100vh;

      /deep/ .location-slide {
        height: 100vh;
        position: relative;
        img {
          width: 28vw;
        }
      }

    }
  }
</style>