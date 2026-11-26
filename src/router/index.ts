
import Home from "@/pages/home/Home.vue";
import About from "@/pages/about/about.vue";
import Contact from "@/pages/contact/contact.vue";
import MainLayout from "@/layouts/MainLayout.vue";

import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [
        {
          path: "",
          name: "home",
          component: Home
        },
        {
          path: "about",
          name: "about",
          component: About
        },
        {
          path: "contact",
          name: "contact",
          component: Contact
        }
      ]
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/"
    }
  ]
});
