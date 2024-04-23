export default [
  // 首页
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/system/home/index.vue'),
    meta: {
      title: '首页',
      icon: 'icon-fenqunguanli',
      hiddenMenu: true
    }
  }
];
