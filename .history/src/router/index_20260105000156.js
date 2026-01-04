import { createRouter, createWebHistory } from "vue-router";
import EntryPage from "../components/EntryPage.vue";
import BaYePage from "../components/BaYePage.vue";
import LoveHeartPage from "../components/LoveHeartPage.vue";

const routes = [
  {
    path: "/",
    name: "Entry",
    component: EntryPage,
  },
  {
    path: "/ba-ye",
    name: "BaYe",
    component: BaYePage,
  },
  {
    path: "/love-heart",
    name: "LoveHeart",
    component: LoveHeartPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
