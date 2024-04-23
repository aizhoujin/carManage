<template>
  <a-layout>
    <layoutHeader />
    <a-layout>
      <a-layout-sider theme="light" width="240" :collapsed-width="64" class="layout_sider">
        <menuSlider />
      </a-layout-sider>
      <a-layout-content>
        <keepTabs :is-close="isClose" @refresh="handleRefresh"></keepTabs>
        <a-layout-content class="layout_content">
          <Transition>
            <router-view v-slot="{ Component, route }">
              <keep-alive :include="getCachesList" :max="5">
                <component
                  :is="Component"
                  v-if="!refreshFlag"
                  :ref="(el: any) => setRef(el)"
                  :key="route.fullPath"
                  class="layout_view"
                />
              </keep-alive>
            </router-view>
          </Transition>
        </a-layout-content>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from 'vue';
import layoutHeader from './layoutHeader/index.vue';
import menuSlider from './components/menuSlider.vue';
import keepTabs from './components/keepTabs.vue';
import { useKeepTab } from '@/store/layout/keepTab';
import { useCommon } from '@/store/common';
const useCommonStore = useCommon();

const keepTabStore = useKeepTab();
const routeRef = ref();
const setRef = (el: any) => {
  if (el) routeRef.value = el;
};

/* 当前缓存列表，不包含要刷新的组件 */
const getCachesList = computed(() => {
  return keepTabStore.tabList.map((i) => i.name).filter((i) => i !== refreshName.value);
});

/* 关闭表示 */
const isClose = computed(() => routeRef.value && routeRef.value.isClose);

/* 刷新标签，通过v-if让组件重新加载 */
const refreshFlag = ref<boolean>(false);

/* 要刷新的组件名字 */
const refreshName = ref('');
const handleRefresh = () => {
  // 有名字的时候会被清除keep-alive
  refreshName.value = keepTabStore.activeTab.name;
  // 路由组件v-if销毁
  refreshFlag.value = true;
  useCommonStore.loading = true;
  setTimeout(() => {
    // 展示组件
    refreshFlag.value = false;
    // 清除刷新name，此时keep-alive对当前路由组件生效
    refreshName.value = '';
    useCommonStore.loading = false;
  }, 500); // 350ms的延迟，否则销毁不干净（最低设置300）
};
</script>

<style lang="less" scoped>
::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.layout_sider {
  width: 240px;
  height: calc(100vh - 64px);
  background-color: @sl-white;
  overflow-y: auto;
}

.layout_content {
  width: calc(100% - 48px);
  height: calc(100vh - 64px - 48px - 42px);
  margin: 24px;
  background-color: @sl-white;
  border-radius: @sl-border-radius;

  .layout_view {
    height: 100%;
    min-width: 1200px;
    overflow: auto;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
