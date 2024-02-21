import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import App from './App.vue';
import router from './router';

// axios所需要將格式改成如下
const app = createApp(App);
app.use(VueAxios, axios);
app.component('LoadingAnimation', Loading);
app.use(router);
app.mount('#app');
