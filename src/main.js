/* 
入口JS
*/
import Vue from 'vue';
import App from './App';
import router from './router'

new Vue({
  
  render: h =>h(App),//将App组件渲染到页面上
  router,//配置路由器(内部的路由才生效访问)
}).$mount('#app')