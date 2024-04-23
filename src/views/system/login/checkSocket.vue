<template>
  <a-modal
    v-bind="attrs"
    :mask-closable="false"
    :closable="false"
    :keyboard="false"
    class="check_login_modal"
  >
    <template #title>
      <div class="del-title">
        <i class="iconfont icon-gantanhao"></i>
        <div class="del-text">异常登录提醒</div>
      </div>
    </template>
    <p>
      您好，当前账号在{{ newTime }}在其它地方登录过，若继续，对方将被强行退出登录，请确认是否继续。
    </p>
    <p class="redColor">如果这不是你本人的操作，你的密码存在泄露风险，请尽快修改。</p>

    <template #footer>
      <a-button @click="cancelModal">取消</a-button>
      <a-button :loading="loading" type="primary" @click="confirmModal">确认</a-button>
    </template>
    <div class="timer">倒计时：{{ countDown }}S</div>
  </a-modal>
</template>

<script setup lang="ts">
import { ref, useAttrs, onMounted } from 'vue';
const emit = defineEmits(['cancelModal', 'confirmModal']);
const attrs = useAttrs();

const countDown = ref(31);
const newTime = ref();
const loading = ref(false);

const cancelModal = () => {
  emit('cancelModal');
};
const confirmModal = () => {
  loading.value = true;
  emit('confirmModal');
};
defineExpose({
  loading
});
const timer = ref();
onMounted(() => {
  timer.value = setInterval(() => {
    countDown.value -= 1;
    if (countDown.value <= 0) {
      clearInterval(timer.value);
      emit('cancelModal');
    }
  }, 1000);
});
</script>

<style lang="less" scoped>
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
.check_login_modal {
  p:nth-child(2) {
    font-size: 14px;
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
    font-weight: 400;
    text-align: left;
    color: #e13c39;
    line-height: 22px;
  }
  .ant-modal-content {
    position: relative;
    width: 480px;
    height: 247px;
    background: #feffff;
    border-radius: 4px;
    box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.1);
  }

  .ant-modal-header {
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

  .ant-modal-body {
    padding: 0 20px 0 58px;
    letter-spacing: 1px;
  }

  .ant-modal-footer {
    padding-top: 0;
    border-top: none;

    .ant-btn {
      width: 60px;
      height: 32px;
      background: #e7e7e7;
      border-radius: 4px;
      border: none;

      span {
        font-size: 14px;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 400;
        text-align: center;
        color: #000000;
      }
    }

    .ant-btn-primary {
      width: 60px;
      height: 32px;
      background: #0052d9;
      border-radius: 3px;

      span {
        font-size: 14px;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 400;
        text-align: center;
        color: #ffffff;
      }
    }
  }
}
:deep(.ant-modal) {
}
</style>
