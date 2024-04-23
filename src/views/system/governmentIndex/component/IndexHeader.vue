<template>
  <div class="header">
    <div class="layout">
      <div class="content">
        <span>首页</span>
        <span :class="{ focus: props.focus === '通知公告' }">通知公告</span>
        <span>入驻指南</span>
        <span>培训活动</span>
        <span :class="{ focus: props.focus === '行业资讯' }">行业资讯</span>
        <span>质量规范</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  focus: {
    type: String,
    default: ''
  }
});
</script>

<style lang="less" scoped>
:deep(.focus) {
  color: #125ee1;
}

.header {
  height: 68px;
  width: 100%;
  background: #f8f8f8;

  .layout {
    width: 1200px;
    margin: 0 auto;

    .content {
      font-size: 18px;
      font-family: Source Han Sans CN-Medium;
      font-weight: 500;
      text-align: left;
      color: rgba(0, 0, 0, 0.8);

      span {
        line-height: 68px;
        margin-right: 68px;
      }
    }
  }
}
</style>
