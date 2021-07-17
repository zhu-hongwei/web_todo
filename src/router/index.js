import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/', 
    name: 'Home',
    component: Home
  },
  {
    path: '/more',
    name: 'More',
    component: () => import('../views/More.vue')
  }, {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/Detail.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

export default router
