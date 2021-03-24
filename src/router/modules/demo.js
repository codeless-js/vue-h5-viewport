import Layout from '@/layout/index.vue';

const demoRouter = {
  path: '/demo',
  component: Layout,
  redirect: '/demo/list',
  name: 'demo',
  meta: { title: '示例列表' },
  hidden: true,
  children: [
    {
      path: 'list',
      component: () => import('@/pages/demo-list/index.vue'),
      name: 'demo-list',
      meta: { title: '示例列表', breadcrumb: false },
    },
    {
      path: 'edit/:id',
      component: () => import('@/pages/demo-edit/index.vue'),
      name: 'demo-edit',
      meta: { title: '示例编辑', activeMenu: 'demo-list', roles: ['admin', 'editor'] },
      hidden: true,
    },
  ],
};
export default demoRouter;
