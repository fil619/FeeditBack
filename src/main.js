import Vue from 'vue'
import App from './App.vue'
import './index.css'

//Vue Country Flag
import CountryFlag from 'vue-country-flag'
Vue.component('country-flag', CountryFlag)

//Vue Date Picker
import VueDatePicker from '@mathieustan/vue-datepicker';
import '@mathieustan/vue-datepicker/dist/vue-datepicker.min.css';
Vue.use(VueDatePicker);
Vue.use(VueDatePicker, {lang: 'en'});

import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

Vue.use(VXETable, {
  i18n: (key, value) => i18n.t(key, value)
})

//Font Awesome 5
import '@fortawesome/fontawesome-free/css/all.css'

//Font Awesome 4
import 'font-awesome/css/font-awesome.min.css'

import i18n from './i18n'

import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

import store from './store/store'

import nodata from './components/NoData.vue'
Vue.component('no-data',nodata )


Vue.config.productionTip = false

new Vue({
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
