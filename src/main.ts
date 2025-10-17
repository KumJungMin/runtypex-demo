import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import SearchAddressPage from './features/presentation/address/searchAddress/pages/SearchAddressPage.vue'
import { createPinia } from 'pinia'

const routes = [
  { path: '/', name: 'SearchAddress', component: SearchAddressPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.use(router) 
app.mount('#app')
