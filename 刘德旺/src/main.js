// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import axios from 'axios'
Vue.config.productionTip = false
require('swiper/dist/css/swiper.css');
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
