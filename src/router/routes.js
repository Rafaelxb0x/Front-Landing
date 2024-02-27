import { createRouter, createMemoryHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("pages/IndexPage.vue"),
    children: [],
  },

  {
    path: "/admin",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/Admin-Table",
        component: () => import("components/admin/Admin-Table.vue"),
      },
      {
        path: "/Banner-Dashboard",
        name: "admin.dashboard",
        component: () => import("components/admin/Banner-Dashboard.vue"),
      },
      {
        path: "/form-banner",
        component: () => import("components/forms/Form-Banner.vue"),
      },
      {
        path: "/form-gallery",
        component: () => import("components/forms/Form-Gallery.vue"),
      },
      {
        path: "/form-pricing",
        component: () => import("components/forms/Form-Pricing.vue"),
      },
      {
        path: "/form-settings",
        component: () => import("components/forms/Form-Settings.vue"),
      },
    ],
  },

  {
    path: "/auth/login",
    name: "LoginAuth",
    component: () => import("src/components/auth/Login-Auth.vue"),
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
