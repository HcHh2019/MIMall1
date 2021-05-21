<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="JavaScript:;">小米商城</a>
          <a href="JavaScript:;">MUIU</a>
          <a href="JavaScript:;">云服务</a>
          <a href="JavaScript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="JavaScript:;" v-if="username">{{username}}</a>
          <a href="JavaScript:;" v-if="!username" @click="login">登录</a>
          <a href="JavaScript:;" v-if="username">我的订单</a>
          <a href="javascript:;" class="mycart" @click="goToCart">
            <span class="iconcart"></span>
            购物车</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <a :href="'/#/product/'+'item.id'" target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage" alt="item.subtitle">
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | currency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-1.jpg" alt="">
                    </div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-2.jpg" alt="">
                    </div>
                    <div class="pro-name">小米全面屏电视E55A</div>
                    <div class="pro-price">1999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-3.png" alt="">
                    </div>
                    <div class="pro-name">小米电视4A 32英寸</div>
                    <div class="pro-price">699元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-4.jpg" alt="">
                    </div>
                    <div class="pro-name">小米电视4A 55英寸</div>
                    <div class="pro-price">1999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-5.jpg" alt="">
                    </div>
                    <div class="pro-name">小米电视4A 65英寸</div>
                    <div class="pro-price">2699元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-6.png" alt="">
                    </div>
                    <div class="pro-name">查看全部</div>
                    <div class="pro-price">小米电视</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 name: 'nav-header',
 data() {
   return {
     username: 'Jack',
     phoneList: [],
   }
 },
 filters: {
   currency(val) {
     if(!val) return '0.00';
     return '￥'+val.toFixed(2)+'元';
   }
 },
 mounted() {
   this.getProductList();
 },
 methods: {
   getProductList() {
     this.axios.get('/products',{
       params: {
         categoryId: '100012',
       }
     }).then((res)=>{
       if (res.list.length>6){
         this.phoneList = res.list.slice(0,6);
       }
     })
   },
   goToCart() {
     this.$router.push('/cart')
   },
   login() {
     this.$router.push('/login')
   }    
 }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/base.scss';

  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .mycart {
        width: 110px;
        background-color: #FF6600;
        text-align: center;
        color: #fff;
        .iconcart {
          display: inline-block;
          width: 16px;
          height: 12px;
          background: url('/imgs/icon-cart-checked.png') no-repeat center;
          background-size: contain;
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header .container {
    height: 112px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .header-logo {
      display: inline-block;
      width: 55px;
      height: 55px;
      background-color: #FF6600;
      border-radius: 4px;
      a {
        display: inline-block;
        width: 110px;
        height: 55px;
      }
      a:before {
        content: '';
        display: inline-block;
        width: 55px;
        height: 55px;
        background: url('/imgs/mi-logo.png') no-repeat center;
        background-size: 55px;
        transition: all 0.2s ease-in-out;
      }
      a:after {
        content: '';
        display: inline-block;
        width: 55px;
        height: 55px;
        background: url('/imgs/mi-home.png') no-repeat center;
        background-size: 55px;
      }
      a:hover:before {
        margin-left: -55px;
        transition: all 0.2s ease-in-out;
      }
    }
    .header-menu {
      display: inline-block;
      width: 643px;
      padding-left: 209px;
      .item-menu {
        display: inline-block;
        color: #333;
        font-weight: bold;
        font-size: 16px;
        line-height: 116px;
        margin-right: 20px;
        &:hover {
          color: #ff6600;
          .children {
            height: 220px;
            opacity: 1;
          }
        }
        span {
          cursor: pointer;
        }
        .children {
          position: absolute;
          top: 112px;
          left: 0;
          width: 1226px;
          height: 0px;
          opacity: 0;
          overflow: hidden;
          border: 0.5px solid #e5e5e5;
          box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
          transition: all 0.5s ease-in-out;
          background-color: #fff;
          z-index: 11;
          .product {
            position: relative;
            float: left;
            width: 16.6%;
            height: 220px;
            text-align: center;
            a {
              display: inline-block;
              height: 12px;
              font-size: 12px;
              line-height: 12px;
              .pro-img {
                height: 140px;
                img {
                  width: auto;
                  height: 111px;
                  margin-top: 26px;
                }
              }
              .pro-name {
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: #333;
              }
              .pro-price {
                color: #FF6600;
              }
            }
            &:before {
              content: '';
              position: absolute;
              top: 28px;
              right: 0;
              border-left: 1px solid #d7d7d7;
              height: 130px;
              width: 1px;
            }
            &:last-child:before {
              display: none;
            }
          }
        }
      }
    }
    .header-search {
      width: 319px;
      .wrapper {
        height: 50px;
        border: 1px solid #e0e0e0;
        display: flex;
        align-items: center;
        border-radius: 2px;
        input {
          border: none;
          box-sizing: border-box;
          border-right: 1px solid #e0e0e0;
          width: 264px;
          height: 50px;
          padding-left: 14px;
          font-size: 18px;
          color: #FF6600;
        }
        a {
          display: inline-block;
          width: 18px;
          height: 18px;
          background: url('/imgs/icon-search.png') no-repeat center;
          background-size: contain;
          margin-left: 17px;
        }
      }
    }
  }
</style>