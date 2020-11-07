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
        component: () => import('../components/roles')
    },
    {
        path: '/roles/new',
        name: 'add-role',
        component: () => import('../components/add-role')
    },
    {
        path: '/roles/:id',
        name: 'edit-role',
        component: () => import('../components/edit-role')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
