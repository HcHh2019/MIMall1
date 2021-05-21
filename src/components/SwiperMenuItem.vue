<template>
  <div class="menu-items">
    <ul v-for="(item,index) in menuList" :key="index">
      <li v-for="(sub,indexs) in item" :key="indexs">
        <a :href=" sub ? '/#/product' + sub.id : ''">
          <img :src=" sub ? sub.img : '/imgs/item-box-1.png'">
          {{ sub ? sub.name : '小米9'}}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
 name: 'swiper-menu-item',
 data(){
   return {
     menuList:[
       [
       {
         id: 30,
         img: '/imgs/item-box-1.png',
         name: '小米CC9',
       },
       {
         id: 31,
         img: '/imgs/item-box-2.png',
         name: '小米8青春版',
       },
       {
         id: 32,
         img: '/imgs/item-box-3.jpg',
         name: 'RedMi K20',
       },
       {
         id: 33,
         img: '/imgs/item-box-4.jpg',
         name: '移动4G专区',
       }
     ],[0,0,0,0]
    ]
   }
 }
}
</script>

<style lang="scss" scoped>
  .menu-items {
    width: 962px;
    height: 451px;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 264px;
    border: 1px solid #e5e5e5;
    ul {
      display: flex;
      justify-content: space-between;
      height: 75px;
      li {
        height: 75px;
        line-height: 75px;
        flex: 1;
        padding-left: 23px;
        a{
          color: #000;
          font-size: 14px;
          img {
            width: 42px;
            height: 35px;
            vertical-align: middle;
            margin-right: 15px;
          }
        }
        
      }
    }
  }
  
</style>