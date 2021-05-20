<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <swiper-slidec></swiper-slidec>
      </div>
      <div class="ads-box"></div>
      <div class="banner"></div>
      <div class="product-box"></div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import ServiceBar from '../../components/ServiceBar'
import SwiperSlidec from '../../components/SwiperSlidec'

export default {
 name: 'index',
 components: {
   ServiceBar,
   SwiperSlidec,
 },
 data() {
   return {}
 }
}
</script>

<style lang="scss" scoped>
  .index {
    .container {
      position: relative;
      width: 1226px;
      margin-left: auto;
      margin-right: auto;

    }
  }
</style>