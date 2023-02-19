import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import DetailsView from "@/views/DetailsView.vue";
const routes = [
       {
              name:"HomePage",
              path:"/",
              component: HomeView
       },
       {
              name:"AboutPage",
              path:"/about",
              component: AboutView
       },
       {
              name:"DetailPage",
              path:"/details",
              component: DetailsView
       },
];
const router=createRouter({
       routes,
       // history: createWebHistory()
       history: createWebHashHistory()

});
export default router;