import {createRouter,createWebHistory} from 'vue-router'
import routers from './routers'
const router = createRouter({
    history:createWebHistory(),
    routes:routers
})

export default router