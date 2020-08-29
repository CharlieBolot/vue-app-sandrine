import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
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
