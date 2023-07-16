import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: ()=> import('../views/Pages.vue'),
            children: [
                {
                    path: '/',
                    name: 'LandingPage',
                    component: ()=> import('../views/LandingPage.vue')
                }
            ]
        },
        {
            path: '/:catchAll(.*)',
            name: 'NotFoundPage',
            component: ()=> import('')
        }
    ]

})

export default router