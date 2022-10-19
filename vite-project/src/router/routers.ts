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
    // 注册
    {
        path: '/register',
        name: 'Register',
        component: () => import('../view/register/index.vue')
    },
    // 课程
    {
        path: '/class',
        name: 'Class',
        component: () => import('../view/class/index.vue'),
        children:[
            {
                path:'prefecture',
                component: () => import('../view/class/prefecture/index.vue'),
                meta:{
                    title:'会员专区',
                }
            },
            {
                path:'video',
                component: () => import('../view/class/video/index.vue'),
                meta:{
                    title:'视频课',
                }
            },
            {
                path:'live',
                component: () => import('../view/class/live/index.vue'),
                meta:{
                    title:'直播课',
                }
            },
            {
                path:'offline',
                component: () => import('../view/class/offline/index.vue'),
                meta:{
                    title:'线下课',
                }
            },
            {
                path:'subject',
                component: () => import('../view/class/subject/index.vue'),
                meta:{
                    title:'主题',
                }
            },
        ]
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