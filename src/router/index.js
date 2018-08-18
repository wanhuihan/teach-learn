//
import Vue from 'vue';

import VueRouter from 'vue-router';
//
import home from '../components/home';
//
import details from '../components/component.course.details';
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: home,
        // children: [
        //     {
        //         path: 'details/:id',
        //         component: details,
        //         name: 'details'
        //     }
        // ]
    },
    {
        path: '/details/:id',
        component: details,
        name: 'details'
    }
]


var router =  new VueRouter({
    routes
})
export default router;
