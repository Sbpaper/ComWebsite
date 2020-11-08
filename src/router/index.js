import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* Layout */
import FullLayout from '../layout/FullLayout'
import SideLayout from '../layout/SideLayout'
import UserLayout from '../layout/UserLayout'

const routes = [
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '/',
    component: SideLayout,
    children: [
      {
        path: '/',
        name: 'homeFind',
        component: () => import('@/views/home/home.vue'),
        meta: {title:'发现', requireAuth: false}
      },
      {
        path: 'search',
        name: 'homeSearch',
        component: () => import('@/views/home/search.vue'),
        meta: {title:'搜索', requireAuth: false}
      }
    ]
  },
  {
    path: '/',
    component: UserLayout,
    children: [
      {
        path: 'subscription',
        name: 'homeSubscription',
        component: () => import('@/views/home/subscription.vue'),
        meta: {title:'我的订阅', requireAuth: false}
      }
    ]
  },
  {
    path: '/category',
    component: SideLayout,
    children: [
      {
        path: '/',
        name: 'labelCategoryIndex',
        component: () => import('@/views/label/category.vue'),
        meta: {title:'类目', requireAuth: false}
      },
      {
        path: ':id',
        name: 'labelCategory',
        component: () => import('@/views/label/categoryitem.vue'),
        meta: {title:'类目ID', requireAuth: false}
      }
    ]
  },
  {
    path: '/tag',
    component: SideLayout,
    children: [
      {
        path: '/',
        name: 'labelTagIndex',
        component: () => import('@/views/label/tag.vue'),
        meta: {title:'标签', requireAuth: false}
      },
      {
        path: ':id',
        name: 'labelTag',
        component: () => import('@/views/label/tagitem.vue'),
        meta: {title:'标签ID', requireAuth: false}
      }
    ]
  },
  {
    path: '/u/:id',
    component: FullLayout,
    hidden: true,
    children: [
      {
        path: '/',
        name: 'content',
        component: () => import('@/views/home/userhome.vue'),
        meta: {title:'用户主页'}
      }
    ]
  },
  {
    path: '/content/:id',
    component: FullLayout,
    hidden: true,
    children: [
      {
        path: '/',
        name: 'userspace',
        component: () => import('@/views/content/index.vue'),
        meta: {title:'内容'}
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    hidden: true,
    meta: {title:'登录', requireAuth: false},
    component: () => import('@/views/login/')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}