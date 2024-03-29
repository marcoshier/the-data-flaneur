import Vue from 'vue'
import App from './App.vue'
import 'reset-css';
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: -70,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')