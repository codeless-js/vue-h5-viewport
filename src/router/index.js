import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/layout/index.vue';

Vue.use(Router);

export const constantRoutes = [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/pages/login/index.vue'),
    hidden: true,
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        name: 'dashboard',
        path: 'dashboard',
        component: () => import('@/pages/dashboard/index.vue'),
        meta: { title: '首页' },
      },
    ],
  },
];
export const asyncRoutes = [];
export default new Router({
  routes: constantRoutes,
});
/**
 * TODO重置路由
 */
export function resetRouter() {}
