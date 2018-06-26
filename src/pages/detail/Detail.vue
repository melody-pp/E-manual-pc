<template>
  <div class="detail">
    <img :src="detail.p_contentthumb1" class="leftImg">
    <img :src="detail.p_contentthumb2" class="rightImg">
    <div class="leftText">
      <img :src="detail.p_content1">
    </div>
    <div class="rightText">
      <img :src="detail.p_content2">
    </div>
    <img src="../../assets/detail/02-1.png" class="rightTxt1">
    <img :src="detail.p_titlethumb" class="titleThumb">
  </div>
</template>

<script>
  import { vuexMixin } from '../../common/mixins'

  export default {
    name: 'Detail',
    mixins: [vuexMixin],
    data: () => ({
      detail: {},
    }),
    mounted () {
      console.log(this.currentCate3Id)
      this.axios.get('/yingfei/index.php/index/index/content', {params: {scatid: this.currentCate3Id}}).then(res => {
        this.detail = res.data[0]
      })
    }
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
    .titleThumb {
      position: absolute;
      top: 9vw;
      left: 50%;
      transform: translateX(-50%);
      width: 20vw;
    }
    .leftText {
      position: absolute;
      bottom: 11%;
      left: 23%;
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
