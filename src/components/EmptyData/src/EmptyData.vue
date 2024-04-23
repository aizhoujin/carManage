<template>
  <div>
    <div class="empty-container" :style="{ paddingTop: top, paddingBottom: bottom }">
      <i class="iconfont icon-wushuju"></i>
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: '暂无内容' },
  top: { type: String, default: '60px' },
  bottom: { type: String, default: '60px' }
});
</script>

<style lang="less" scoped>
.empty-container {
  width: 100%;
  color: #b0b0b2c7;
  display: flex;
  flex-direction: column;
  align-items: center;

  i {
    font-size: 50px;
  }
  span {
    font-size: 14px;
  }
}
</style>
