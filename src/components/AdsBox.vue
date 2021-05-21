<template>
<div>
  <div class="ads-box">
    <a :href="'/#/product/'+item.id" v-for="(item,index) in adsList" :key="index">
      <img :src="item.img">
    </a>
  </div>
  <div class="banner">
    <a href="'/#/product/30'">
    <img src="/imgs/banner-1.png"></a>
  </div>
</div>
</template>

<script>
export default {
 name: 'ads-box',
 data(){
   return {
     adsList: [
       {
         id: 33,
         img: '/imgs/ads/ads-1.png'
       },
       {
         id: 48,
         img: '/imgs/ads/ads-2.jpg'
       },
       {
         id: 45,
         img: '/imgs/ads/ads-3.png'
       },
       {
         id: 47,
         img: '/imgs/ads/ads-4.jpg'
       }
     ]
   }
 }
}
</script>

<style lang="scss" scoped>
  .ads-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 14px;
    margin-bottom: 28px;
    a {
      width: 296px;
      height: 167px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .banner {
    margin-bottom: 50px;
    img {
      width: 100%;
    }
  }
</style>