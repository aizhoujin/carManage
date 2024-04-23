<template>
  <a-config-provider :locale="locale">
    <a-spin
      :spinning="useCommonStore.loading"
      wrapper-class-name="full_spin"
      style="height: 100vh; max-height: unset"
    >
      <!-- 请勿删除这个空的按钮 -->
      <a-button v-if="false" type="primary"></a-button>
      <a-layout id="app">
        <router-view v-if="chatShow" @scroll="moseWheel" />
        <router-view v-else />
      </a-layout>
    </a-spin>
    <LoginElsewhere />
  </a-config-provider>
</template>

<script setup lang="ts">
import locale from 'ant-design-vue/lib/locale-provider/zh_CN';
import { onMounted, nextTick, ref, onUnmounted } from 'vue';
import { useCommon } from '@/store/common';
import { useSocket } from '@/store/system/socket';
import LoginElsewhere from './views/system/login/LoginElsewhere.vue';
import { useRouter } from 'vue-router';
import { useUserStore } from './store/system/user';
const router = useRouter();
const useCommonStore = useCommon();
const useSocketStore = useSocket();
const accessToken = localStorage.getItem('accessToken');
const toTopDispear = ref<boolean>(false);
const chatShow = ref<boolean>(false);
const moseWheel = () => {
  let osTop = document.documentElement.scrollTop;
  nextTick(() => {
    if (osTop) {
      toTopDispear.value = osTop <= 500 ? false : true;
    }
  });
};

router.afterEach((to: any) => {
  if (
    to.path.includes('dashboard') ||
    to.path.indexOf('/government') == 0 ||
    to.path == '/login' ||
    to.path == '/register'
  ) {
    chatShow.value = false;
  } else {
    chatShow.value = true;
    window.addEventListener('scroll', moseWheel, true);
  }
});
onMounted(() => {
  if (accessToken) {
    useUserStore().handleGetAuthorityInfo();
    useSocketStore.openSocket();
  }
});
onUnmounted(() => {
  window.removeEventListener('scroll', moseWheel, true);
});
</script>

<style lang="less">
#app {
  font-family: Source Han Sans CN, Source Han Sans CN-Medium;
}
body {
  margin: 0;
  padding: 0;
  background-color: @sl-page-background-color;
}
* {
  box-sizing: border-box;
}
*::before,
*::after {
  box-sizing: border-box;
}
</style>
