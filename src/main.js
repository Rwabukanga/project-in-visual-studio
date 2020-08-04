import Vue from 'vue'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';
import VueRouter from 'vue-router';
import { router }   from './routes';
import ElementUI from 'element-ui';
import { DataTables, DataTablesServer } from 'vue-data-tables'
//import { DataTables, DataTablesServer } from 'vue-data-tables/src/index.js';

import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import { store } from './store';


Vue.use(VueSweetalert2);
Vue.use(VueRouter);

Vue.use(ElementUI);

Vue.use(DataTables);
Vue.use(DataTablesServer);




locale.use(lang);

/* const router = new VueRouter({
  routes,
  mode:'history'
}); */

new Vue({
  el: '#app',
  router,
  store:store,
  render: h => h(App)
})
