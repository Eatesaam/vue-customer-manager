import Vue from 'vue'
import App from './App.vue'
import VueRouter  from 'vue-router'
import vueResource from 'vue-resource'
import Customers from './components/Customers'
import About from './components/About'
import Add from './components/Add'
import CustomerDetail from './components/CustomerDetail'
import Edit from './components/Edit'

Vue.use(vueResource)
Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', name: 'Customer', component: Customers},
    {path: '/about', name: 'About', component: About},
    {path: '/add', name: 'Add', component: Add},
    {path: '/detail/:id', name: 'Detail', component: CustomerDetail},
    {path: '/edit/:id', name: 'Edit', component: Edit},
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


