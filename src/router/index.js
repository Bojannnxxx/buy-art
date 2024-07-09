import { createRouter, createWebHistory } from "vue-router";
import WelcomeComponent from "@/components/WelcomeComponent.vue";
import HomeComponent from "@/components/HomeComponent.vue";
import GalleryComponent from "@/components/GalleryComponent.vue";
import JoinUsComponent from "@/components/JoinUsComponent.vue";
import AboutComponent from "@/components/AboutComponent.vue";

const routes = [
  { path: "/", component: WelcomeComponent },
  { path: "/home", component: HomeComponent },
  { path: "/gallery", component: GalleryComponent },
  { path: "/join", component: JoinUsComponent },
  { path: "/about", component: AboutComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
