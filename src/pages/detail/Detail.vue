<template>
  <div class="detail">
    <img src="../../assets/detail/01.png" class="leftImg">
    <img src="../../assets/detail/02.png" class="rightImg">
    <div class="leftText">
      <img src="../../assets/detail/01-1.png">
    </div>
    <div class="rightText">
      <img src="../../assets/detail/02-2.png">
    </div>
    <img src="../../assets/detail/02-1.png" class="rightTxt1">
  </div>
</template>

<script>
  export default {
    name: 'Detail'
  }
</script>

<style scoped lang="scss">
  .detail {
    padding-top: 11vh;
    font-size: 0;
    width: 100vw;
    .leftImg, .rightImg {
      width: 50%;
      height: 89vh;
      float: left;
    }
    .leftText {
      position: absolute;
      bottom: 11%;
      left: 21%;
      width: 26%;
      height: 24%;
      overflow: auto;
      img {
        width: 88%;
      }
    }
    .rightTxt1 {
      position: absolute;
      right: 10%;
      top: 20%;
      width: 20%;
    }
    .rightText {
      position: absolute;
      bottom: 11%;
      right: 1%;
      width: 22%;
      height: 16%;
      overflow: auto;
      img {
        width: 88%;
      }
    }
  }

</style>
