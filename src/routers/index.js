import VueRouter from 'vue-router';
import Vue from 'vue';
import Home from '@/pages/Home';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        }
    ]
});