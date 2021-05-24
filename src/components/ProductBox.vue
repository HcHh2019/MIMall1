<template>
  <div class="product-box">
    <div class="container">
      <h2>手机</h2>
    <div class="wrapper">
      <div class="banner-left">
        <a href="/#/product/"><img src="/imgs/mix-alpha.jpg"></a>
      </div>
      <div class="list-box">
        <div class="list" v-for="(sub,index) in phoneList" :key="index">
          <div class="item" v-for="(item,arr) in sub" :key="arr">
            <span :class="{'new-pro': arr%2==0}">新品</span>
            <div class="item-img">
              <img :src="item.mainImage">
            </div>
            <div class="item-info">
              <h3>{{item.name}}</h3>
              <p>{{item.subtitle}}</p>
              <p class="price">{{item.price}}元</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
 name: 'product-box',
 data() {
   return {
     phoneList: []
   }
 },
 mounted() {
   this.init()
 },
 methods: {
  init() {
    this.axios.get('/products',{
      params: {
        categoryId: 100012,
        pageSize: 14,
      }
    }).then((res)=>{
      res.list = res.list.slice(6,14);
      this.phoneList = [res.list.slice(0,4),res.list.slice(4,8)]
    })
  }
 }
}
</script>

<style lang="scss" scoped>
 .product-box {
   background-color: #f5f5f5;
   padding: 30px 0 50px 0;
  .container {
    position: relative;
    width: 1226px;
    margin-left: auto;
    margin-right: auto;
  }
   h2 {
     font-size: 22px;
     height: 21px;
     line-height: 21px;
     color: #333;
     margin-bottom: 20px;
   }
   .wrapper {
     display: flex;
     .banner-left {
       margin-right: 16px;
       img {
         width: 241px;
         height: 619px;
       }
     }
     .list-box {
       .list {
         display: flex;
         justify-content: space-between;
         align-items: center;
         width: 966px;
         margin-bottom: 14px;
         &:last-child {
           margin-bottom: 0;
         }
         .item {
           width: 326px;
           height: 302px;
           background-color: #fff;
           text-align: center;
           margin-right: 14px;
           &:last-child {
             margin-right: 0;
           }
           span {
             display: inline-block;
             width: 67px;
             height: 24px;
             line-height: 24px;
             font-size: 14px;
             color: #fff;
             &.new-pro {
               background-color: #7ECF68;
             }
             &.kill-pro {
               background-color: #E82626;
             }
           }
           .item-img {
             img {
               height: 195px;
               width: 100%;
             }
           }
           .item-info {
             h3 {
               font-size: 14px;
               color: #333;
               line-height: 14px;
               font-weight: bold;
             }
             p {
               color: #999;
               line-height: 14px;
               margin: 6px auto 13px;
             }
             .price {
               color: #F20A0A;
               font-size: 14px;
               font-weight: bold;
               cursor: pointer;
               &:after {
                 content: '';
                 display: inline-block;
                 width: 22px;
                 height: 22px;
                 background: url('/imgs/icon-cart-hover.png') no-repeat center;
                 background-size: contain;
                 vertical-align: middle;
                 margin-left: 5px;
               }
             }
           }
         }

        }
      }
    }
  }
</style>