export default [
  // {
  //   path: '/handle',
  //   name: 'handle',
  //   component: handle
  // },
  {
    path: '/handle',
    name: 'handle',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/handleInfo/index.vue')
  }]
