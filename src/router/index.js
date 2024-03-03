import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

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
    component: () => import('../views/UserboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/UserProductsView.vue'),
      },
      {
        path: 'product/:productID',
        component: () => import('../views/UserProductView.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/UserCartView.vue'),
      },
      {
        path: 'checkout/:orderId',
        component: () => import('../views/UserCheckoutView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
