import { createRouter, createWebHistory } from "vue-router";
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router