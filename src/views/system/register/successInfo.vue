<template>
  <div class="back center">
    <div class="container">
      <div class="info">
        <svg class="icon" aria-hidden="true" style="font-size: 80px">
          <use :xlink:href="'#icon-chenggongc-copy'" />
        </svg>
      </div>
      <p>恭喜您，账号已经注册成功</p>
      <div class="second">
        <a-statistic-countdown :title="null" :value="deadline" format="s" @finish="onFinish" />
        <p>s后自动跳转到上一个页面</p>
      </div>
      <a-button type="primary" :loading="loading" @click="routePush">立即使用</a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue';
import { login } from '@/api/system/login';
import { useUserStore } from '@/store/system/user';
import { str2char } from '@/utils/index';
const useStore = useUserStore();

const proxy: any = getCurrentInstance()?.proxy;
const deadline = ref(Date.now() + 4 * 1000);
interface IProps {
  formState: any;
}
const props = defineProps<IProps>();
const loading = ref(false);
const handleLogin = async () => {
  loading.value = true;
  let params = {
    autoLogin: false,
    mobile: props.formState.phone,
    password: window.btoa(str2char(props.formState.password)),
    mode: 'none'
  };
  const [res, err] = await proxy.slAwait(login(params));
  loading.value = false;
  if (res) {
    localStorage.setItem('userMobile', params.mobile);
    const { message, result } = res;
    if (message === 'ok') {
      localStorage.setItem('userId', result);
      useStore.handleGetAuthorityInfo('/');
    }
  }
  if (err) {
    proxy.message(err.message);
  }
};

const onFinish = () => {
  handleLogin();
};
const routePush = () => {
  handleLogin();
};
</script>

<style lang="less" scoped>
.back {
  width: 100%;
  height: 100vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  :deep(.ant-statistic-content) {
    font-size: 24px;
    font-family: Source Han Sans CN-Medium;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.4);
  }
  .container {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .info {
      margin-bottom: 40px;
    }
    p {
      font-size: 24px;
      font-family: Source Han Sans CN-Medium;
      font-weight: 500;
      margin-bottom: 24px;
    }
    .second {
      display: flex;
      p {
        font-size: 24px;
        font-family: Source Han Sans CN-Medium;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.4);
        margin-bottom: 24px;
      }
    }

    .ant-btn {
      width: 240px;
      height: 40px;
      font-size: 16px;
      font-family: Source Han Sans CN-Regular;
      font-weight: 400;
      border-radius: 4px;
    }
  }
}
</style>
