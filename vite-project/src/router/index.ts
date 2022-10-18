import {createRouter,createWebHistory} from 'vue-router'
import routers from './routers'
const router = createRouter({
    history:createWebHistory(),
    routers
})

export default router