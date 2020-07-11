import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes';

Vue.use(VueRouter);

export const router = new VueRouter({
  scrollBehavior: () => {
    return { x: 0, y: 0 };
  },
  routes,
  mode: process.env.VUE_ROUTER_MODE,
  base: process.env.VUE_ROUTER_BASE,
});
export default router;
