import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* Layout */
import Layout from '../layout/Layout'

const routes = [
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '/',
    component: Layout,
    meta: {title:'发现'},
    children: [
      {
        path: '',
        name: 'homeFind',
        component: () => import('@/views/home/home.vue'),
        meta: {title:'发现'}
      },
      {
        path: 'subscription',
        name: 'homeSubscription',
        component: () => import('@/views/home/subscription.vue'),
        meta: {title:'我的订阅'}
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import('@/views/login/')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router