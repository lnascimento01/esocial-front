import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/list",
    alias: "/report",
    name: "report",
    component: () => import("./components/DomainsList.vue")
  },
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: () => import("./components/Welcome.vue")
  },
  {
    path: "/domain/:id",
    name: "domain",
    component: () => import("./components/DomainDetail.vue")
  },
  {
    path: "/crud",
    name: "crud",
    component: () => import("./components/HomeCrud.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;