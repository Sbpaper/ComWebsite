import router from './router'

router.beforeEach((to, from, next) => {

    /* 路由发生变化修改页面title */
    if (to.meta.title) {
      document.title = to.meta.title + ' - Sbpaper 沙雕学术，看趣味沙雕论文就上沙雕学术。'
    }
    next()
  })