import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/chocolate",
    name: "Chocolate",
    component: () =>
      import("../views/Chocolate.vue"),
  },
  {
    path: "/chocolates",
    name: "Chocolates",
    component: () =>
      import("../views/Chocolates.vue"),
  },
  {
    path: "/chocolate/:id",
    props: true,
    name: "ChocolateDetails",
    component: () =>
      import("../views/ChocolateDetails.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
