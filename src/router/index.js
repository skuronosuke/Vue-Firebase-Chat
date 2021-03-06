import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import App from '../views/App.vue'

const routes = [
  {
    path: '/',
    name: 'App',
    component: App
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
