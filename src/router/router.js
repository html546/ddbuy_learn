import Vue from "vue";
import VueRouter from "vue-router";

import Dashboard from "../views/dashboard/Dashboard";

const Home = () => import("../views/home/Home");
const Category = () => import("../views/category/Category");
const Eat = () => import("../views/eat/Eat");
const Cart = () => import("../views/cart/Cart");
const Mine = () => import("../views/mine/Mine");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/dashboard"
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    children: [
      {
        path: "/dashboard",
        redirect: "/dashboard/home"
      },
      {
        path: "home",
        name: "home",
        component: Home
      },
      {
        path: "category",
        name: "category",
        component: Category
      },
      {
        path: "eat",
        name: "eat",
        component: Eat
      },
      {
        path: "cart",
        name: "cart",
        component: Cart
      },
      {
        path: "mine",
        name: "mine",
        component: Mine
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
