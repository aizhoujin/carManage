import { createRouter, createWebHistory, RouteRecordRaw, isNavigationFailure } from 'vue-router';
import { useKeepTab } from '@/store/layout/keepTab';
import home from './modules/home';

// 菜单路由
export const menuRouters: Array<RouteRecordRaw> = [];
// 一级主路由
const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/system/login/index.vue'),
    meta: {
      title: 'login',
      hiddenMenu: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/system/register/index.vue'),
    meta: {
      title: 'register',
      hiddenMenu: true
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/layout/index.vue'),
    children: menuRouters,
    redirect: '/dashboard/professional/testActivity',
    meta: {
      title: '首页'
    }
  },
  ...home,
  {
    path: '/:pathMatch(.*)*',
    name: 'ErrorPage',
    component: () => import('@/views/error/index.vue'),
    meta: {
      title: '错误',
      hiddenMenu: true
    }
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});

const whiteList = ['/login', '/register'];
router.beforeEach((to: any, from: any) => {
  const token = localStorage.getItem('accessToken');
  const projectId = localStorage.getItem('projectId');
  // 针对去控制台的守卫
  if (to.matched[0]?.name === 'dashboard') {
    if (token && projectId) {
      return true;
    } else {
      return from.matched[0]?.name === 'dashboard' || from.path === '/' ? { name: 'home' } : from;
    }
  }
  // 针对去登录注册页的首页
  if (whiteList.includes(to.path)) {
    if (token) {
      return { name: 'home' };
    }
    return true;
  }
  return true;
});

router.afterEach((to: any, _from: any, failure: any) => {
  // 任何类型的导航失败
  if (isNavigationFailure(failure)) {
    console.log('路由跳转失败:', failure, to);
  } else {
    document.title = (to.meta.title ? to.meta.title + ' - ' : '') + `ETesting`;
    if (to.matched[0]?.name !== 'dashboard') return;
    const useStore = useKeepTab();
    useStore.pushTabList({
      path: to.path,
      name: to.name,
      title: to.meta.title,
      fullPath: to.fullPath,
      meta: to.meta
    });
  }
});

export default router;
