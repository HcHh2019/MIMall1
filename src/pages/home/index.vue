<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <swiper-menu></swiper-menu>
        <swiper-slidec></swiper-slidec>
      </div>
      <ads-box></ads-box>
      
    </div>
    <product-box></product-box>
    <service-bar></service-bar>
  </div>
</template>

<script>
import ServiceBar from '../../components/ServiceBar'
import SwiperSlidec from '../../components/SwiperSlidec'
import SwiperMenu from '../../components/SwiperMenu'
import AdsBox from '../../components/AdsBox'
import ProductBox from '../../components/ProductBox'

export default {
 name: 'index',
 components: {
   ServiceBar,
   SwiperSlidec,
   SwiperMenu,
   AdsBox,
   ProductBox,
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