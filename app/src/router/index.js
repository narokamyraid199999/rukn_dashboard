import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: import("../views/HomeView.vue"),
    },
    {
      path: "/files",
      name: "files",
      component: import("../components/FileManager.vue"),
    },
    {
      path: "/staff",
      name: "staff",
      component: import("../components/Staff.vue"),
    },
    {
      path: "/jobs",
      name: "jobs",
      component: import("../components/JobsTemplate.vue"),
    },
  ],
});

export default router;
