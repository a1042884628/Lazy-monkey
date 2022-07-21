import Vue from 'vue'
import Router from 'vue-router'
import AppLayout from '../layouts/AppLayout'
Vue.use(Router)

const Login = () => import('../pages/login')
const Workbench = () => import('../pages/workbench')

const router = new Router({
  routes: [
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'index',
      path: '/',
      redirect: 'workbench'
    },
    {
      name: 'layout',
      path: '',
      component: AppLayout,
      children: [
        {
          name: 'workbench',
          path: '/workbench',
          meta: {
            title: '工作台'
          },
          component: Workbench
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  let userInfo = router.app.$options.store.state.userInfo
  if (userInfo != null) {
    next()
    return
  }
  // 登录页面处理
  if (to.name === 'login') {
    next()
    return
  }
  // 非登录页面，验证用户是否登录
  setTimeout(() => {
    // 已登录，存储userInfo
    router.app.$store.commit('setUserInfo', {
      avatar: '/static/avatar/woman.png',
      realname: '超级管理员'
    })
    next()
  }, 300)
})

export default router
