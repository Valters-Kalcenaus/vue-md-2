import { createApp } from 'vue';
import App from './App.vue';
import router from './scriptsInJs/router';
import './Style.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
