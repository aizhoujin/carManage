<template>
  <a-layout-header class="layout_header">
    <div class="header_logo">
      <img class="logo" src="@/assets/images/system/login/logo.png" @click="goHome" />
    </div>
    <navMenu v-if="props.type === 'nav'" />
    <dashboardMenu v-else />
    <userInfo />
  </a-layout-header>
</template>
<script setup lang="ts">
import navMenu from './navMenu.vue';
import dashboardMenu from './dashboardMenu.vue';
import userInfo from './userInfo.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

interface IProps {
  type?: string;
}
const props = defineProps<IProps>();

const goHome = () => {
  console.log('123');
  router.push('/');
};
</script>
<style lang="less" scoped>
.layout_header {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 64px;
  background-color: @sl-white;
  padding: 0px;
  box-shadow: @box-shadow-base;
  box-shadow: 0px 3px 6px 0px rgba(164, 164, 164, 0.16);
  z-index: 2;
  position: relative;
  .header_logo {
    display: flex;
    align-items: center;
    height: 100%;
    margin-left: 16px;
    .logo {
      display: inline-block;
      width: 150px;
      margin-right: 48px;
    }
  }
}
</style>
