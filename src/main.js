import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/Home.vue';
import Bar from './pages/Bar.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [{ path: '/', component: Home }, { path: '/bar', component: Bar }];
const router = new VueRouter({
  routes
});

new Vue({
  router
}).$mount('#root');
