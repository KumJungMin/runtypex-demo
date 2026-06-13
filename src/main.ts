import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import { createPinia } from 'pinia'


const router = createRouter({
  history: createWebHistory(),
})


const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.use(router) 
app.mount('#app')
