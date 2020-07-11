export const routes = [
  {
    path: '*',
    component: () => {
      return import('pages/Index.vue');
    },
  },
];
export default routes;
