<template>
  <div id="app-root" class="box">
    <LayoutHeader type="nav" />
    <LayoutContent v-if="num" :index-data="indexData" title="稳定性测试" />
    <Productfunction v-if="flag" :product-features="productFeatures" content-title="服务内容" />
    <Productadvantage
      v-if="flags"
      :product-advantage="productAdvantage"
      advantage-title="服务优势"
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
import Productfunction from '../publicComponent/ProductFunction2.vue';
import Productadvantage from '../publicComponent/ProductAdvantage3.vue';
import UsageScenario from '../publicComponent/UsageScenario2.vue';
import ServiceProcess from '../publicComponent/ServiceProcess.vue';
import ContactUs from '../../home/components/contactUs.vue';
import { ref, reactive, getCurrentInstance } from 'vue';
import { getSecondary } from '@/api/system/index';
const proxy: any = getCurrentInstance()?.proxy;
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
      if (item.keyword === 'stability_test') {
        Object.assign(indexData, item.paperList);
        num.value = true;
      } else if (item.keyword === 'stability_test_content') {
        Object.assign(productFeatures, item.paperList);
        flag.value = true;
      } else if (item.keyword === 'stability_test_advantage') {
        Object.assign(productAdvantage, item.paperList);
        flags.value = true;
      } else if (item.keyword === 'stability_test_scene') {
        Object.assign(applicableScene, item.paperList);
        flagss.value = true;
      } else if (item.keyword === 'stability_test_process') {
        Object.assign(serviceProcess, item.paperList);
        flagsss.value = true;
      }
    });
  }
};
initData('stability_test_index');
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  min-width: 1200px;
}
</style>
