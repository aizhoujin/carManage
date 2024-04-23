<template>
  <div class="footer">
    <div class="layout">
      <div class="content">
        <span>热线电话：{{ infos.tel }}</span>
        <span>主办单位：{{ infos.sponsor }}</span>
        <span>运营单位：{{ infos.service }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  infos: {
    type: Object,
    default: () => ({})
  }
});
const infos = computed(() => props.infos);
</script>

<style lang="less" scoped>
.footer {
  width: 100%;
  height: 94px;
  background: rgba(0, 0, 0, 0.8);
  .layout {
    width: 1200px;
    margin: 0 auto;
    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
      font-family: Source Han Sans CN-Regular;
      font-weight: 400;
      color: #ffffff;
      span {
        display: block;
        line-height: 94px;
      }
    }
  }
}
</style>
