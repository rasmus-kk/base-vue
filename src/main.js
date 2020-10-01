import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.config.productionTip = true

const vuetify = new Vuetify()

new Vue({
  router,
  store,
  vuetify: vuetify,
  data(){
    return {
      drawer:true, // Se under nav v-model  og app-bar har en toggle-knap
    }
  },
  render: h => h(App)
}).$mount('#app')
