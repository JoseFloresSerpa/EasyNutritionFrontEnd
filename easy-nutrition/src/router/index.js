import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/about.vue')
    }
    ,
    {
        path: '/roles',
        name: 'roles',
        component: () => import('../components/roles/roles')
    },
    {
        path: '/roles/new',
        name: 'add-role',
        component: () => import('../components/roles/add-role')
    },
    {
        path: '/roles/:id',
        name: 'edit-role',
        component: () => import('../components/roles/edit-role')
    },

    {
        path: '/users',
        name: 'users',
        component: () => import('../components/users/users')
    },
    {
        path: '/users/new',
        name: 'add-user',
        component: () => import('../components/users/add-user')
    },
    {
        path: '/users/:id',
        name: 'edit-user',
        component: () => import('../components/users/edit-user')
    },
    {
        path: '/subscriptions',
        name: 'subscriptions',
        component: () => import('../components/subscriptions/subscriptions')
    },
    {
        path: '/subscriptions/new',
        name: 'add-subscription',
        component: () => import('../components/subscriptions/add-subscription')
    },
    {
        path: '/subscriptions/:id',
        name: 'edit-subscription',
        component: () => import('../components/subscriptions/edit-subscription')
    }




]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
