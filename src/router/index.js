import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue' // added
import Router from 'vue-router'
import home from '@/components/home'
import about from '@/components/about'
import works from '@/components/works'
import contact from '@/components/contact'
import 'bootstrap/dist/css/bootstrap.css' // added
import 'bootstrap-vue/dist/bootstrap-vue.css' // added

Vue.use(Router)
Vue.use(BootstrapVue) // added

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/works',
      name: 'works',
      component: works
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
})
