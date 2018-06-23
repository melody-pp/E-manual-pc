<template>
  <div class="welcome">
    <img src="../../assets/welcome/welcome.png">
    <button @click="toIndex">了解详情</button>
  </div>
</template>

<script>
  export default {
    name: 'Welcome',
    methods: {
      toIndex () {
        this.$emit('toIndex')
      }
    }
  }
</script>

<style scoped lang="scss">
  .welcome {
    font-size: 0;
    position: relative;
    img {
      width: 100vw;
      height: 100vh;
    }

    button {
      top: 60%;
      left: 50%;
      color: #fff;
      outline: none;
      cursor: pointer;
      font-size: 16px;
      font-weight: 500;
      padding: 10px 40px;
      letter-spacing: 5px;
      position: absolute;
      transition: all .7s;
      border: 1px solid #fff;
      transform: translateX(-50%);
      background: rgba(255, 255, 255, .4);
      &:hover {
        background: #fff;
        color: #303133;
      }
    }
  }

</style>