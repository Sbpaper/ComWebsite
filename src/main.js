import Vue from 'vue'

import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router'
import {getuser} from '@/utils/auth'
import '@/permission' // permission control
import '@/styles/main.scss' // global css
import 'element-ui/lib/theme-chalk/index.css'
import Pagination from "@/components/Pagination.vue";

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component('Pagination', Pagination)

// const whiteList = ['/','/login','/404','/category','/tag'] // 不重定向白名单
// router.beforeEach((to, from, next) => {
//     let user = getuser()
//     console.log('Main>UserDATA',user)
//     if (user.Token) {
//       if (!user.Token) {
//         if (to.path === '/login') {
//           router.push({ name: "login", params: { msg: "登录失效" } })
//         } else {
//           if (JSON.stringify(to.query || {}) == '{}') {
//             next({path: to.path})
//           } else {
//             next({path: to.path,query: to.query})
//           }
//         }
//       } else {
//         if (to.path === '/login') {
//           router.push({ name: "home" })
//         } else {
//           next()
//         }
//       }
//     } else {
//       if (whiteList.indexOf(to.path) !== -1) {
//         next()
//       } else {
//         router.push({ name: "login", params: { msg: "登录失效" } })
//       }
//     }
//   })

router.beforeEach((to, from, next) => {
  console.log('Main>UserDATA',getuser())
  if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    let user = getuser()
    if (!user.Token) {
      router.push({ name: "login", params: { msg: "登录失效" } })
    } else {
      next()
    }
  } else {
    next()  // 确保一定要调用next()
  }
})

Object.defineProperty(Vue.prototype, '$http', {
  value: function(requestPromise, successCallback) {
    requestPromise.then(res => {
      console.log("Load:",res)
      if (!res) return
      successCallback && successCallback(res)
    })
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')