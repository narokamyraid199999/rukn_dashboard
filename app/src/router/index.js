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
      children: [
        {
          path: "general",
          name: "general",
          component: import("../components/StaffTabs/StaffGeneralTab.vue"),
        },
        {
          path: "join",
          name: "joinTab",
          component: import("../components/StaffTabs/StaffJoinTab.vue"),
        },
        {
          path: "info",
          name: "info",
          component: import("../components/StaffTabs/StaffInfoTab.vue"),
        },
        {
          path: "details",
          name: "details",
          component: import("../components/StaffTabs/StaffDetailsTab.vue"),
        },
        {
          path: "salary",
          name: "salary",
          component: import("../components/StaffTabs/StaffSalaryTab.vue"),
        },
        {
          path: "personal",
          name: "personal",
          component: import("../components/StaffTabs/StaffPersonalInfoTab.vue"),
        },
        {
          path: "profile",
          name: "profile",
          component: import(
            "../components/StaffTabs/StaffPersonalProfileTab.vue"
          ),
        },
      ],
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
