<template>
  <div class="dashboard_menu">
    <div class="dashboard_menu_li">
      <a-cascader
        v-model:value="selectedProject"
        :allow-clear="false"
        :options="projectList"
        :field-names="fieldNames"
        placeholder="选择空间"
        @change="handleChangeProject"
      />
    </div>
    <div class="dashboard_menu_li dashboard_tab">
      <text>控制台</text>
      <i class="iconfont icon-kongzhitai1"></i>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';
import { useUserStore } from '@/store/system/user';

const userStore = useUserStore();

const fieldNames = ref({ label: 'name', value: 'id', children: 'projectList' });
const selectedProject = ref<any[]>();
const projectList = computed(() => {
  return userStore.projectOptions || JSON.parse(localStorage.getItem('projectOptions') || '[]');
});

// 获取空间列表数据
const getProjectOptions = () => {
  selectedProject.value = JSON.parse(localStorage.getItem('selectedProject') || '[]');
};

// 处理选择空间
const handleChangeProject = (val: any[]) => {
  selectedProject.value = val;
  localStorage.setItem('projectId', window.btoa(val[1] || 0));
  localStorage.setItem('selectedProject', JSON.stringify(selectedProject.value || []));
  localStorage.setItem('projectId', window.btoa(selectedProject.value?.[1] || 0));
  // 暂且处理一下报错问题 后续优化
  location.href = '/dashboard';
};

onMounted(() => {
  getProjectOptions();
});
</script>

<style lang="less">
.dashboard_menu {
  margin-left: auto;
  display: flex;
  .dashboard_menu_li {
    margin-left: 32px;
    cursor: pointer;
  }
  .dashboard_tab {
    height: 64px;
    width: 72px;
    line-height: 64px;
    font-size: 16px;
    color: @primary-color;
    border-bottom: 4px solid @primary-color;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
}
</style>
