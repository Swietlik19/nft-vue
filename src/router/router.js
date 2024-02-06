import About from "@/views/about";
import Index from "@/views/index";
import Author from "@/views/author";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/authors/:id',
    component: Author
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router;