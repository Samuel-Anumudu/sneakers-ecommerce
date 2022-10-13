import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Cart from "../views/Cart";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
