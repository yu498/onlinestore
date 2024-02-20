import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';

// axios所需要將格式改成如下
const app = createApp(App);
app.use(VueAxios, axios);
app.use(router);
app.mount('#app');
