<template>
  <div class="nav-menu">
    <ul class="menu-wrap">
      <li class="menu-item">
        <a href="javascrip:;">手机 电话卡</a>
        <div class="menu-items">
          <swiper-menu-item></swiper-menu-item>
        </div>
      </li>
      <li class="menu-item">
        <a href="javascrip:;">电视 盒子</a>
        <swiper-menu-item></swiper-menu-item>
      </li>
      <li class="menu-item">
        <a href="javascrip:;">笔记本 平板</a>
      </li>
      <li class="menu-item">
        <a href="javascrip:;">家电 插线板</a>
      </li>
      <li class="menu-item">
        <a href="javascrip:;">出行 穿戴</a>
      </li>
      <li class="menu-item">
        <a href="javascrip:;">智能 路由器</a>
      </li>
      <li class="menu-item">
        <a href="javascrip:;">电源 配件</a>
      </li>
      <li class="menu-item">
        <a href="javascrip:;">生活 箱包</a>
      </li>
    </ul>
  </div>
</template>

<script>
import SwiperMenuItem from './SwiperMenuItem'
export default {
 name: 'swiper-menu',
 components: {
   SwiperMenuItem
 }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixin.scss';
  .nav-menu {
    position: absolute;
    width: 264px;
    height: 451px;
    left: 0;
    z-index: 5;
    padding: 26px 0px;
    background-color: #55585A7A;
    box-sizing: border-box;
    .menu-wrap {
      .menu-item {
        width: 264px;
        height: 50px;
        line-height: 50px;
        a {
          position: relative;
          display: block;
          font-size: 16px;
          color: #fff;
          padding-left: 30px;
          &::after {
            content: '';
            position: absolute;
            right: 30px;
            top: 17.5px;
            @include bgImg(10px,15px,'/imgs/icon-arrow.png');
            vertical-align:middle;
          }
        }
        .menu-items {
          display: none;
        }
      }
      .menu-item:hover{
        background-color: #ff6600;
        .menu-items {
          display: block;
        }
      }
    }
  }
</style>