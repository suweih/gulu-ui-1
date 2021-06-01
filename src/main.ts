import {createApp} from 'vue';
import App from './App.vue';
import './index.css';
import {createWebHashHistory, createRouter} from 'vue-router';
import Su from './components/Su.vue';
import Su2 from './components/Su2.vue';

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Su},
    {path: '/su2', component: Su2}
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
