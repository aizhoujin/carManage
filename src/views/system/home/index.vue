<template>
  <div id="app-root" class="box">
    <LayoutHeader type="nav" />
    123
  </div>
</template>
<script setup lang="ts">
import LayoutHeader from '@/layout/layoutHeader/index.vue';
</script>
<style scoped lang="less">
.box {
  height: 100%;
  width: 100%;
  .layout-content {
    height: calc(100vh - 64px);
    :deep(.ant-carousel) {
      .slick-dots li.slick-active button {
        background: @primary-color;
        height: 5px;
        width: 60px;
        border-radius: 3px;
      }

      .slick-dots {
        justify-content: center;
        margin-right: 0;
        margin-left: 0;
        position: absolute;
        bottom: 48px;

        li {
          width: 60px;
          border-radius: 3px;
          background: #fff;
        }
        .slick-active {
          width: 60px;
          border-radius: 3px;
          box-shadow: 0 14px 42px 0 rgba(23, 61, 172, 0.12);
        }

        button {
          width: 60px;
          height: 5px;
        }
      }
    }
    .content-box {
      --antd-wave-shadow-color: transparent !important;
      height: calc(100vh - 62px);
      position: relative;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      background-attachment: fixed;
      overflow-y: auto;
      .content-item {
        display: flex;
        flex-direction: column;
        // width: 1200px;
        max-width: 1200px;
        height: 100%;
        margin: 0 auto;
        padding-top: 13%;
        overflow-y: auto;
        .title {
          font-size: 41px;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.8);
        }

        .info {
          padding: 15px 0;
          font-size: 18px;
          color: #000000;
          line-height: 32px;
          font-family: Source Han Sans CN-Normal;
          height: 200px;
        }

        .btn {
          :deep(.ant-btn-primary) {
            border: none;
            box-shadow: none;
            color: #fff;
            border-radius: 22px !important;
            width: 120px;
            font-size: 18px;
            height: 37px;
            letter-spacing: 0.5px;
          }
        }
      }
    }
  }
}
</style>
