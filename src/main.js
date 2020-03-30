import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import './assets/styles/reset.css';
import './assets/styles/border.css';
import fastClick from 'fastclick';
import './assets/styles/iconfont.css';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import store from './store';


Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
