import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// import bus from './event-bus.js'
import store from './store.js';

const app = createApp(App);
app.use(store);
//app.config.globalProperties.$EventBus = bus;
app.mount('#app')
