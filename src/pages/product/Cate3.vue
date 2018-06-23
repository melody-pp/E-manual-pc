<template>
  <div class="cate3 clearfix" @click="toDetail">
    <div class="w50">
      <img :src="cate3List[0].itemImg">
      <div>
        <div class="w33">
          <img :src="cate3List[4].itemImg">
          <img :src="cate3List[8].itemImg">
        </div>
        <img class="w33" :src="cate3List[5].itemImg">
        <div class="w33">
          <img :src="cate3List[6].itemImg">
          <img :src="cate3List[9].itemImg">
        </div>
      </div>
    </div>

    <div class="w50">
      <div>
        <div class="w66">
          <div class="w100">
            <img class="w50" :src="cate3List[1].itemImg">
            <img class="w50" :src="cate3List[2].itemImg">
          </div>
          <img :src="cate3List[7].itemImg">
        </div>
        <img class="w33" :src="cate3List[3].itemImg">
      </div>

      <div class="w100">
        <img class="w33" :src="cate3List[10].itemImg">
        <img class="w66" :src="cate3List[11].itemImg">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Cate3',
    data () {
      return {
        cate3List: [
          {itemImg: require('../../assets/cate3/01.png')},
          {itemImg: require('../../assets/cate3/02.png')},
          {itemImg: require('../../assets/cate3/03.png')},
          {itemImg: require('../../assets/cate3/04.png')},
          {itemImg: require('../../assets/cate3/05.png')},
          {itemImg: require('../../assets/cate3/06.png')},
          {itemImg: require('../../assets/cate3/07.png')},
          {itemImg: require('../../assets/cate3/08.png')},
          {itemImg: require('../../assets/cate3/09.png')},
          {itemImg: require('../../assets/cate3/10.png')},
          {itemImg: require('../../assets/cate3/11.png')},
          {itemImg: require('../../assets/cate3/12.png')},
        ]
      }
    },
    methods: {
      toDetail () {
        console.log('toDetail cate3')

        this.$emit('toDetail')
      }
    }
  }
</script>

<style scoped lang="scss">
  .cate3 {
    padding-top: 11vh;
    font-size: 0;
    height: 100vh;

    img {
      float: left;
      width: 100%;
    }

    div {
      float: left;
    }

    .w33 {
      width: 33.333%;
    }

    .w50 {
      width: 50%;
    }

    .w66 {
      width: 66.667%;
    }

    .w100 {
      width: 100%;
    }

  }
</style>