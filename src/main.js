import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'leaflet/dist/leaflet.css';
Vue.config.productionTip = false
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
import titleMixin from '../src/mixins/titleMixin'
Vue.mixin(titleMixin)



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
