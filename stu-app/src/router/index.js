import Vue from 'vue'
import Router from 'vue-router'
import Defalut from '@/layout/default.vue'
import Index from '@/page/index.vue'
import Login from '@/page/login.vue'
import Change from '@/page/change.vue'

Vue.use(Router)
// const router = new Router()
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login' || to.path === '/change') {
//     next()
//   } else {
//     let username = localStorage.getItem('userName')
//     if (username === null || username === '') {
//       next('/index')
//     } else {
//       next()
//     }
//   }
// })

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'defalut',
      component: Defalut,
      redirect: '/login',
      children: [{
        path: '/change',
        name: 'change',
        component: Change
      }, {
        path: '/index',
        name: 'index',
        component: Index
      }]
      // children: [{
      //   path: '/index',
      //   name: 'index',
      //   component: Index
      // }]
    }

  ]
})
