import { createRouter, createWebHistory } from "vue-router";
import Article from "../views/Article.vue";
import Home from "../views/Home.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/:articleId",
    name: "Article",
    component: Article 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
