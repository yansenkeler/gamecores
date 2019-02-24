import Vue from 'vue';
import App from '@/App';
import router from '@/routers';
import BootstrapVue from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import regular from '@fortawesome/fontawesome-free-regular';
import brands from '@fortawesome/fontawesome-free-brands';

fontawesome.library.add(solid);
fontawesome.library.add(regular);
fontawesome.library.add(brands);

Vue.component('font-awesome-icon', FontAwesomeIcon);

console.log(456);

Vue.use(BootstrapVue);

new Vue({
    el: "#app",
    router,
    components: {App},
    template: '<App/>'
});