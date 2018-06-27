<template>
  <div class="cate3 clearfix">
    <div class="w50">
      <img :src="cate3List[0].p_thumb" @click="toDetail(cate3List[0].id)" class="cate3Img1">
      <div>
        <div class="w33">
          <img :src="cate3List[3].p_thumb">
          <img src="../../assets/cate3/09.png">
        </div>
        <img class="w33" :src="cate3List[4].p_thumb">
        <div class="w33">
          <img src="../../assets/cate3/07.png">
          <img :src="cate3List[5].p_thumb">
        </div>
      </div>
    </div>

    <div class="w50">
      <div>
        <div class="w66">
          <div class="w100">
            <img class="w50" src="../../assets/cate3/02.png">
            <img class="w50" :src="cate3List[1].p_thumb">
          </div>
          <img :src="cate3List[6].p_thumb">
        </div>
        <img class="w33 cate3Img1" :src="cate3List[2].p_thumb" @click="toDetail(cate3List[2].id)">
      </div>

      <div class="w100">
        <img class="w33" :src="cate3List[7].p_thumb">
        <img class="w66" :src="cate3List[8].p_thumb">
      </div>
    </div>
  </div>
</template>

<script>
  import { vuexMixin } from '../../common/mixins'

  export default {
    name: 'Cate3',
    mixins: [vuexMixin],
    data () {
      return {
        cate3List: []
      }
    },
    mounted () {
      this.axios.get('/yingfei/index.php/index/index/threecategory', {params: {tcatid: this.currentCate2Id}}).then(res => {
        this.cate3List = res.data
      })
    },
    methods: {
      toDetail (cate3Id) {
        this.setState({goBackPosition: 'cate3'})
        this.setState({currentCate3Id: cate3Id})
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
    .cate3Img1 {
      cursor: pointer;
    }
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
