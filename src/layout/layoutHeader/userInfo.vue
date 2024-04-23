<template>
  <div v-if="accessToken" class="have_login">
    <a-dropdown>
      <div class="userInfo">
        <img :src="(userInfo.avatar as string) || defaultAvatar" class="user_avatar" alt="" />
        <span
          class="iconfont icon-xiangxiajiantou"
          style="font-size: 14px; color: rgba(0, 0, 0, 0.8)"
        />
      </div>
      <template #overlay>
        <a-menu style="width: 150px; text-align: center" @click="handleSelectMenu">
          <template v-if="tenantList.length > 1">
            <a-menu-item key="accountChange">账号切换</a-menu-item>
            <Divider />
          </template>
          <a-menu-item key="account">账号管理</a-menu-item>
          <Divider />
          <a-menu-item key="order">订单查询</a-menu-item>
          <Divider />
          <a-menu-item key="workOrder">我的咨询</a-menu-item>
          <template v-if="role === '1'">
            <Divider />
            <a-menu-item key="team">团队管理</a-menu-item>
            <Divider />
            <a-menu-item key="space">工作空间</a-menu-item>
          </template>
          <Divider />
          <a-menu-item key="logout">退出登录</a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
  <div v-else class="not_login">
    <div class="not_login_li login" @click="handleRouterPush('/login')">登录</div>
    <div class="not_login_li register" @click="handleRouterPush('/register')">注册</div>
  </div>
  <ChangeTenant
    v-model:visible="isShowModal"
    title="账号切换"
    width="596px"
    :footer="null"
    @cancel="hideModal"
    @ok="hideModal"
  />
</template>
<script setup lang="ts">
import { onMounted, computed, getCurrentInstance, ComputedRef } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from '@/store/system/user';
import ChangeTenant from './ChangeTenant.vue';
import { useToggleModal } from '@/hooks/useToggleModal';
import { Divider } from 'ant-design-vue';
import { logout } from '@/api/system/login';
import defaultAvatar from '@/assets/images/system/login/user.png';

const route = useRoute();
const router = useRouter();
const useStore = useUserStore();
const proxy: any = getCurrentInstance()?.proxy;
const role = computed(() => useStore.currentRole);

const { isShowModal, showModal, hideModal } = useToggleModal(false);
const handleRouterPush = (path: string) => {
  router.push(path);
};

const userInfo = computed(() => {
  return useStore.userInfo;
});

const tenantList: ComputedRef<any[]> = computed(() => {
  return useStore.tenantOptions;
});

const accessToken = computed(() => {
  return useUserStore().accessToken;
});

const handleSelectMenu = ({ key }: { key: string }) => {
  if (key === 'logout') {
    handleLogout();
  } else if (key === 'accountChange') {
    showModal();
  } else if (key === 'account') {
    goDashBoard('/dashboard/accountManage/personalInfo');
  } else if (key === 'space') {
    goDashBoard('/dashboard/projectManage/WorkSpace');
  } else if (key === 'order') {
    goDashBoard('/dashboard/orderManagement/Query');
  } else if (key === 'workOrder') {
    goDashBoard('/dashboard/workOrder');
  } else if (key === 'team') {
    goDashBoard('/dashboard/teamManage');
  }
};

const goDashBoard = (path: string) => {
  if (!localStorage.getItem('projectId')) {
    return;
  }
  if (route.matched[0]?.name === 'dashboard') {
    router.push(path);
  } else {
    window.open(path, '_blank');
  }
};

const handleLogout = async () => {
  const userId = localStorage.getItem('userId');
  const [res, err] = await proxy.slAwait(logout({ userId }));
  if (res) {
    useStore.handleLogout();
    proxy.message.success('退出登录成功！');
  }
  if (err) {
    proxy.message.error(err.message || '退出登录失败！');
  }
};

onMounted(() => {
  useStore.getUserInfoAction();
});
</script>
<style lang="less" scoped>
.ant-divider-horizontal {
  margin: 4px;
}
.have_login {
  display: flex;
  padding-right: 24px;
  padding-left: 24px;
  .userInfo {
    display: flex;
    align-items: center;
    .user_avatar {
      margin-top: 0px;
      width: 32px;
      height: 32px;
      margin-right: 12px;
      box-shadow: 0 10px 20px 0 rgba(23, 61, 172, 0.1);
      border-radius: 50%;
      object-fit: contain;
    }
  }
}
.not_login {
  display: flex;
  margin-left: auto;
  .not_login_li {
    width: 94px;
    height: 100%;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    &.register {
      background-color: @primary-color;
      color: @sl-font-color-white;
    }
  }
}
</style>
