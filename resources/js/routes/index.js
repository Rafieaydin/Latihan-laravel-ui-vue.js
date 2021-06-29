// cara 2
import Vue  from 'vue'
import VueRouter from 'vue-router'

// mengaktifkan vue router
Vue.use(VueRouter);

// membuat konstata untuk halaman route nya ( cara 1 )
// const Home = require('./pages/home.vue');
// const About = require('./pages/about.vue');
// const NotFound = require('./pages/NotFound.vue');

// cara 2
import Home from '../pages/home.vue'
import About from '../pages/about.vue'
import NotFound from '../pages/NotFound.vue'
import User from '../pages/User.vue'
import detail_user from "../pages/detail_user.vue";
import create_user from "../pages/create_user.vue";
import edit_user from "../pages/edit_user.vue";

// routing (memanggil componenet yang ada di const atas)
const routes = [

    {
        // name route
        name: 'Home',
        path: '/home',
        component: Home
    },
    {
        name: 'About',
        path: '/about',
        component: About
    },
    {
        name: 'user',
        path: '/user',
        component: User,
        // props: true // untuk pasing param // di disable karena tidak di pakai
    },
    {
        name: 'user_create',
        path: '/user/create',
        component: create_user,
    },
      {
        name: 'user_edit',
        path: '/user/edit/:id',
        component: edit_user,
        props: true
    },
    {
        // route baru untuk detail user
        // route memakai id / parameter
        // tanda tanya untuk bolehin url yang parameter namanya kosong
        // example   path: '/user/:id?',
        name: 'user_detail',
        path: '/user/:id',
        component: detail_user,
        props: true // untuk pasing param
    },

    {
        // untuk route yang ga ada akan menampilkan notfound
        path: '*',
        component: NotFound
    }
];

// memanggil vue router
const router = new VueRouter({
    // untuk menghapus tag # di link dari #/home menjadi /home
    linkActiveClass: 'active', // active link
    mode: 'history',
    routes
})

// end route

export default router
