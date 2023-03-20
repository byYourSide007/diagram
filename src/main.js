// Vue 自定义组件
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 第三方框架
import VueKonva from 'vue-konva'

createApp(App).use(store).use(router).use(VueKonva).mount('#app')
