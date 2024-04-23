<template>
  <div v-if="!suInfo" class="login-box">
    <div class="img">
      <img src="@/assets/images/system/login/logo.png" alt="" @click="$router.push('/')" />
    </div>
    <div class="content">
      <div class="login-content">
        <div class="title">
          <div>注册</div>
          <div @click="goLogin">登录</div>
          <img src="@/assets/images/system/login/marker.png" alt="" />
        </div>
        <div class="loginStatus">
          <a-form ref="registerForm" :model="formState" name="basic" autocomplete="off">
            <a-form-item
              class="phone-item"
              name="phone"
              :rules="[
                {
                  required: true,
                  validator: checkPhone,
                  trigger: 'blur'
                }
              ]"
            >
              <a-input
                v-model:value="formState.phone"
                placeholder="请输入手机号"
                addon-before="+86"
              />
            </a-form-item>
            <div v-if="errTip.errorText" class="phoneError">
              {{ errTip.errorText }}
            </div>
            <a-form-item
              name="verificationCode"
              :rules="[
                {
                  required: true,
                  validator: checkCode,
                  trigger: 'blur'
                }
              ]"
            >
              <a-input-group class="input-group">
                <a-input v-model:value="formState.verificationCode" placeholder="验证码: ETesting">
                  <template #prefix><i class="iconfont icon-yanzhengma1"></i></template>
                </a-input>
                <a-button
                  class="code-btn"
                  type="primary"
                  :class="{ noMouseEvent: count !== 60 }"
                  @click="getCode"
                >
                  {{ `${count === 60 ? '获取验证码' : `重新获取( ${count} S )`}` }}
                </a-button>
              </a-input-group>
            </a-form-item>
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
              <a-input-password v-model:value="formState.password" placeholder="请输入登录密码">
                <template #prefix><i class="iconfont icon-suo"></i></template>
              </a-input-password>
            </a-form-item>
            <!-- <a-form-item
              name="remember"
              class="checkbox-item"
              :rules="[
                {
                  required: true,
                  validator: checkRemember
                }
              ]"
            >
              <a-checkbox v-model:checked="formState.remember" @change="changeRemember">
                我已阅读并同意
                <a>服务条款</a>
                、
                <a>隐私政策</a>
              </a-checkbox>
            </a-form-item> -->
          </a-form>
        </div>
        <a-button class="register-btn" :loading="loading" @click="toRegister">注册</a-button>
      </div>
    </div>
  </div>
  <SuccessInfo v-else :form-state="formState" />
</template>

<script setup lang="ts">
import { reactive, ref, unref, getCurrentInstance } from 'vue';
import { useRouter } from 'vue-router';
import { str2char } from '@/utils/index';
import { submitRegisterForm, checkUser } from '@/api/system/login';
import SuccessInfo from './successInfo.vue';

const proxy: any = getCurrentInstance()?.proxy;
const suInfo = ref();
const router = useRouter();
const registerForm = ref();
const loading = ref(false);
function useFormValid(formRef: any) {
  async function validForm() {
    const form = unref(formRef);
    if (!form) return;
    const data = await form.validate();
    return data;
  }
  return { validForm };
}
const { validForm } = useFormValid(registerForm);
const formState = reactive({
  phone: '',
  verificationCode: '',
  password: '',
  remember: false
});
const goLogin = () => {
  router.push('/login');
};
const errTip = reactive({
  errorText: ''
});
//手机号验证规则
const checkPhone = async (_rule: any, value: any) => {
  errTip.errorText = '';
  const reg = /^1\d{10}$/;
  if (value === '') {
    return Promise.reject('请输入手机号');
  } else if (reg.test(value)) {
    //满足校验规则查询手机号是否已经注册
    const [res] = await proxy.slAwait(checkUser({ mobile: value }));
    if (res.result === '用户已存在') return Promise.reject('手机号码已注册，请更换其他手机号码');
    return Promise.resolve();
  } else {
    return Promise.reject('手机号格式错误');
  }
};
// 验证码验证规则
const checkCode = (_rule: any, value: any) => {
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
  const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/;
  if (value === '') {
    return Promise.reject('请输入登录密码');
  } else if (reg.test(value)) {
    return Promise.resolve();
  } else {
    return Promise.reject('请输入8-20个字符，包括数字、字母');
  }
};
const checkRemember = (_rule: any, value: any) => {
  if (value) return Promise.resolve();
  else return Promise.reject('请勾选同意协议');
};
const changeRemember = (e: any) => {
  e.target.checked && registerForm.value.clearValidate(['remember']);
};
//倒计时
const count = ref(60);
const timer = ref();
const countDown = () => {
  if (timer.value) return;
  count.value -= 1;
  timer.value = setInterval(() => {
    count.value--;
    if (count.value < 1) {
      clearInterval(timer.value);
      count.value = 60;
      timer.value = false;
    }
  }, 1000);
};
const getCode = () => {
  registerForm.value
    .validateFields(['phone'])
    .then(() => {
      // 手机号通过校验
      return countDown();
    })
    .catch((err: any) => {
      console.log(err);
    });
};
// const toRegister = async () => {
//   try {
//     loading.value = true;
//     let formInfo = await validForm();
//     if (formInfo) {
//       let params = {
//         captcha: formState.verificationCode,
//         mobile: formState.phone,
//         password: window.btoa(str2char(formState.password)),
//         username: formState.phone
//       };
//       let data = await submitRegisterForm(params);
//       if (data && data.code === 200) {
//         suInfo.value = 1;
//         localStorage.setItem('userMobile', formState.phone);
//       }
//     }
//   } catch (err: any) {
//     console.log(err);
//     errTip.errorText = err.message;
//   } finally {
//     loading.value = false;
//   }
// };
const toRegister = async () => {
  loading.value = true;
  let formInfo = await validForm();
  if (formInfo) {
    let params = {
      captcha: formState.verificationCode,
      mobile: formState.phone,
      password: window.btoa(str2char(formState.password)),
      username: formState.phone
    };
    const [res, err] = await proxy.slAwait(submitRegisterForm(params));
    if (res) {
      suInfo.value = 1;
      localStorage.setItem('userMobile', formState.phone);
    }
    if (err) {
      errTip.errorText = err.message;
    }
  }
  loading.value = false;
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

.noMouseEvent {
  pointer-events: none;
}

.login-box {
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/images/system/login/register.png') !important;
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
    // cursor: pointer;
    // user-select: none;
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
        // cursor: pointer;
        // user-select: none;
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
      margin-top: 50px;
      display: flex;
      position: relative;

      :deep(.ant-form) {
        position: reactive;
        width: 100%;
        .ant-form-item-with-help.checkbox-item {
          margin-bottom: 24px;
        }

        // .ant-form-item:last-child {
        //   height: 48px;
        //   display: flex;
        //   align-items: flex-end;

        //   .ant-form-item-control {
        //     height: 48px;

        //     .ant-form-item-control-input {
        //       height: 48px !important;
        //       min-height: 48px !important;
        //       align-items: flex-end;

        //       .ant-form-item-control-input-content {
        //         // height: 48px;
        //       }
        //     }
        //   }
        // }

        .ant-input-group-addon {
          border-radius: 8px;
          border: 1px solid #dddddd;
          width: 80px;
          z-index: 1;
          color: rgba(0, 0, 0, 0.8);
          font-size: 16px;
          background-color: #fff;
        }

        .ant-input-prefix {
          padding-right: 6px;
        }

        .ant-input-affix-wrapper {
          height: 48px;
          background: #ffffff;
          border: 1px solid #dddddd;
          box-shadow: none;
          color: rgba(0, 0, 0, 0.8);
          border-radius: 8px;
        }

        .phone-item {
          .ant-input {
            height: 48px;
            background: #ffffff;
            border: 1px solid #dddddd;
            z-index: 0;
            box-shadow: none;
            color: rgba(0, 0, 0, 0.8);
            border-left: none !important;
            border-radius: 0 8px 8px 0;
            left: -7px;
            width: calc(100% + 7px);
            padding-left: 17px;
          }
        }

        .iconfont {
          font-size: 18px;
        }

        .iconfont,
        .anticon[tabindex] {
          color: rgba(0, 0, 0, 0.4);
        }

        .ant-checkbox-wrapper {
          span:nth-child(2) {
            color: rgba(0, 0, 0, 0.8);
            font-size: 14px;
            font-family: Source Han Sans CN, Source Han Sans CN-Regular;
            font-weight: 400;
            text-align: left;

            a {
              color: #0b63e1;
            }
          }
        }

        .ant-checkbox-inner:hover {
          border: 1px solid #0b63e1;
          border-radius: 4px;
        }

        .ant-checkbox-checked::after {
          border-radius: 4px;
          border: 1px solid #0b63e1;
        }

        .ant-checkbox-checked .ant-checkbox-inner {
          background-color: #0b63e1;
        }

        .ant-checkbox-inner {
          border: 1px solid #0b63e1;
          border-radius: 4px;
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
            border-radius: 8px 0 0 8px;
            border-right: 1px solid transparent;
          }

          .code-btn {
            position: absolute;
            right: 0;
            top: 0;
            z-index: 1;
            width: 128px;
            height: 48px;
            // background: #0b63e1;
            border-radius: 8px;
            font-size: 14px;
            font-family: Source Han Sans CN, Source Han Sans CN-Regular;
            font-weight: 400;
            box-shadow: none;
            // text-align: left;
            color: #ffffff;
          }
        }
      }
      .phoneError {
        position: absolute;
        top: 50px;
        color: #ed6f6f;
      }
    }

    .register-btn {
      margin-top: 72px;
      // margin-top: 24px;
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
