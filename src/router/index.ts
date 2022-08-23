import {createRouter,createWebHistory} from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[]= [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/index',
        component:()=>import('@/pages/Index/index.vue'),
        meta:{
            isHome:false
        }
    },
    {
        path:'/home',
        component:()=>import('@/components/Home.vue'),
        meta:{
            isHome:true
        }
    },

]

const router = createRouter({
    routes,
    history: createWebHistory()
})
export default router