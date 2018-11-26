import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

/* Home */
import Home from '@/components/Home'

/* 사이트 */
import SiteList from '@/components/SiteList'

/* 스크롤 모션 */
import ScrollList from '@/components/ScrollList'

/* 파티클 */
import ParticleList from '@/components/ParticleList'

/* 슬라이드 */
import SlideList from '@/components/SlideList'

/* 레이어 팝업 */
import LayerList from '@/components/LayerList'

/* 버튼 */
import BtnList from '@/components/BtnList'

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
  },
  {
    path: '/ScrollList',
    name: 'ScrollList',
    component: ScrollList,
    meta: { auth: true }
  },
  {
    path: '/ParticleList',
    name: 'ParticleList',
    component: ParticleList,
    meta: { auth: true }
  },
  {
    path: '/SlideList',
    name: 'SlideList',
    component: SlideList,
    meta: { auth: true }
  },
  {
    path: '/LayerList',
    name: 'LayerList',
    component: LayerList,
    meta: { auth: true }
  },
  {
    path: '/BtnList',
    name: 'BtnList',
    component: BtnList,
    meta: { auth: true }
  }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router
