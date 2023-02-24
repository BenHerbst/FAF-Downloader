import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/main",
            name: "main",

        }
    ]
});