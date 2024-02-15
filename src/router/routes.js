import { createRouter, createMemoryHistory } from "vue-router";
import LoginAuth from "../components/auth/LoginAuth.vue";

const routes = [
  {
    path: "/",
    component: () => import("pages/IndexPage.vue"),
    children: [],
  },

  {
    path: "/admin",
    component: () => import("layouts/MainLayout.vue"),
    children: [],
  },

  {
    path: "/auth/login",
    name: "LoginAuth",
    component: LoginAuth,
  },

  // ... otras rutas
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];
const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
export default routes;
router;
