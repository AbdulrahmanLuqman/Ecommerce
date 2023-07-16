import './assets/main.css'
import { createPinia } from 'pinia'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

const app = createApp(App)

qpp.use(pinia)
app.use(router)
app.mount('#app')
