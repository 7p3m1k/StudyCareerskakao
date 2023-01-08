import { createWebHistory, createRouter } from 'vue-router';
import Jobs from '@/components/Jobs.vue';
import Main from "@/components/Main";

const routes = [
    {
        path : '/jobs',
        component : Jobs
    },
    {
        path : '/',
        component : Main
    }
]; //라우팅 패스, 컴포넌트 등 정의

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;