import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap';
import {
  Form, Field, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import * as AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import { currency, date } from './methods/filter';
import App from './App.vue';
import router from './router';

// axios所需要將格式改成如下
const app = createApp(App);
app.config.globalProperties.$filters = { currency, date };
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});
// 設定預設語系
setLocale('zh_TW');
app.use(VueAxios, axios);
app.component('LoadingAnimation', Loading);
app.component('V-Form', Form);
app.component('V-Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.use(router);
app.mount('#app');
