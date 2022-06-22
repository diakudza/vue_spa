import Main from "@/page/main-page";
import News from "@/page/news-page";
import Feedback from "@/page/feedback-page";
import userPage from "@/page/user-page";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
        { path: '/', component: Main},
        { path: '/news', component: News},
        { path: '/feedback', component: Feedback},
        { path: '/user', component: userPage}
    ]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
