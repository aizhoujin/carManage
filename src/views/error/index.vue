<template>
  <a-Layout class="layout_card">
    <a-result>
      <template #icon>
        <div class="icon_text">Sorry, 您访问的页面走丢了...</div>
      </template>
      <template #extra>
        <a-button type="primary" @click="goBack">返回首页</a-button>
      </template>
    </a-result>
  </a-Layout>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const goBack = () => {
  router.replace('/');
};
</script>
<style lang="less" scoped>
.icon_text {
  font-size: 16px;
}
</style>
