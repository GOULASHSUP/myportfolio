import { createRouter, createWebHistory } from 'vue-router'
import HeroSection from '../components/HeroSection.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'herosection',
      component: HeroSection
    },
    {
      path: '/aboutme',
      name: 'aboutme',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/AboutMe.vue')
    },
    {
        path: '/projectbbq',
        name: 'projectbbq',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../components/ProjectBbq.vue')
      },
  /*   {
      path: '/event',
      name: 'event',
      component: () => import('../views/EventView.vue')
    },
    {
      path: '/portfoliodetail/:id',
      name: 'portfoliodetail',
      component: () => import('../views/PortfolioDetail.vue'),
      props: true
    } */
  ]
})

export default router
