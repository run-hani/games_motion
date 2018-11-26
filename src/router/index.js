import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

/* Home */
import Home from '@/components/Home'

/* 야근내역 */
import SiteList from '@/components/SiteList'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'SiteList',
    component: SiteList,
    meta: { auth: true }
  },
  {
    path: '/SiteList',
    name: 'SiteList',
    component: SiteList,
    meta: { auth: true }
  }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router
