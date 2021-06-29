/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
// memanggul boostrap
require('./bootstrap');
// vue ( jangan lupa di impor  cara 1)
// window.Vue = require('vue').default;

// cara 2
import Vue  from 'vue'

// start route
// import root nya di pisah
import router from './routes/index'

// vue js notify
import VueNoty from 'vuejs-noty'
Vue.use(VueNoty)

// css
import 'vuejs-noty/dist/vuejs-noty.css'

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */


//  membuat componen ,                tempat component berdara
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('header-html', require('./components/template/header.vue').default);
Vue.component('header-component',  require('./components/header.vue').default);
Vue.component('footer-component',  require('./components/footer.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// main vue
const app = new Vue({
    // id app
    el: '#app',
    // mencoba ngambil data tari id app
    // data adalah isi dari const app
    data: {
        nama_judul: 'Crud Laravel-8 + Vue js '
    },
    methods: {
        judul: function(){
            // memanggil data / property nya
            return this.nama_judul;
        }
    },
    // memanggil router
    router

});
