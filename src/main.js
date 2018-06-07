import Vue from 'vue';
import App from './App';
import router from './routers';

new Vue({
    el: "#app",
    router,
    components: {App},
    template: '<App/>'
});