import { createApp } from 'vue';
import routes from '@/routes/index';
import App from './App.vue'
import installElementPlus from './plugins/element';
import 'element-plus/lib/theme-chalk/index.css';
import 'normalize.css';


const app = createApp(App);
app.use(routes);
app.use(installElementPlus);
app.mount('#app');
