const routers = [
    {
        path:'/',
        redirect:'/home'
    },
    // 登录
    {
        path: '/login',
        name: 'Login',
        component: () => import('../view/login/index.vue')
    },
    // 课程
    {
        path: '/class',
        name: 'Class',
        component: () => import('../view/class/index.vue')
    },
    // 我的
    {
        path: '/myself',
        name: 'Myself',
        component: () => import('../view/myself/index.vue')
    },
    // 练习室
    {
        path: '/train',
        name: 'Train',
        component: () => import('../view/train/index.vue')
    },
    // 首页
    {
        path: '/home',
        name: 'Home',
        component: () => import('../view/home/index.vue')
    },
]
export default routers