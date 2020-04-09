/* 
所有路由配置的数组模块
*/
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';

export default [
  {
    path:'/',
    component:Home
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/register',
    component:Register
  },
]