import Vue from 'vue';
import App from './App';
import router from './routers';

export default new Vue({
    el: "#app",
    router,
    component: {App},
    template: '<App/>'
});