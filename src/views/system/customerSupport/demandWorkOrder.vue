<template>
  <div id="app-root" class="box">
    <LayoutHeader type="nav" />
    <layoutTitle :title="title" :img="img" />
    <div class="bg">
      <div class="suggestions">
        <table></table>
        <div class="goLogin">
          <svg class="icon" aria-hidden="true"><use xlink:href="#icon-gantanhao1" /></svg>
          <span>温馨提示：如有疑问，您也可以通过电话或在线客服进行咨询。</span>
          <!-- <span @click="handleOpenChat">在线客服 &nbsp;&nbsp;→</span> -->
        </div>
        <div class="formBox">
          <a-form ref="formRef" :model="formState">
            <a-form-item
              class="title"
              name="title"
              label="您的称呼:"
              :rules="[{ required: true, validator: checkTitle, trigger: 'blur' }]"
            >
              <a-input
                v-model:value="formState.title"
                :maxlength="16"
                placeholder="请输入您的称呼"
              />
            </a-form-item>
            <a-form-item
              class="title"
              name="phone"
              label="联系电话:"
              :rules="[{ required: true, validator: checkPhone, trigger: 'blur' }]"
            >
              <a-input
                v-model:value="formState.phone"
                oninput="value=value.replace(/[^\d]/g,'')"
                :maxlength="11"
                placeholder="请输入联系电话"
                :disabled="phoneDisabeld"
              />
            </a-form-item>
            <a-form-item
              class="title"
              name="company"
              label="公司名称:"
              :rules="[{ required: true, validator: checkCompany, trigger: 'blur' }]"
            >
              <a-input
                v-model:value="formState.company"
                :maxlength="50"
                placeholder="请输入公司名称"
              />
            </a-form-item>
            <a-form-item class="title industry" name="industry" label="所属行业:">
              <a-select
                v-model:value="formState.industry"
                :get-popup-container="(triggerNode) => triggerNode.parentNode"
                :max-tag-count="2"
                :max-tag-text-length="5"
                show-search
                placeholder="请选择行业 (最多选择5个)"
                style="width: 320px"
                :options="industryOptions"
                mode="multiple"
                :show-arrow="true"
                @change="productChange"
              />
            </a-form-item>
            <a-form-item
              class="product"
              name="product"
              label="意向产品:"
              :rules="[{ required: true, validator: checkProduct, trigger: 'blur' }]"
            >
              <a-select
                v-model:value="formState.product"
                :options="productOptions"
                mode="multiple"
                :get-popup-container="(triggerNode) => triggerNode.parentNode"
                style="width: 320px"
                placeholder="请选择产品 (最多选择5个)"
                :show-arrow="true"
                :max-tag-count="2"
                :max-tag-text-length="5"
                @change="productChange"
              />
            </a-form-item>
            <a-form-item label="咨询内容:" name="content" class="industry">
              <a-textarea
                v-model:value="formState.content"
                placeholder="请对咨询内容进行描述："
                :auto-size="{ minRows: 8, maxRows: 12 }"
                show-count
                :maxlength="200"
              />
            </a-form-item>
          </a-form>
          <a-button class="submit" type="primary" @click="submitInfo">提交</a-button>
          <span class="submitSpan">我们会在1-2个工作日内联系您</span>
        </div>
        <table></table>
      </div>
    </div>
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
import LayoutFooter from '../home/components/layoutFooter.vue';
import LayoutHeader from '@/layout/layoutHeader/index.vue';
import layoutTitle from '../home/components/layoutTitle.vue';
// import { useChatStore } from '@/store/system/home';
import { ref, reactive, onMounted, getCurrentInstance } from 'vue';
import { message } from 'ant-design-vue';
import { saveTheJob } from '@/api/system/index';
const proxy: any = getCurrentInstance()?.proxy;
// const chatStore = useChatStore();
const title = '服务咨询';
const img = 'banner';
const phoneDisabeld = ref(false);
const userName = localStorage.getItem('userMobile');
const formState = reactive({
  //建议内容
  content: '',
  //称呼
  title: '',
  //公司
  company: '',
  //电话
  phone: userName ?? '',
  //意向产品
  product: [],
  //所属行业
  industry: []
});
//校验--start
const checkTitle = async (rule: any, value: any) => {
  let reg = /[\\/:"'<>|*%?\s]/;
  if (value.trim() === '') {
    return Promise.reject('内容不能为空! ');
  } else if (reg.test(value) || value.length > 16) {
    return Promise.reject('限制16个字符，且不能存在空格与特殊字符');
  }
  return Promise.resolve();
};
//手机号码校验
const checkPhone = (_rule: any, value: any) => {
  const reg = /^1\d{10}$/;
  if (value.trim() === '') {
    return Promise.reject('内容不能为空! ');
  } else if (!reg.test(value)) {
    return Promise.reject('手机号码格式不正确! ');
  } else if (value.length > 11) {
    return Promise.reject('输入不符，限制输入11个数字! ');
  }
  return Promise.resolve();
};
const checkCompany = async (_rule: any, value: any) => {
  let reg = /[\\/:"'<>|*%?\s]/;
  if (value.trim() === '') {
    return Promise.reject('内容不能为空! ');
  } else if (reg.test(value) || value.length > 50) {
    return Promise.reject('限制50个字符，且不能存在空格与特殊字符');
  }
  return Promise.resolve();
};
const checkProduct = async (_rule: any, value: any) => {
  if (!value.length) {
    return Promise.reject('内容不能为空! ');
  }
  return Promise.resolve();
};

const formRef = ref();
//校验--end
// const handleOpenChat = () => {
//   chatStore.openMsgVisible();
// };
const productOptions = ref([
  {
    label: '产品与服务',
    options: [
      {
        value: '质量管控方案咨询',
        label: '质量管控方案咨询'
      },
      {
        value: '需求质量专家咨询',
        label: '需求质量专家咨询'
      },
      {
        value: '设计方案专家咨询',
        label: '设计方案专家咨询'
      },
      {
        value: '接口性能测试',
        label: '接口性能测试'
      },
      {
        value: '接口功能测试',
        label: '接口功能测试'
      },
      {
        value: '代码安全测试',
        label: '代码安全测试'
      },
      {
        value: '系统性能画像',
        label: '系统性能画像'
      },
      {
        value: '专业性能测试',
        label: '专业性能测试'
      },
      {
        value: '稳定性测试',
        label: '稳定性测试'
      },
      {
        value: '性能专家服务',
        label: '性能专家服务'
      },
      {
        value: '动态应用安全测试',
        label: '动态应用安全测试'
      },
      {
        value: '移动应用测试',
        label: '移动应用测试'
      },
      {
        value: '测试过程管理',
        label: '测试过程管理'
      },
      {
        value: 'SIT测试服务',
        label: 'SIT测试服务'
      },
      {
        value: '用户验收测试',
        label: '用户验收测试'
      },
      {
        value: '应用动态监测',
        label: '应用动态监测'
      }
    ]
  },
  {
    label: '解决方案',
    options: [
      {
        value: '性能测试服务解决方案',
        label: '性能测试服务解决方案'
      },
      {
        value: '安全测试服务解决方案',
        label: '安全测试服务解决方案'
      },
      {
        value: '制造业解决方案',
        label: '制造业解决方案'
      },
      {
        value: '公共质量服务平台解决方案',
        label: '公共质量服务平台解决方案'
      },
      {
        value: '移动端测试服务解决方案',
        label: '移动端测试服务解决方案'
      },
      {
        value: '自动化测试服务解决方案',
        label: '自动化测试服务解决方案'
      },
      {
        value: '软件质量检测及认证（CMA/CNAS）解决方案',
        label: '软件质量检测及认证（CMA/CNAS）解决方案'
      },
      {
        value: '研发效能提升解决方案',
        label: '研发效能提升解决方案'
      },
      {
        value: '政府行业解决方案',
        label: '政府行业解决方案'
      },
      {
        value: '软件园区解决方案',
        label: '软件园区解决方案'
      },
      {
        value: '公有云行业解决方案',
        label: '公有云行业解决方案'
      },
      {
        value: '医疗行业解决方案',
        label: '医疗行业解决方案'
      },
      {
        value: '校企合作解决方案',
        label: '校企合作解决方案'
      },
      {
        value: '中小互联网企业解决方案',
        label: '中小互联网企业解决方案'
      }
    ]
  }
]);
const productChange = (val: any) => {
  if (val.length > 5) val.pop();
};
const industryOptions = ref([
  {
    value: '政府/非营利机构',
    label: '政府/非营利机构'
  },
  {
    value: '金融',
    label: '金融'
  },
  {
    value: 'IT/互联网/电子/电信',
    label: 'IT/互联网/电子/电信'
  },
  {
    value: '医疗',
    label: '医疗'
  },
  {
    value: '教育培训',
    label: '教育培训'
  },
  {
    value: '机械制造',
    label: '机械制造'
  },
  {
    value: '消费品',
    label: '消费品'
  },
  {
    value: '广告传媒',
    label: '广告传媒'
  },
  {
    value: '汽车',
    label: '汽车'
  },
  {
    value: '房地产',
    label: '房地产'
  },
  {
    value: '服务业',
    label: '服务业'
  },
  {
    value: '能源化工',
    label: '能源化工'
  },
  {
    value: '其他',
    label: '其他'
  }
]);
const isLogin = ref(false);
const serviceInfo = ref();
// 判断是否登录
const isToken = () => {
  let token = localStorage.getItem('accessToken');
  isLogin.value = token ? true : false;
  phoneDisabeld.value = token ? true : false;
};
onMounted(() => {
  //点击工单进入 不执行以下逻辑
  isToken();
  if (localStorage.getItem('consultateInfo')) {
    let consultateInfo = localStorage.getItem('consultateInfo');
    serviceInfo.value = JSON.parse(consultateInfo || '');
    let { product, phone, next, company, name, industry } = serviceInfo.value;
    formState.title = name;
    formState.company = company;
    formState.content = next;
    formState.phone = phone;
    product.map((item: any) => {
      formState.product.push(item);
    });
    industry.map((item: any) => {
      formState.industry.push(item);
    });
  }
});
const submitSuccessLogin = () => {
  isToken();
  const successMsg = isLogin.value
    ? '提交成功，可以在我的咨询进行查看进度，感谢您对我们的支持！'
    : '提交成功，登录后可以在我的咨询进行查看进度，感谢您对我们的支持！';
  message.success(successMsg);
  setTimeout(() => {
    localStorage.removeItem('consultateInfo');
    location.reload();
  }, 2000);
};
const submitInfo = async () => {
  await formRef.value.validateFields();
  let params = {
    companyName: formState.company,
    content: formState.content,
    industryNameList: formState.industry,
    mobile: formState.phone,
    productNameList: formState.product,
    userName: formState.title,
    type: '1'
  };
  const [res] = await proxy.slAwait(saveTheJob(params));
  if (res) {
    submitSuccessLogin();
  }
};
// watch(
//   () => formState.industry,
//   (val) => {
//     if (val.length > 3) {
//       console.log(val);
//       maximumSelection.value = true;
//     } else {
//       maximumSelection.value = false;
//     }
//   },
// );
</script>

<style lang="less" scoped>
.box {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  min-width: 1200px;
  .bg {
    background-image: url('../../../assets//images/system/home/functionBack.jpg');
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    .suggestions {
      width: 1200px;
      margin: 0 auto;
      .goLogin {
        display: flex;
        align-items: center;
        margin-top: 48px;
        height: 54px;
        background: #d4e3fc;
        border-radius: 4px;
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
        svg {
          margin-left: 25px;
          font-size: 16px;
        }
        a {
          margin-left: 10px;
        }
        & > span {
          margin-left: 14px;
          font-size: 14px;
          font-family: Source Han Sans CN, Source Han Sans CN-Regular;
          font-weight: 400;
          text-align: left;
          color: #000000;
        }
        span:nth-child(2) {
          font-size: 14px;
          font-family: Source Han Sans CN, Source Han Sans CN-Regular;
          font-weight: 400;
          text-align: left;
          color: #000000;
        }
        span:nth-child(3) {
          margin-left: 24px;
          font-size: 14px;
          font-family: Source Han Sans CN, Source Han Sans CN-Regular;
          font-weight: 400;
          text-align: left;
          color: @primary-color;
          cursor: pointer;
        }
      }
      .formBox {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 48px 0;
        padding: 40px;
        border-radius: 4px;
        background: linear-gradient(
          23deg,
          #ffffff 12%,
          #ffffff 38%,
          rgba(255, 255, 255, 0.8) 67%,
          #f9fcff 100%
        );
        :deep(.ant-form-item) {
          .ant-form-item-label {
            font-size: 16px;
            font-family: Source Han Sans CN, Source Han Sans CN-Regular;
            font-weight: 400;
            text-align: left;
            color: rgba(0, 0, 0, 0.8);
          }
          .ant-form-item-control {
            margin-left: 16px;
            .ant-form-item-control-input-content > input {
              width: 320px;
              height: 32px;
              margin: 0 12px 8px 0;
              background: #feffff;
              border-radius: 4px;
              font-size: 14px;
              font-weight: 400;
              text-align: left;
              line-height: 22px;
            }
            .ant-input-textarea > .ant-input {
              border-radius: 4px;
            }
            .ant-input-textarea-show-count::after {
              position: absolute;
              display: block;
              bottom: 30px;
              right: 16px;
              color: rgba(0, 0, 0, 0.45);
              text-align: right;
              content: attr(data-count);
            }
          }
          .ant-form-item-extra {
            font-size: 14px;
            font-family: Source Han Sans CN, Source Han Sans CN-Regular;
            font-weight: 400;
            text-align: left;
            color: rgba(0, 0, 0, 0.2);
          }
          .ant-upload .ant-btn {
            width: 88px;
            height: 32px;
            background: #feffff;
            border: 1px solid #dddddd;
            border-radius: 3px;
            span {
              font-size: 14px;
              font-family: PingFang SC, PingFang SC-Regular;
              font-weight: 400;
              text-align: center;
              color: rgba(0, 0, 0, 0.9);
              line-height: 22px;
            }
          }
        }

        :deep(.title) {
          .ant-input-affix-wrapper {
            width: 320px;
            height: 32px;
            border-radius: 4px;
            margin-left: 28px;
            color: rgba(0, 0, 0, 0.2);
            .ant-input-suffix {
              font-size: 14px;
              font-family: Source Han Sans CN, Source Han Sans CN-Regular;
              font-weight: 400;
              text-align: left;
              color: rgba(0, 0, 0, 0.2);
              line-height: 22px;
            }
          }
        }
        :deep(.industry) {
          margin-left: 10px;
        }

        :deep(.product) {
          .ant-form-item-explain-error {
            line-height: 1.5 !important;
          }
          .ant-cascader-picker {
            width: 320px;
          }
          .ant-cascader-input {
            width: 320px;
            height: 32px;
            border-radius: 4px;
          }
        }
        .submit {
          margin: 20px auto 0;
          width: 60px;
          height: 32px;
          background: @primary-color;
          border-radius: 4px;
          font-size: 14px;
          font-family: Source Han Sans CN, Source Han Sans CN-Regular;
          font-weight: 400;
          text-align: center;
          color: #ffffff;
          line-height: 22px;
        }
        .submitSpan {
          display: block;
          margin: 0 auto;
          margin-top: 16px;
          font-size: 14px;
          font-family: Source Han Sans CN, Source Han Sans CN-Regular;
          font-weight: 400;
          text-align: right;
          color: rgba(0, 0, 0, 0.2);
        }
        :deep(.ant-form-item-explain-error) {
          line-height: 0.5 !important;
        }
      }
    }
  }
}
</style>
