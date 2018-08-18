import Vue from 'vue'
import App from './App.vue'

import iView from 'iview';
import 'iview/dist/styles/iview.css';

import router from './router';

import mockJs from './fakeData';

import axios from 'axios';
Vue.use(iView);

// var Mock = require('mockjs');

Vue.config.productionTip = false

Vue.prototype.$http = axios;

// Vue.protoype.test = axios;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
