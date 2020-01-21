import Vue from 'vue';
import Router from 'vue-router';

import HomePage from './Pages/Home'
import LoginPage from './Pages/Login'
import Teams from "./Pages/Teams";
import Challenges from "./Pages/Challenges";
import VMs from "./Pages/VMs";
import TeamAction from "./Pages/TeamAction";

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        { name: 'home', path: '/', component: HomePage },
        { name: 'login', path: '/login', component: LoginPage },
        { name: 'event', path: '/events/:tag', component: Teams },
        { name: 'team', path: '/events/:tag/:id', component: TeamAction },
        { name: 'challenges', path: '/challenges', component: Challenges},
        { name: 'vms', path: '/vms', component: VMs },

        // otherwise redirect to home
        { path: '*', redirect: '/' }
    ]
});

router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    if (authRequired && !loggedIn) {
        return next({
            path: '/login',
            query: { returnUrl: to.path }
        });
    }

    next();
})