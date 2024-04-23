import { message } from 'ant-design-vue';
import { slAwait } from '@/utils/util';
import { defineStore } from 'pinia';
import store from '@/store';
import { getUserInfoDetail, getAuthorityInfo, getProjectList } from '@/api/system/login';
import router from '@/router';
import { useSocket } from './socket';
import { nextTick } from 'vue';

// 第一个参数是应用程序中 store 的唯一 id
// import io from "socket.io-client";
export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    accessToken: localStorage.getItem('accessToken'),
    refreshToken: localStorage.getItem('refreshToken'),
    userInfo: {
      avatar: '',
      createTime: '',
      userName: ''
    },

    // 租户信息
    currentTenantId: Number(window.atob(localStorage.getItem('tenantId') || '')),
    tenantOptions: JSON.parse(localStorage.getItem('selectedTenantOptions') as string) || [],

    // 空间信息
    projectOptions: JSON.parse(localStorage.getItem('projectOptions') as string) || [],
    currentRole: localStorage.getItem('role')
  }),
  actions: {
    // 获取用户信息
    async getUserInfoAction(): Promise<any> {
      if (!localStorage.getItem('userId')) return null;
      const [res, err] = await slAwait(getUserInfoDetail());
      if (res) {
        this.userInfo = res.result;
      }
      if (err) {
        message.error(err.message);
      }
    },

    // 退出登录
    async handleLogout(): Promise<any> {
      console.log('退出登录');
      localStorage.clear();
      this.accessToken = '';
      this.refreshToken = '';
      useSocket().disConnect();
      router.replace('/login');
    },

    // 获取当前账号的租户信息
    async handleGetAuthorityInfo(path = ''): Promise<any> {
      const [res, err] = await slAwait(getAuthorityInfo());
      if (res) {
        const { result } = res;
        const currentTenantId = localStorage.getItem('tenantId');
        this.tenantOptions = result.tenantIdList || [];
        localStorage.setItem('selectedTenantOptions', JSON.stringify(result.tenantIdList || []));
        if (!currentTenantId) {
          this.currentTenantId = result.tenantIdList[0].tenantId || 0;
          this.currentRole = result.tenantIdList[0].role || 0;
          localStorage.setItem('tenantId', window.btoa(result.tenantIdList[0].tenantId || 0));
          localStorage.setItem('role', result.tenantIdList[0].role || 0);
        }
        this.handleGetProject(path);
      }
      if (err) {
        message.error(err.message || '获取用户信息失败');
        return;
      }
    },

    // 获取项目空间信息
    async handleGetProject(path = ''): Promise<any> {
      const useCommonStore = useCommon();
      useCommonStore.loading = true;
      const [res, err] = await slAwait(getProjectList());
      setTimeout(() => {
        useCommonStore.loading = false;
      }, 1000);
      if (res) {
        const { result } = res;
        this.projectOptions = result || [];
        localStorage.setItem('projectOptions', JSON.stringify(result || []));
        if (result.length) {
          const currentProjectId = localStorage.getItem('projectId');
          if (!currentProjectId) {
            const selectedProject = [
              result[0].id || undefined,
              result[0].projectList[0].id || undefined
            ];
            localStorage.setItem('selectedProject', JSON.stringify(selectedProject));
            localStorage.setItem('projectId', window.btoa(selectedProject[1] || 0));
          }
        } else {
          if (location.href.indexOf('/dashboard') > -1) {
            router.push('/');
          }
        }
      }
      if (err) {
        message.error(err.message || '获取项目数据失败');
      }
      if (path) location.href = path;
    }
  }
});
export function useChatStore() {
  return useUserStore(store);
}
