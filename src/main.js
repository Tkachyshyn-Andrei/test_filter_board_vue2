import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import VueCompositionAPI from '@vue/composition-api'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueCompositionAPI)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')