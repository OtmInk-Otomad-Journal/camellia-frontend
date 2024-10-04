import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('../views/MainView.vue')
    },
    {
      path: '/pick',
      name: 'pick',
      component: () => import('../views/PickView.vue')
    },
    {
      path: '/transition',
      name: 'transition',
      component: () => import('../views/TransView.vue')
    },
    {
      path: '/viewpick',
      name: 'viewpick',
      component: () => import('../views/GuanZhongView.vue')
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('../views/CalendarView.vue')
    },
    {
      path: '/backicons',
      name: 'backicons',
      component: () => import('../components/BackgroundIcons.vue')
    }
    /*{
      path: '/extra',
      name: 'extra',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ExtraView.vue')
    }*/
    //
  ]
})

export default router
