import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { plugin, defaultConfig } from '@formkit/vue';
import App from './App.vue';
import router from './router';
import '@formkit/themes/genesis';

import './assets/main.css';

const pinia = createPinia();

createApp(App).use(router).use(pinia).use(plugin, defaultConfig).mount('#app');
