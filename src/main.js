import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import './assets/main.css'

const options = {};

createApp(App).use(store).use(Toast, options).mount('#app')
