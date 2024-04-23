<template>
  <a-modal v-bind="attrs">
    <div class="tenant_list">
      <div
        v-for="(item, index) in tenantList"
        :key="item.tenantId"
        class="tenant_li"
        :class="{ tenant_li_border: index % 2 == 1 }"
        @click="handleOk(item)"
      >
        <div class="tenant_head">
          <img :src="item.portraitUrl || defaultAvatar" alt="" />
          <img
            v-if="currentTenantId === item.tenantId"
            src="@/assets/images/system/login/select.png"
            alt=""
            class="select_img"
          />
        </div>
        <div class="tenant_name">{{ item.name }}</div>
      </div>
      <div
        v-if="(tenantList || []).length % 2 == 1 && (tenantList || []).length !== 1"
        key="tip_div"
        class="tenant_li"
      ></div>
    </div>
  </a-modal>
</template>

<script setup lang="ts">
import { useAttrs, computed, ComputedRef } from 'vue';
import { useUserStore } from '@/store/system/user';
import defaultAvatar from '@/assets/images/system/login/user.png';

const emit = defineEmits(['ok']);
interface ITenant {
  name: string;
  portraitUrl: string;
  role: number;
  tenantId: number;
}
const useStore = useUserStore();
const attrs = useAttrs();

const currentTenantId: ComputedRef<number> = computed(() => {
  return useStore.currentTenantId as number;
});
const tenantList: ComputedRef<ITenant[]> = computed(() => {
  return useStore.tenantOptions as ITenant[];
});

const handleOk = (row: any) => {
  localStorage.setItem('tenantId', window.btoa(row.tenantId || 0));
  localStorage.setItem('role', row.role || 0);
  useStore.currentTenantId = row.tenantId || 0;
  useStore.currentRole = row.role || 0;
  localStorage.removeItem('selectedProject');
  localStorage.removeItem('projectId');
  localStorage.removeItem('selectedTenantOptions');
  useStore.handleGetProject('/dashboard');
  // 暂且处理一下报错问题 后续优化
  emit('ok');
};
</script>

<style lang="less">
.tenant_list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .tenant_li {
    width: 50%;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 24px;
    .tenant_head {
      width: 76px;
      height: 76px;
      margin-bottom: 8px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
      .select_img {
        width: 18px;
        height: 18px;
        position: absolute;
        right: 0px;
        bottom: 0px;
      }
    }
  }
  .tenant_li_border {
    border-left: 1px solid #eee;
  }
}
</style>
