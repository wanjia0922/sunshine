import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import { VuePlugin } from 'vuera'
import VModal from 'vue-js-modal'
import VueHead from 'vue-head'
import ElementUI from 'element-ui'
import 'highlight.js/lib/common'
import vuePluginHighlight from '@highlightjs/vue-plugin'
import 'highlight.js/styles/base16/solarized-dark.css'
import '@/assets/styles/variables.css'
import '@/assets/styles/buttons.css'
import '@/assets/styles/tables.css'
import '@/assets/styles/dialogs.css'
import '@/assets/styles/tooltips.css'
import '@/assets/styles/messages.css'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import '@/assets/styles/multiselect.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'vditor/dist/index.css'
import VueVditor from 'vue-vditor'

Vue.use(VueVditor)
if (!['localhost', '127.0.0.1'].includes(location.hostname)) {
  import('./registerServiceWorker') // eslint-disable-line no-unused-expressions
}
// import 'vditor/dist/index.css';
// import VueVditor from 'vue-vditor';

// Vue.use(VueVditor);

Vue.use(VuePlugin)
Vue.use(vuePluginHighlight)
Vue.use(VModal)
Vue.use(VueHead)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
