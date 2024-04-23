<template>
  <div ref="box" class="modal-box">
    <a-modal v-model:visible="visible" :get-container="() => $refs.box" @cancel="handleCancel">
      <template #title>
        <div class="del-title">
          <i class="iconfont icon-gantanhao"></i>
          <div class="del-text">异常登录提醒</div>
        </div>
      </template>
      <p>您好，当前账号在其它地方登录，您已被强制退出登录。</p>
      <p>如果这不是你本人的操作，你的密码存在泄露风险，请尽快修改。</p>
    </a-modal>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useSocket } from '@/store/system/socket';
const useSocketStore = useSocket();
const visible = computed(() => {
  return useSocketStore.LoginElsewhere;
});
const handleCancel = () => {
  useSocketStore.LoginElsewhere = false;
};
</script>

<style lang="less" scoped>
.modal-box {
  .timer {
    position: absolute;
    top: 30px;
    right: 23px;
    font-size: 14px;
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
    font-weight: 400;
    text-align: left;
    color: rgba(0, 0, 0, 0.9);
    line-height: 24px;
  }

  :deep(.ant-modal) {
    p:nth-child(2) {
      font-size: 14px;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
      text-align: left;
      color: #e13c39;
      line-height: 22px;
    }
  }

  :deep(.ant-modal-content) {
    position: relative;
    width: 480px;
    height: 174px;
    background: #feffff;
    border-radius: 4px;
    box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.1);

    .ant-modal-close-x {
      margin-top: 12px;
    }

    svg {
      color: #000;
    }
  }

  :deep(.ant-modal-header) {
    padding-top: 30px;
    border-bottom: none;
    border-radius: 4px 4px 0 0;

    .ant-modal-title {
      font-size: 16px;
      font-family: Source Han Sans CN, Source Han Sans CN-Medium;
      font-weight: 500;
      text-align: left;
      color: rgba(0, 0, 0, 0.9);
      line-height: 24px;

      .del-title {
        display: flex;

        i {
          padding: 1px 4px;
          font-size: 16px;
          background-color: @primary-color;
          border-radius: 50%;
          color: white;
          width: 24px;
          height: 24px;
        }

        .del-text {
          margin-left: 10px;
          font-size: 16px;
          font-family: Source Han Sans CN, Source Han Sans CN-Medium;
          font-weight: 600;
          text-align: left;
          color: rgba(0, 0, 0, 0.9);
          line-height: 24px;
        }
      }
    }
  }

  :deep(.ant-modal-body) {
    padding: 0 20px 0 58px;
    letter-spacing: 1px;
  }

  :deep(.ant-modal-footer) {
    display: none;
  }
}
</style>
