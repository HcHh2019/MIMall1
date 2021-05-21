<template>
  <div>
    <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in slideList" :key="index">
            <a :href="'/#/product/'+item.id"><img :src="item.img"></a>
          </swiper-slide>
           <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
 name: 'swiper-slidec',
 components: {
   Swiper,
   SwiperSlide
 },
 data() {
   return {
     swiperOption: {
       autoplay: true,
       loop: true,
       effect : 'cube',
       cubeEffect: {
         slideShadows: false,
         shadow: false,
         shadowOffset: 0,
         shadowScale: 0.6
       },
       pagination: {
        el: '.swiper-pagination',
        clickable:true
       },
       navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
       }
     },
     slideList: [
       {
         id:'42',
         img: '/imgs/slider/slide-1.jpg'
       },
       {
         id:'45',
         img: '/imgs/slider/slide-2.jpg'
       },
       {
         id:'46',
         img: '/imgs/slider/slide-3.jpg'
       },
       {
         id:'',
         img: '/imgs/slider/slide-4.jpg'
       },
       {
         id:'',
         img: '/imgs/slider/slide-5.jpg'
       }
     ]
   }
 }
}
</script>

<style lang="scss" scoped>
  .swiper-box {
    .swiper-container {
      height: 451px;
      img {
        width: 100%;
        height: 100%;
      }
      .swiper-button-prev {
        left: 274px;
      }
    }
  }
</style>