import { createRouter, createWebHistory } from "vue-router";
import EntryPage from "../components/EntryPage.vue";
import HomePage from "../components/HomePage.vue";
import BaYePage from "../components/BaYePage.vue";
import LoveHeartPage from "../components/LoveHeartPage.vue";
import PhotoWallPage from "../components/PhotoWallPage.vue";
import JoinUsPage from "../components/JoinUsPage.vue";

const routes = [
  {
    path: "/",
    name: "Entry",
    component: EntryPage,
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
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
  {
    path: "/photo-wall",
    name: "PhotoWall",
    component: PhotoWallPage,
  },
  {
    path: "/join-us",
    name: "JoinUs",
    component: JoinUsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
