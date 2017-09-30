import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Secure from '@/components/Secure'
import auth from '../lib/auth'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Secure',
      name: 'Secure',
      component: Secure,
      meta: {requiresAuth: true}
    }
  ]
})


router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !auth.isAuthorised()) {
        next({name: 'Hello'})
    }
  else {
    next()
  }
})


export default router
