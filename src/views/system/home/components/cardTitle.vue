<template>
  <!-- 标题字 -->
  <div class="flex-center">
    <div class="title">
      <div class="left-line"></div>
      <div class="right-line"></div>
      <span>{{ props.title }}</span>
      <div class="right-line"></div>
      <div class="left-line"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  title: string;
}
const props = defineProps<IProps>();
</script>

<style lang="less" scoped>
.flex-center {
  display: flex;
  justify-content: center;

  .title {
    height: 100px;
    display: flex;
    align-items: flex-end;
    // 标题样式
    .left-line {
      position: relative;
      bottom: 8px;
      width: 6px;
      background: #69c9b2;
      height: 18px;
    }

    .right-line {
      position: relative;
      bottom: 8px;
      width: 6px;
      background: @primary-color;
      height: 32px;
    }
    span {
      text-align: center;
      display: block;
      font-size: 36px;
      white-space: nowrap;
      padding: 0;
      font-weight: 500;
    }

    div:nth-child(1) {
      margin-right: 4px;
    }

    div:nth-child(2) {
      margin-right: 16px;
    }

    div:nth-child(4) {
      margin-left: 16px;
    }

    div:nth-child(5) {
      margin-left: 4px;
    }
  }
}
</style>
