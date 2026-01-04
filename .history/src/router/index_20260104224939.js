import { createRouter, createWebHistory } from "vue-router";
import EntryPage from "../components/EntryPage.vue";
import BaYePage from "../App.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
