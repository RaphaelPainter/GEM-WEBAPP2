// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/index';
import Vuex from "vuex";

import vuetify, {
} from 'vuetify'

Vue.config.productionTip = false;
Vue.use(Vuex)
Vue.use(vuetify)

import { VuejsDatatableFactory } from 'vuejs-datatable';

Vue.use( VuejsDatatableFactory );
    /* eslint-disable no-new */
new Vue({
    vuetify: new vuetify(),
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
    store,
     render: h => h(App)
})
