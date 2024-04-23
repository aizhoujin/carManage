<template>
  <div id="cantact" class="contact">
    <!-- 标题字 -->
    <CardTitle title="遇到问题，随时联系我们" />
    <!-- 底部 -->
    <div class="content">
      <div>
        <div>
          <div class="font">
            <span>ETesting</span>
            <span>您身边的数字风险治理专家</span>
          </div>
          <img src="@/assets/images/system/home/contactUs_icon.png" alt="" />
        </div>
        <!-- 留言板 -->
        <div class="message">
          <span>服务咨询</span>
          <a-form ref="formRef" :model="formState" :rules="rules">
            <a-form-item label="您的称呼：" name="name">
              <a-input
                v-model:value="formState.name"
                :maxlength="10"
                placeholder="请输入内容"
                autocomplete="off"
              />
            </a-form-item>
            <a-form-item label="联系电话：" name="phone">
              <a-input
                v-model:value="formState.phone"
                placeholder="请输入内容"
                autocomplete="off"
                :disabled="phoneDisabeld"
              />
            </a-form-item>
            <a-form-item label="公司名称：" name="company">
              <a-input
                v-model:value="formState.company"
                :maxlength="50"
                placeholder="请输入内容"
                autocomplete="off"
              />
            </a-form-item>
            <a-form-item name="industry" label="所属行业:">
              <a-select
                v-model:value="formState.industry"
                :max-tag-text-length="2"
                :max-tag-count="2"
                show-search
                placeholder="请选择行业 (最多选择5个)"
                :options="industryOptions"
                mode="multiple"
                :show-arrow="true"
                :get-popup-container="(trigger:any) => trigger.parentNode"
                @change="productChange"
              ></a-select>
            </a-form-item>
            <a-form-item label="意向产品：" name="product">
              <a-select
                v-model:value="formState.product"
                :options="productOptions"
                mode="multiple"
                placeholder="请选择产品 (最多选择5个)"
                :max-tag-count="2"
                :max-tag-text-length="2"
                :show-arrow="true"
                :get-popup-container="(trigger:any) => trigger.parentNode"
                @change="productChange"
              ></a-select>
            </a-form-item>
            <a-form-item label="咨询内容：" name="next" :maxlength="200">
              <a-textarea
                v-model:value="formState.next"
                placeholder="请输入内容"
                :maxlength="200"
                class="inputText"
                style="resize: none"
                :auto-size="{ minRows: 1, maxRows: 5 }"
              />
            </a-form-item>
            <a-form-item>
              <div class="form-item">
                <a-button type="primary" @click="onSubmit">提交</a-button>
                <span class="fonts">我们会在1~2个工作日内联系您</span>
              </div>
            </a-form-item>
          </a-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { message } from 'ant-design-vue';
import { reactive, ref, onMounted, watch, getCurrentInstance } from 'vue';
import { useRouter } from 'vue-router';
import { saveTheJob } from '@/api/system/index';
import CardTitle from './cardTitle.vue';

const proxy: any = getCurrentInstance()?.proxy;
const router = useRouter();
const formState = reactive<any>({
  name: '',
  phone: '',
  company: '',
  product: [],
  //所属行业
  industry: [],
  next: ''
});
const validateUserName = async (_rule: any, value: any) => {
  let reg = /[\\/:"'<>|*%\s]/;
  if (value.trim() === '') {
    return Promise.reject('内容不能为空! ');
  } else if (reg.test(value) || value.length > 10) {
    return Promise.reject('限制10个字符，且不能存在空格与特殊字符');
  }
  return Promise.resolve();
};
const checkCompany = async (_rule: any, value: any) => {
  let reg = /[\\/:"'<>|*%\s]/;
  if (value.trim() === '') {
    return Promise.reject('内容不能为空! ');
  } else if (reg.test(value) || value.length > 50) {
    return Promise.reject('限制50个字符，且不能存在空格与特殊字符');
  }
  return Promise.resolve();
};
const validateProduct = async (_rule: any, value: any) => {
  if (value.length === 0) {
    return Promise.reject('内容不能为空！');
  }
  return Promise.resolve();
};

const validatePhone = (_rule: any, value: any) => {
  const reg = /^(13|14|15|16|17|18|19)\d{9}$/;
  if (value.trim() === '') {
    return Promise.reject('内容不能为空！');
  } else if (!reg.test(value)) {
    return Promise.reject('手机号码格式不正确');
  }
  return Promise.resolve();
};
const rules = {
  name: [
    {
      required: true,
      validator: validateUserName,
      trigger: 'blur'
    }
  ],
  phone: [
    {
      required: true,
      validator: validatePhone,
      trigger: 'blur'
    }
  ],
  company: [
    {
      required: true,
      validator: checkCompany,
      trigger: 'blur'
    }
  ],
  product: [
    {
      required: true,
      validator: validateProduct,
      trigger: 'blur'
    }
  ]
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
        value: '新版专业性能测试',
        label: '新版专业性能测试'
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
const formRef = ref();
const isLogin = ref(false);
const phoneDisabeld = ref(false);
const isToken = () => {
  // 判断是否登录
  let token = localStorage.getItem('accessToken');
  isLogin.value = token ? true : false;
  if (isLogin.value) {
    let userMobile = localStorage.getItem('userMobile');
    formState.phone = userMobile;
    phoneDisabeld.value = true;
  }
};
const submitSuccessLogin = () => {
  const successMsg = isLogin.value
    ? '提交成功，可以在我的咨询进行查看进度，感谢您对我们的支持！'
    : '提交成功，登录后可以在我的咨询进行查看进度，感谢您对我们的支持！';
  message.success(successMsg);
  setTimeout(() => {
    formRef.value.resetFields();
    isToken();
  }, 2000);
};
const onSubmit = async () => {
  try {
    await formRef.value.validateFields();
    let params = {
      companyName: formState.company,
      content: formState.next,
      industryNameList: formState.industry,
      mobile: formState.phone,
      productNameList: formState.product,
      userName: formState.name,
      type: '1'
    };
    const [res] = await proxy.slAwait(saveTheJob(params));
    if (res) {
      submitSuccessLogin();
    }
  } catch (err) {
    // message.error(err.message);
  }
};
const {
  fullPath,
  meta: { title }
} = router.currentRoute.value;
onMounted(() => {
  isToken();
  if (fullPath.includes('/product')) {
    formState.product = [title];
  }
});
watch(
  () => router.currentRoute.value.params.name,
  (val) => {
    switch (val) {
      case 'performance':
        formState.product = ['性能测试服务解决方案'];
        break;
      case 'manufacture':
        formState.product = ['制造业解决方案'];
        break;
      case 'security':
        formState.product = ['安全测试服务解决方案'];
        break;
      case 'quality':
        formState.product = ['公共质量服务平台解决方案'];
        break;
      case 'mobileTest':
        formState.product = ['移动端测试服务解决方案'];
        break;
      case 'automation':
        formState.product = ['自动化测试服务解决方案'];
        break;
      case 'software':
        formState.product = ['软件质量检测及认证（CMA/CNAS）解决方案'];
        break;
      case 'research':
        formState.product = ['研发效能提升解决方案'];
        break;
      case 'government':
        formState.product = ['政府行业解决方案'];
        break;
      case 'softpark':
        formState.product = ['软件园区解决方案'];
        break;
      case 'publiccloud':
        formState.product = ['公有云行业解决方案'];
        break;
      case 'medicalTreatment':
        formState.product = ['医疗行业解决方案'];
        break;
      case 'schoolEnterprise':
        formState.product = ['校企合作解决方案'];
        break;
      case 'internet':
        formState.product = ['中小互联网企业解决方案'];
        break;
    }
  },
  { immediate: true }
);
</script>

<style lang="less" scoped>
.contact {
  background-image: url('@/assets/images/system/home/contactUs_back.png');
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  padding-top: 3%;
  :deep(.rc-virtual-list-scrollbar-show) {
    display: none;
  }
  .content {
    display: flex;
    margin-top: 6%;
    padding-bottom: 1%;
    justify-content: center;
    & > div {
      width: 1200px;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      margin-bottom: 2%;
      margin-top: 1%;

      & > div:nth-child(1) {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 43%;
        box-sizing: border-box;
        padding-top: 20px;
        padding-bottom: 50px;
        margin-right: 40px;

        img {
          width: 95%;
        }

        .font {
          max-width: 40%;
          margin-bottom: 5%;

          span {
            display: block;
            text-align: left;
            color: @primary-color;
            font-family: Source Han Sans CN, Source Han Sans CN-Medium;
            font-weight: 500;
          }

          & > span:nth-child(1) {
            font-size: 34px;
            margin-bottom: 14px;
          }

          & > span:nth-child(2) {
            font-size: 22px;
            white-space: nowrap;
          }
        }
      }

      .message {
        min-width: 46%;
        max-width: 50%;
        background-image: url('@/assets/images/system/home/contactUs_message.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center center;
        margin-bottom: 5%;
        box-sizing: border-box;
        padding: 5% 8%;
        display: flex;
        flex-direction: column;
        align-items: center;

        & > span {
          display: block;
          font-size: 30px;
          text-align: center;
          font-weight: 500;
          margin-bottom: 4vh;
          font-family: Source Han Sans CN, Source Han Sans CN-Medium;
        }

        .ant-input {
          width: 320px;
          // min-width: 100%;
          // flex: 1;
          height: 40px;
          box-sizing: border-box;
          border-radius: 4px;
        }

        :deep(.ant-form-item-label) {
          text-align: right;
          min-width: 20%;
          margin-right: 1px;
          font-size: 16px;
          font-family: Source Han Sans CN, Source Han Sans CN-Regular;
          font-weight: 400;
          line-height: 40px;
        }

        :deep(.form-item) {
          width: 100%;
          margin-top: 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;

          button {
            width: 210px;
            color: #fff;
            margin-bottom: 10px;
            border-radius: 4px;
            height: 38px;
            border: none;
            font-size: 16px;
            font-family: Source Han Sans CN-Medium;
            font-weight: 500;
          }

          .fonts {
            display: block;
            color: rgba(0, 0, 0, 0.4);
            font-size: 12px;
            font-family: Source Han Sans CN, Source Han Sans CN-Regular;
            font-weight: 500;
            white-space: nowrap;
            text-align: center;
            width: 100%;
          }
        }

        :deep(.ant-form) {
          width: 100%;
        }
        :deep(.ant-select) {
          width: 320px;
        }
        :deep(.ant-select-selector) {
          width: 320px;
          height: 40px;
        }
        :deep(.inputText) {
          box-sizing: border-box;
          padding-top: 8px;
          min-height: 40px !important;
        }

        :deep(.ant-select-selection-placeholder) {
          line-height: 34px;
        }
      }
    }
  }
}
</style>
