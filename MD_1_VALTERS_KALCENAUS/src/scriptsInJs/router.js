
import { createRouter, createWebHistory } from 'vue-router';

import LandingComponent from '../components/LandingComponent.vue';
import HomeComponent from '../components/HomeComponent.vue';
import AboutMeComponent from '../components/AboutMeComponent.vue';

import store from './store';

const routes = [
    {
        path: '/',
        component: LandingComponent
    },
    {
        path: '/home',
        component: HomeComponent,
        beforeEnter: (_, __, next) => {
            try {
                if (store.state.user.loggedInStatus) {
                    next();
                } else {
                    next('/');
                }
            } catch (err) {
                console.error("Error in beforeEnter:", err);
            }
        }
        
    },
    {
        path: '/about-me',
        component: AboutMeComponent,
        beforeEnter: (_, __, next) => {
            try {
                if (store.state.user.loggedInStatus) {
                    next();
                } else {
                    next('/');
                }
            } catch (err) {
                console.error("Error in beforeEnter:", err);
            }
        }
        
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
