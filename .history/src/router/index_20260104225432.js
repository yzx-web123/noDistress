import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Entry",
    component: () => import("../components/EntryPage.vue"),
  },
  {
    path: "/ba-ye",
    name: "BaYe",
    component: () => import("../components/BaYePage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
