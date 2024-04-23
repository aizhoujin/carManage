<template>
  <div id="app-root" class="box">
    <LayoutHeader type="nav" />
    <LayoutContent v-if="num" :index-data="indexData" title="代码安全测试" />
    <Productfunction v-if="flag" :product-features="productFeatures" />
    <Productadvantage
      v-if="flags"
      :product-advantage="productAdvantage"
      :advantage-title="advantageTitle"
    />
    <UsageScenario v-if="flagss" :applicable-scene="applicableScene" />
    <ServiceProcess v-if="flagsss" :service-process="serviceProcess" />
    <ContactUs />
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
import LayoutHeader from '@/layout/layoutHeader/index.vue';
import LayoutFooter from '../../home/components/layoutFooter.vue';
import LayoutContent from '../publicComponent/LayoutContent.vue';
import Productfunction from '../publicComponent/ProductFunction3.vue';
import Productadvantage from '../publicComponent/ProductAdvantage4.vue';
import UsageScenario from '../publicComponent/UsageScenario2.vue';
import ServiceProcess from '../publicComponent/ServiceProcess.vue';
import ContactUs from '../../home/components/contactUs.vue';
import { ref, reactive, getCurrentInstance } from 'vue';
import { getSecondary } from '@/api/system/index';
const proxy: any = getCurrentInstance()?.proxy;
const advantageTitle = '产品优势';
const indexData = reactive([]);
const productFeatures = reactive([]);
const productAdvantage = reactive([]);
const applicableScene = reactive([]);
const serviceProcess = reactive([]);
const flag = ref();
const flags = ref();
const flagss = ref();
const flagsss = ref();
const num = ref();
const initData = async (key: string) => {
  const [res] = await proxy.slAwait(getSecondary(key));
  if (res) {
    // 首页
    res.result.forEach((item: any) => {
      if (item.keyword === 'code_safety_testing') {
        Object.assign(indexData, item.paperList);
        num.value = true;
      } else if (item.keyword === 'code_safety_testing_feature') {
        Object.assign(productFeatures, item.paperList);
        flag.value = true;
      } else if (item.keyword === 'code_safety_testing_advantage') {
        Object.assign(productAdvantage, item.paperList);
        flags.value = true;
      } else if (item.keyword === 'code_safety_testing_scene') {
        Object.assign(applicableScene, item.paperList);
        flagss.value = true;
      } else if (item.keyword === 'code_safety_testing_process') {
        Object.assign(serviceProcess, item.paperList);
        flagsss.value = true;
      }
    });
  }
};
initData('code_safety_testing_index');
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  min-width: 1200px;
  .layout-content {
    height: 90%;
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

      .content-item {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 31%;
        left: 18%;
        min-width: 430px;
        .title {
          font-size: 41px;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.8);
        }

        .info {
          font-size: 18px;
          color: #000000;
          line-height: 32px;
          padding: 15px 0;
          font-family: Source Han Sans CN-Normal;
          height: 200px;
        }

        .btn {
          padding: 0 0 7vh 0;

          :deep(.ant-btn-primary) {
            border: none;
            box-shadow: none;
            color: #fff;
            border-radius: 22px;
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
