<template>
  <div id="app-root" class="box">
    <LayoutHeader type="nav" />
    <LayoutContent
      v-if="num"
      :index-data="indexData"
      title="应用动态监测"
      url="/dashboard/monitoring/monitoringTasks"
    />
    <Productfunction v-if="flag" :product-features="productFeatures" content-title="产品功能" />
    <Productadvantage
      v-if="flags"
      :product-advantage="productAdvantage"
      advantage-title="产品优势"
    />
    <UsageScenario v-if="flagss" :applicable-scene="applicableScene" />
    <SpecifRecommand :recommand-data="recommandData" />
    <ServiceProcess v-if="flagsss" :service-process="serviceProcess" />
    <ContactUs />
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
import LayoutHeader from '@/layout/layoutHeader/index.vue';
import LayoutFooter from '../../home/components/layoutFooter.vue';
import Productfunction from '../publicComponent/ProductFunction3.vue';
import Productadvantage from '../publicComponent/ProductAdvantage3.vue';
import UsageScenario from '../publicComponent/UsageScenario2.vue';
import ServiceProcess from '../publicComponent/ServiceProcess.vue';
import ContactUs from '../../home/components/contactUs.vue';
import LayoutContent from '../publicComponent/LayoutContent.vue';
import SpecifRecommand from '../publicComponent/SpecifRecommand1.vue';
import { ref, reactive, getCurrentInstance } from 'vue';
import { getSecondary, getRecommand } from '@/api/system/index';
const proxy: any = getCurrentInstance()?.proxy;
const indexData = reactive([]);
const productFeatures = reactive([]);
const productAdvantage = reactive([]);
const applicableScene = reactive([]);
const serviceProcess = reactive([]);
const recommandData = reactive([]);
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
      if (item.keyword === 'app_pass_monitor') {
        Object.assign(indexData, item.paperList);
        num.value = true;
      } else if (item.keyword === 'app_pass_monitor_feature') {
        Object.assign(productFeatures, item.paperList);
        flag.value = true;
      } else if (item.keyword === 'app_pass_monitor_advantage') {
        Object.assign(productAdvantage, item.paperList);
        flags.value = true;
      } else if (item.keyword === 'app_pass_monitor_scene') {
        Object.assign(applicableScene, item.paperList);
        flagss.value = true;
      } else if (item.keyword === 'app_pass_monitor_process') {
        Object.assign(serviceProcess, item.paperList);
        flagsss.value = true;
      }
    });
  }
};
const getRecommandData = async () => {
  const [res] = await proxy.slAwait(getRecommand(2));
  if (res) {
    Object.assign(recommandData, res.result);
  }
};
initData('app_pass_monitor_index');
getRecommandData();
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  min-width: 1200px;
}
</style>
