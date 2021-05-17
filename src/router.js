import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/home/home'
import Index from './pages/home/index'
import Product from './pages/home/product'
import Detail from './pages/home/detail'
import Cart from './pages/order/cart'
import Login from './pages/login'
import Order from './pages/order/order'
import OrderConfirm from './pages/order/orderConfirm'
import OrderPay from './pages/order/orderPay'
import AliPay from './pages/order/aliPay'
import OrderList from './pages/order/orderList'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: Index
        },
        {
          path: '/product/:id',
          name: 'product',
          component: Product
        },
        {
          path: '/detail/:id',
          name: 'detail',
          component: Detail
        }
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      children: [
        {
          path: 'confirm',
          name: 'order-confirm',
          component: OrderConfirm
         },
         {
           path: 'pay',
           name: 'order-pay',
           component: OrderPay
         },
         {
           path: 'aliPay',
           name: 'aliPay',
           component: AliPay
         },
         {
           path: 'list',
           name: 'order-list',
           component: OrderList
         }  
      ]
    }
  ]
})