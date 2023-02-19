import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import NewBookMark from "@/views/NewBookMark.vue";
const routes = [
       {
              name:"HomePage",
             path: '/',
             component: HomePage
       },
       {
              name:"NewBookMark",
              path: '/new-bookmark',
              component: NewBookMark
       },
]
const router = createRouter({
       routes,
       history: createWebHashHistory()

});
export default router;