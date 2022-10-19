import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/index.vue'
import Video from './components/Video/Video.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// import Vue from 'vue'
// // 定义全局组件
// import Header from './components/Header/index.vue'
// import Footer from './components/Footer/index.vue'
//全局组件:组件名字   第二个参数：组件

// Vue.component(Footer.name,Footer);

const app = createApp(App)
app.component('Header', Header)
app.component('Footer', Footer)
app.component('VideoCard', Video)
app.use(router).use(ElementPlus).mount('#app')
