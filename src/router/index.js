import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/User/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
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
    component: () => import('../views/User/UserboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/User/UserProductsView.vue'),
      },
      {
        path: 'product/:productID',
        component: () => import('../views/User/UserProductView.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/User/UserCartView.vue'),
      },
      {
        path: 'checkout/:orderId',
        component: () => import('../views/User/UserCheckoutView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
