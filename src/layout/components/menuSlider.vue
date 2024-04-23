<template>
  <a-menu id="layout_menu" :selected-keys="activeMenu" mode="inline" @click="onClcikMenu">
    <template v-for="item in menuRouters[0].children" :key="item.path">
      <template v-if="!item.children">
        <a-menu-item v-if="!item.meta.hideMenu" :key="item.path">
          <template #icon>
            <span :class="['iconfont', item.meta.icon]"></span>
          </template>
          {{ item.meta?.title }}
        </a-menu-item>
      </template>
      <template v-else>
        <a-sub-menu v-if="!item.meta.hideMenu" :key="item.path">
          <template #icon>
            <span :class="['iconfont', item.meta.icon]"></span>
          </template>
          <template #title>{{ item.meta?.title }}</template>
          <template v-for="groupItem in item.children">
            <a-menu-item v-if="!groupItem.meta.hideMenu" :key="groupItem.path">
              {{ groupItem.meta?.title }}
            </a-menu-item>
          </template>
        </a-sub-menu>
      </template>
      <template v-if="!item.meta.hideMenu">
        <Divider class="!my-0" />
      </template>
    </template>
  </a-menu>
</template>

<script setup lang="ts" scoped>
import { computed, ComputedRef } from 'vue';
import initRouters from '@/router';
import { useRoute, useRouter } from 'vue-router';
import { Divider } from 'ant-design-vue';
interface IMeta {
  title: string;
  icon: string;
  hideMenu?: boolean;
}
interface IRouter {
  children: IRouter[];
  path: string;
  name: string;
  meta: IMeta;
}

const routes = initRouters.options?.routes;
const menuRouters = routes.filter((item) => {
  return item.name === 'dashboard';
}) as IRouter[];

const route = useRoute();
const router = useRouter();
// const onSelectMenu = ({ key }: { key: string }) => {
//   router.push(key);
// };

// 控制左侧菜单栏选中状态
const activeMenu: ComputedRef<any[]> = computed(() => {
  const currentRoute = route.meta.activeMenu || route.fullPath;
  return [currentRoute];
});

const onClcikMenu = ({ key }: any) => {
  router.push(key);
};
</script>

<style lang="less">
// 展开样式
.layout_sider:not(.ant-layout-sider-collapsed) {
  #layout_menu {
    background-color: @sl-white;
    margin-top: 18px;
    border-right: none;
    .ant-menu-item {
      padding: 0px 8px;
      width: 224px;
      height: 40px;
      border-radius: @sl-border-radius;
      margin: 0px 8px;
      &:hover {
        color: @primary-color;
      }
    }
    .ant-menu-item-icon {
      font-size: 16px;
    }
    .ant-menu-item.ant-menu-item-selected {
      background: @primary-color;
      color: @sl-font-color-white;
      &::after {
        display: none;
      }
    }
    .ant-menu-submenu {
      width: 224px;
      border-radius: @sl-border-radius;
      margin: 0px 8px;
      .ant-menu-submenu-title:hover {
        color: @primary-color;
      }
      .ant-menu-item {
        margin: 0px 0px;
      }
      &.ant-menu-submenu-selected {
        color: @primary-color;
      }
    }
  }
}

// 收起样式
.layout_sider.ant-layout-sider-collapsed {
}
</style>
