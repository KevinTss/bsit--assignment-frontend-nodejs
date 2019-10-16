import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '../views/HomePage'
import ChampionPage from '../views/ChampionPage'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/champions/:id',
    name: 'champion-page',
    component: ChampionPage,
  },
  {
    path: '*',
    redirect: '/',
  },
]

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes,
})
