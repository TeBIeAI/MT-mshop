import Vue from 'vue'
import App from '../../src/App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const MSite = () =>
    import(/* webpackChunkName: "msite" */ '@/views/MSite/MSite.vue')
const Home = () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
const About = () => import(/* webpackChunkName: "about" */ '@/views/About.vue')

const routes = [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '',
                redirect: '/msite'
            },
            {
                path: '/msite',
                component: MSite
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router
