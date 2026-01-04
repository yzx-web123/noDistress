import { createRouter, createWebHistory } from "vue-router";
import BaYePage from "../components/BaYePage.vue";

const routes = [
  {
    path: "/",
    name: "BaYe",
    component: BaYePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
