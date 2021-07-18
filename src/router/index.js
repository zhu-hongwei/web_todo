import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

// 路由的配置数组
// path: 路由路径 必须以 / 开头
// [name]: 路由的名字
// component: 对应的路由组件
const routes = [
  {
    path: '/', 
    name: 'Home',
    component: Home
  },
  {
    path: '/more',
    name: 'More',
    // 按需引入
    // 如果没有访问 /more 就不会加载这个组件 节约性能
    component: () => import('../views/More.vue')
  }, {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/Detail.vue')
  },
]

// 创建路由对象
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL), // process.env.BASE_URL 可删可不删
  routes,
})

export default router
