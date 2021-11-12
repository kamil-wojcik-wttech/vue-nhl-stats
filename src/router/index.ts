import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/players',
        name: 'Players',
        component: () => import(/* webpackChunkName: "players" */ '../views/Players.vue'),
    },
    {
        path: '/players/:id',
        name: 'PlayerDetails',
        component: () => import(/* webpackChunkName: "players" */ '../views/PlayerDetails.vue'),
    },
    {
        path: '/teams',
        name: 'Teams',
        component: () => import(/* webpackChunkName: "teams" */ '../views/Teams.vue'),
    },
    {
        path: '/teams/:id',
        name: 'Team Details',
        component: () => import(/* webpackChunkName: "players" */ '../views/TeamDetails.vue')
    },
    {
        path: "/:catchAll(.*)",
        component: () => import(/* webpackChunkName: "error" */ '../views/ErrorPage.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;