import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/dashboard',
    component: () => import('../views/Backend/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/Backend/ProductsView.vue'),
      },
      {
        path: 'order',
        component: () => import('../views/Backend/OrderView.vue'),
      },
      {
        path: 'coupon',
        component: () => import('../views/Backend/CouponView.vue'),
      },
    ],
  },
  {
    path: '/user',
    component: () => import('../views/UserboardView.vue'),
    children: [
      {
        path: 'card',
        component: () => import('../views/UserCardView.vue'),
      },
      {
        path: 'product/:productID',
        component: () => import('../views/UserProductView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
