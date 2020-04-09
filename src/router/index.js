/* 
路由器对象
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

//声明使用Vue插件
Vue.use(VueRouter)

//向外暴露一个路由器

export default new VueRouter({
    mode:'history',//路由路径不带#
    //配置应用中的所有路由
    routes
})