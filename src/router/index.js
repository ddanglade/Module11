import Vue from 'vue';
import Router from 'vue-router';
import AboutPage from '@/views/AboutPage.vue';   
import RandomFacts from '@/views/Random Facts.vue';  
import ContactPage from '@/views/ContactPage.vue';
import NotFound from '@/views/NotFound.vue';        
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: AboutPage },        
    { path: '/about', component: AboutPage },   
    { path: '/random-facts', component: RandomFacts },  
    { path: '/contact', component: ContactPage }, 
    { path: '*', component: NotFound }           
  ]
});
