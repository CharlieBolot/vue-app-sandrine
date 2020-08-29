import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Page1 from '../views/page1.vue';
import Page2 from '../views/page2.vue';
import Page3 from '../views/page3.vue';
import SecureComponent from '../views/page.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: {
      name: 'Home',
    },
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/page1',
    name: 'page1',
    component: Page1,
  },
  {
    path: '/page2',
    name: 'page2',
    component: Page2,
  },
  {
    path: '/page3',
    name: 'page3',
    component: Page3,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/page',
    name: 'page',
    component: SecureComponent,
    beforeEnter: (to, from, next) => {
      console.log(router.app.$root.authenticated);
      if (router.app.$root.authenticated) {
        console.log('test');
        // router.app.$emit('authenticated', true);
        next();
      } else {
        next('/home');
      }
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
