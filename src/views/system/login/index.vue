<template>
  <div class="login-box">
    <div class="img">
      <img src="@/assets/images/system/login/logo.png" alt="" @click="goHome" />
    </div>
    <div class="content">
      <div class="login-content">
        <div class="title">
          <div>登录</div>
          <div @click="goRegister">注册</div>
          <img src="@/assets/images/system/login/marker.png" alt="" />
        </div>
        <div class="loginStatus">
          <a-tabs v-model:activeKey="activeKey" @change="handleTabChange">
            <a-tab-pane key="1" tab="密码登录">
              <div class="form">
                <a-form
                  ref="passwordForm"
                  :hide-required-mark="true"
                  :model="passwordState"
                  name="pass_login"
                  class="login-form"
                >
                  <a-form-item
                    name="smsPhone"
                    :rules="[
                      {
                        required: true,
                        validator: checkPhone,
                        trigger: 'blur'
                      }
                    ]"
                  >
                    <a-input
                      v-model:value="passwordState.smsPhone"
                      placeholder="请输入账号/手机号"
                      autocomplete="off"
                      @keyup.enter="getLogin"
                    >
                      <template #prefix>
                        <span class="iconfont icon-geren"></span>
                      </template>
                    </a-input>
                  </a-form-item>
                  <div v-if="errTip.errorText.includes('该用户不存在')" class="phoneError">
                    手机号未注册,请先注册
                  </div>
                  <div v-if="errTip.errorText.includes('手机号格式错误')" class="phoneError">
                    手机号码格式不正确
                  </div>
                  <!-- <div class="phoneError" v-if="errTip.errorText.includes('手机号或密码错误')">{{
                      errTip.errorText
                    }}</div> -->
                  <!-- 密码 -->
                  <a-form-item
                    name="password"
                    :rules="[
                      {
                        required: true,
                        validator: checkPassword,
                        trigger: 'blur'
                      }
                    ]"
                  >
                    <a-input-password
                      v-model:value="passwordState.password"
                      placeholder="请输入登录密码"
                      autocomplete="off"
                      @keyup.enter="getLogin"
                    >
                      <template #prefix>
                        <span class="iconfont icon-mima"></span>
                      </template>
                    </a-input-password>
                  </a-form-item>
                  <div v-if="errTip.errorText.includes('密码输入错误，剩余')" class="pwdError">
                    {{ errTip.errorText }}
                  </div>
                  <div v-if="errTip.errorText.includes('手机号或密码错误')" class="pwdError">
                    {{ errTip.errorText }}
                  </div>
                  <div v-if="errTip.errorText.includes('错误超过5次')" class="pwdError">
                    {{ errTip.errorText }}
                  </div>
                  <a-form-item>
                    <a-form-item name="remember" no-style>
                      <a-checkbox v-model:checked="passwordState.remember">
                        7天内自动登录
                      </a-checkbox>
                    </a-form-item>
                  </a-form-item>
                </a-form>
              </div>
            </a-tab-pane>
            <a-tab-pane key="2" tab="验证码登录" force-render>
              <div class="form">
                <a-form
                  ref="smsForm"
                  :hide-required-mark="true"
                  :model="passwordState"
                  name="normal_login"
                  class="login-form"
                >
                  <a-form-item
                    name="smsPhone"
                    :rules="[
                      {
                        required: true,
                        validator: checkPhone,
                        trigger: 'blur'
                      }
                    ]"
                  >
                    <a-input
                      v-model:value="passwordState.smsPhone"
                      placeholder="请输入账号/手机号"
                      autocomplete="off"
                      @keyup.enter="getLogin"
                    >
                      <template #prefix>
                        <span class="iconfont icon-geren"></span>
                      </template>
                    </a-input>
                  </a-form-item>
                  <div v-if="errTip.errorText.includes('请先注册。')" class="phoneError">
                    {{ errTip.errorText }}
                  </div>
                  <div v-if="errTip.errorText.includes('手机号或密码输入错误')" class="phoneError">
                    手机号或密码输入错误
                  </div>
                  <div v-if="errTip.errorText.includes('手机号格式错误')" class="phoneError">
                    手机号码格式不正确
                  </div>
                  <a-form-item
                    name="code"
                    :rules="[
                      {
                        required: true,
                        validator: checkCode,
                        trigger: 'blur'
                      }
                    ]"
                  >
                    <a-input-group class="input-group">
                      <a-input
                        v-model:value="passwordState.code"
                        placeholder="验证码: ETesting"
                        autocomplete="off"
                        @keyup.enter="getLogin"
                      >
                        <template #prefix><span class="iconfont icon-yanzhengma1"></span></template>
                      </a-input>
                      <a-button
                        class="code-btn"
                        type="primary"
                        :class="{ noMouseEvent: countDown !== 60 }"
                        @click="smsFusn"
                      >
                        {{ `${countDown == 60 ? '获取验证码' : `重新获取(${countDown}S)`}` }}
                      </a-button>
                    </a-input-group>
                  </a-form-item>
                  <div v-if="errTip.errorText.includes('手机号或密码输入错误')" class="pwdError">
                    手机号或密码输入错误
                  </div>
                  <div v-if="errTip.errorText.includes('错误超过5次')" class="pwdError">
                    {{ errTip.errorText }}
                  </div>
                  <a-form-item>
                    <a-form-item name="remember" no-style>
                      <a-checkbox v-model:checked="passwordState.remember">
                        7天内自动登录
                      </a-checkbox>
                    </a-form-item>
                  </a-form-item>
                </a-form>
              </div>
            </a-tab-pane>
          </a-tabs>
        </div>
        <a-button :loading="loading" @click="getLogin">登录</a-button>
      </div>
    </div>
    <CheckSocket
      ref="checkSocketRef"
      v-model:visible="visible"
      @confirm-modal="confirmModal"
      @cancel-modal="cancelModal"
    ></CheckSocket>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref, reactive, onMounted, getCurrentInstance } from 'vue';
import { str2char } from '@/utils/index';
import { checkUser, getSecondLogin, login } from '@/api/system/login';
import CheckSocket from './checkSocket.vue';
import { useUserStore } from '@/store/system/user';
import { useSocket } from '@/store/system/socket';
const useSocketStore = useSocket();

const useStore = useUserStore();

onMounted(() => {
  localStorage.clear();
  useStore.accessToken = '';
  useStore.refreshToken = '';
  useSocketStore.disConnect();
});

const proxy: any = getCurrentInstance()?.proxy;
const goHome = () => {
  router.push('/');
};
//异地登录
let visible = ref(false);
const lastTime = ref();
const checkSocketRef = ref();
const handleTabChange = (tab: any) => {
  if (tab === '1') {
    passwordState.code = '';
  } else {
    passwordState.password = '';
  }
};
//二次登录
const verifyLoginStatus = async () => {
  if (localStorage.getItem('userId')) {
    let params = {
      userId: localStorage.getItem('userId'),
      identity: idValue.value
    };
    const [res, err] = await proxy.slAwait(getSecondLogin(params));
    if (res) {
      const { result } = res;
      localStorage.setItem('userId', result);
      useStore.handleGetAuthorityInfo('/');
      useSocketStore.openSocket();
    }
    if (err) {
      proxy.message.error(err.message);
    }
    checkSocketRef.value.loading = false;
    visible.value = false;
  } else {
    proxy.message.error('登录已失效,请重新登录! ');
    checkSocketRef.value.loading = false;
    visible.value = false;
  }
};
const cancelModal = () => {
  checkSocketRef.value.loading = false;
  visible.value = false;
};
//确认二次登录
const confirmModal = () => {
  verifyLoginStatus();
};
//异地登录
proxy.message.config({
  maxCount: 1
});
const passwordState = reactive({
  smsPhone: '',
  password: '',
  code: '',
  remember: false
});
const errTip = reactive({
  phoneFlag: false,
  passwordFlag: false,
  codeFlag: false,
  errorText: ''
});
//手机号码校验
const checkPhone = (_rule: any, value: any) => {
  errTip.errorText = '';
  const reg = /^1\d{10}$/;
  if (value === '') {
    return Promise.reject('请输入手机号');
  } else if (!reg.test(value)) {
    return Promise.reject('手机号码格式不正确');
  } else {
    return Promise.resolve();
  }
};
// 验证码验证规则
const checkCode = (_rule: any, value: any) => {
  errTip.errorText = '';
  let confirmCode = 'ETesting';
  if (value === '') {
    return Promise.reject('请输入验证码');
  } else if (value.toUpperCase() == confirmCode.toUpperCase()) {
    return Promise.resolve();
  } else {
    return Promise.reject('验证码错误');
  }
};
// 密码验证规则
const checkPassword = (_rule: any, value: any) => {
  errTip.errorText = '';
  if (value === '') {
    return Promise.reject('请输入登录密码');
  } else {
    return Promise.resolve();
  }
};
const router = useRouter();
const activeKey = ref('1');
const goRegister = () => {
  router.push('/register');
};
//倒计时
const countDown = ref(60);
const timer = ref();
const handleCountDown = async () => {
  let params = {
    mobile: passwordState.smsPhone
  };
  let res = await checkUser(params);
  // console.log(res);
  if (res.result === '用户未注册') {
    passwordForm.value.clearValidate(['smsPhone', 'password']);
    smsForm.value.clearValidate(['smsPhone', 'code']);
    errTip.errorText = '手机号未注册,请先注册。';
    return;
  } else if (res.result === '用户已存在') {
    if (timer.value) return;
    countDown.value -= 1;
    timer.value = setInterval(() => {
      countDown.value--;
      if (countDown.value < 1) {
        clearInterval(timer.value);
        countDown.value = 60;
        timer.value = false;
      }
    }, 1000);
  }
};
const passwordForm = ref();
const smsForm = ref();
const smsFusn = () => {
  smsForm.value
    .validateFields(['smsPhone'])
    .then(() => {
      handleCountDown();
    })
    .catch(() => {
      // console.log(err);
    });
};
const loading = ref(false);

//登录
const idValue = ref();
const getLogin = async () => {
  const form = activeKey.value === '1' ? passwordForm.value : smsForm.value;
  try {
    const data = await form.validate();
    if (data) {
      loading.value = true;
      localStorage.removeItem('userId');
      let passwordParams = {
        autoLogin: passwordState.remember,
        mobile: passwordState.smsPhone,
        password: window.btoa(str2char(passwordState.password)),
        mode: 'none'
      };
      let smsParams = {
        autoLogin: passwordState.remember,
        captcha: passwordState.code,
        mobile: passwordState.smsPhone,
        mode: 'none'
      };
      let params = activeKey.value === '1' ? passwordParams : smsParams;
      const [res, err] = await proxy.slAwait(login(params));
      if (res) {
        localStorage.setItem('userMobile', passwordState.smsPhone);
        const { message, result } = res;
        if (message === 'ok') {
          localStorage.setItem('userId', result);
          useStore.handleGetAuthorityInfo('/');
          useSocketStore.openSocket();
        } else {
          const { identity, lastLoginTime, userId } = result;
          idValue.value = identity;
          localStorage.setItem('userId', userId);
          if (lastLoginTime) {
            lastTime.value = lastLoginTime;
            visible.value = true;
            console.log(visible.value);
          }
        }
      }
      if (err) {
        passwordForm.value.clearValidate(['smsPhone', 'password']);
        smsForm.value.clearValidate(['smsPhone', 'code']);
        errTip.errorText = err.message;
        proxy.message.error(err.message);
      }
    }
  } catch {
    (err: any) => {
      passwordForm.value.clearValidate(['smsPhone', 'password', 'code']);
      errTip.errorText = err.message;
    };
  } finally {
    loading.value = false;
  }
};
</script>
<style lang="less" scoped>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}

#components-form-demo-normal-login .login-form-forgot {
  float: right;
}

#components-form-demo-normal-login .login-form-button {
  width: 100%;
}

.login-box {
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/images/system/login/login.png') !important;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  display: flex;
  justify-content: space-between;

  .img {
    display: inline-block;
    height: 40px;
    padding: 32px 0 0 40px;

    img {
      height: 40px;
    }
  }

  .content {
    user-select: none;
    display: flex;
    flex-direction: row-reverse;
    margin-right: 15%;
    align-items: center;
  }

  .login-content {
    // margin: 88px 228px 0 0;
    width: 400px;
    height: 525px;
    background: white;
    border-radius: 12px;
    padding: 26px 30px;

    .title {
      display: flex;
      justify-content: space-between;
      position: relative;

      & div:nth-child(1) {
        cursor: pointer;
        user-select: none;
        width: 48px;
        height: 24px;
        font-size: 24px;
        font-family: Source Han Sans CN, Source Han Sans CN-Medium;
        font-weight: 500;
        text-align: left;
        color: #000000;
        line-height: 32px;
      }

      & div:nth-child(2) {
        cursor: pointer;
        user-select: none;
        margin-right: -6px;
        z-index: 1;
        font-size: 20px;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 400;
        text-align: left;
        color: #ffffff;
        line-height: 32px;
      }

      img {
        position: absolute;
        width: 130px;
        height: 130px;
        border-radius: 0 12px 0 0;
        top: -26px;
        right: -30px;
      }
    }

    .loginStatus {
      margin-top: 39px;
      display: flex;

      p {
        margin-bottom: 0;
        font-size: 16px;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 400;
        text-align: center;
        color: rgba(0, 0, 0, 0.8);
        cursor: pointer;
      }
    }

    :deep(.ant-tabs-ink-bar) {
      height: 4px;
      background: #0b63e1;
      border-radius: 2px;
    }

    :deep(.ant-tabs-nav-wrap) {
      width: 340px;

      .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
        font-family: Source Han Sans CN, Source Han Sans CN-Medium;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.8);
        text-shadow: none;
        text-align: center;
      }

      .ant-tabs-tab-btn {
        font-size: 16px;
        font-weight: 400;
        text-align: center;
        color: rgba(0, 0, 0, 0.8);
      }
    }

    .input-group {
      position: relative;
      height: 48px;

      .ant-input-affix-wrapper {
        position: absolute;
        left: 0;
        top: 0;
        width: calc(100% - 115px);
        z-index: 0;
      }

      .code-btn {
        position: absolute;
        right: 0;
        top: 0;
        z-index: 1;
        width: 128px;
        height: 48px;
        background: #0b63e1;
        border-radius: 8px;
        font-size: 16px;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 400;
        box-shadow: none;
        // text-align: left;
        color: #ffffff;
      }

      .noMouseEvent {
        pointer-events: none;
      }
    }

    :deep(.ant-tabs-top > .ant-tabs-nav::before) {
      border-bottom: none;
    }

    .form {
      margin-top: 20px;
      position: relative;

      .pwdError {
        position: absolute;
        top: 120px;
        color: #ed6f6f;
      }

      .phoneError {
        position: absolute;
        top: 48px;
        color: #ed6f6f;
      }

      :deep(.ant-input) {
        margin-left: 6px;
        color: rgba(0, 0, 0, 0.8);
      }

      .ant-input-affix-wrapper {
        height: 48px;
        background: #ffffff;
        border: 1px solid #dddddd;
        border-radius: 8px;
        box-shadow: none;
      }

      :deep(.ant-form-item-has-error .ant-input-prefix) {
        color: rgba(0, 0, 0, 0.8);
      }

      :deep(.ant-input-prefix) {
        span {
          font-size: 18px;
          font-weight: 500;
          opacity: 0.6;
        }
      }

      :deep(svg) {
        width: 18px;
        height: 18px;
        opacity: 0.4;
        background: rgba(0, 0, 0, 0);
      }

      :deep(.ant-form-item) {
        .ant-checkbox-wrapper {
          margin-top: 24px;
        }
      }
    }

    :deep(.ant-checkbox-inner:hover) {
      border: 1px solid #0b63e1;
      border-radius: 4px;
    }

    :deep(.ant-checkbox-checked::after) {
      border-radius: 4px;
      border: 1px solid #0b63e1;
    }

    :deep(.ant-checkbox-checked .ant-checkbox-inner) {
      background-color: #0b63e1;
    }

    :deep(.ant-checkbox-inner) {
      border: 1px solid #0b63e1;
      border-radius: 4px;
    }

    button {
      width: 100%;
      height: 48px;
      background: #0b63e1;
      border-radius: 8px;
      border: none;
      font-size: 18px;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
      text-align: center;
      color: #ffffff;
      line-height: 22px;

      &:focus {
        outline: none;
      }
    }
  }
}
</style>
