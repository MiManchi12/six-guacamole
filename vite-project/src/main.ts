import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'

// import Vue from 'vue'
// // 定义全局组件
// import Header from './components/Header/index.vue'
// import Footer from './components/Footer/index.vue'
//全局组件:组件名字   第二个参数：组件
// Vue.component(Header.name,Header);
// Vue.component(Footer.name,Footer);

createApp(App).use(router).mount('#app')
