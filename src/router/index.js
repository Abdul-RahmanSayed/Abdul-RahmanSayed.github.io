import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Experience from '../views/Experience.vue'
import Skills from '../views/Skills.vue'
import Resume from '../views/Resume.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
