import {createRouter,createWebHistory} from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[]= [
    {
        path:'/index',
        component:()=>import('@/pages/Index/index.vue')
    },
    {
        path:'/Home',
        component:()=>import('@/components/Home.vue')
    },
    {
        path:'/',
        redirect:'/home'
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})
export default router