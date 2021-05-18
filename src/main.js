
import Vue from 'vue'
import router from './router'
import axios from 'axios'
// import env from '../env'
import App from './App.vue'

Vue.config.productionTip = false

Vue.prototype.axios = axios
// 根据前端方式调整，这里用的是接口代理,使用的是‘/api’
// axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
// 接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;
  if (res.status == 0){
    return res.data;
  } else if (res.status == 10){ // 未登录
    window.location.href = '/#/login';
  } else{
    alert(res.msg);
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
