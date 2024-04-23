<template>
  <div id="app-root" class="pro-box">
    <LayoutHeader type="nav" />
    <div class="layout-content" :style="`background-image:url(${documentUrl})`">
      <div class="content-box">
        <div v-if="productIntrodution" class="content-item">
          <span class="title">专业性能测试</span>
          <span class="info">{{ productIntrodution }}</span>
          <div class="btns">
            <a-button
              type="primary"
              :class="`${buyChange ? '' : 'backTransparent'} cursor-pointer`"
              @click="buyClick"
            >
              立即购买
            </a-button>
            <a-button
              type="primary"
              :class="`${useChange ? '' : 'backTransparent'} cursor-pointer`"
              @click="useClick"
            >
              立即使用
            </a-button>
            <!-- <button :style="videoStyle" @click="videoClick">查看视频</button> -->
          </div>
          <!-- <p><span>【优惠活动】</span>体验版首购1元起！</p> -->
        </div>
      </div>
    </div>
    <!-- 组件 -->
    <div class="layout-compinent">
      <Productfunction v-if="flag" :product-features="productFeatures" content-title="产品功能" />
      <Productadvantage v-if="flags" :product-advantage="productAdvantage" />
      <Application v-if="flagss" :applicable-scenarios="applicableScenarios" />
      <SpecifRecommand :recommand-data="recommandData" />
      <ServiceProcess v-if="flagsss" :service-process="serviceProcess" />
      <ContactUs />
    </div>
    <!-- 底部 -->
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive, onMounted, getCurrentInstance } from 'vue';
import Productfunction from '../productServiceSecondary/publicComponent/ProductFunction3.vue';
import ContactUs from '../home/components/contactUs.vue';
import Productadvantage from './components/ProductAdvantage.vue';
import SpecifRecommand from './components/SpecifRecommand.vue';
import LayoutHeader from '@/layout/layoutHeader/index.vue';
import LayoutFooter from '/@/views/system/home/components/layoutFooter.vue';
import Application from './components/ApplicationScene.vue';
import ServiceProcess from '../productServiceSecondary/publicComponent/ServiceProcess.vue';
import { getSecondary, getRecommand } from '@/api/system/index';
import { useRouter } from 'vue-router';
const router = useRouter();
const proxy: any = getCurrentInstance()?.proxy;
const buyChange = ref(true);
const useChange = ref(false);
const videoChange = ref(false);
// const videoStyle = computed(() => {
//   return videoChange.value
//     ? 'background: #0b63e1;border: none;color: #fff;'
//     : 'background: transparent;border: 1px solid #000;color: #000;';
// });
const buyClick = () => {
  (buyChange.value = true), (useChange.value = false), (videoChange.value = false);
  document.querySelector('#recommandId')?.scrollIntoView(true);
};

const useClick = () => {
  (buyChange.value = false), (useChange.value = true), (videoChange.value = false);
  let checkToken = localStorage.getItem('accessToken');
  if (checkToken) {
    window.open('/dashboard/professional/testActivity');
  } else {
    router.push({
      path: '/login',
      query: {
        redirect: '/dashboard/professional/testActivity'
      }
    });
  }
};
// const videoClick = () => {
//   (buyChange.value = false), (useChange.value = false), (videoChange.value = true);
// };
const flag = ref(false);
const flags = ref(false);
const flagss = ref(false);
const flagsss = ref(false);
const documentUrl = ref('');
const productIntrodution = ref('');
const productAdvantage = reactive([]);
const applicableScenarios = reactive([]);
const productFeatures = reactive([]);
const serviceProcess = reactive([]);
const recommandData = reactive([]);
const initData = async (key: string) => {
  const [res] = await proxy.slAwait(getSecondary(key));
  // 首页
  if (res) {
    res.result.forEach((item: any) => {
      if (item.keyword === 'performance_testing_new_feature') {
        Object.assign(productFeatures, item.paperList);
        flag.value = productFeatures ? true : false;
      } else if (item.keyword === 'performance_testing_new_advantage') {
        Object.assign(productAdvantage, item.paperList);
        flags.value = productAdvantage ? true : false;
      } else if (item.keyword === 'performance_testing_new_scene') {
        Object.assign(applicableScenarios, item.paperList);
        flagss.value = applicableScenarios ? true : false;
      } else if (item.keyword === 'performance_testing_new_process') {
        Object.assign(serviceProcess, item.paperList);
        flagsss.value = serviceProcess ? true : false;
      } else if (item.keyword === 'performance_testing_new') {
        documentUrl.value = item.paperList[0]?.pictureUrl;
        productIntrodution.value = item.paperList[0]?.content;
      }
    });
  }
};
const getRecommandData = async () => {
  const [res] = await proxy.slAwait(getRecommand(1));
  if (res) {
    Object.assign(recommandData, res.result);
    recommandData.splice(2, 1);
  }
};
onMounted(() => {
  initData('performance_testing_new_index');
  getRecommandData();
});
</script>

<style scoped lang="less">
.backTransparent {
  background: transparent !important;
  border: 1px solid #000;
  color: #000;
}
:deep(.ant-menu-horizontal) {
  line-height: 40px;
}
:deep(::-webkit-scrollbar-thumb) {
  box-shadow: none !important;
  background-color: transparent !important;
}
.nav-content {
  padding: 30px;
  display: flex;
  background: #fff;
  width: 100vw;
  height: 300px;
  .menu-pic {
    margin-left: 14px;
    border-radius: 8px;
    box-shadow: 0 8px 20px 0 rgb(23 61 172 / 8%);
    padding: 20px 29px 14px 29px;
    width: 215px;
    text-align: center;

    img {
      width: 100%;
      height: 118px;
    }

    .pic-title {
      font-size: 15px;
      font-weight: 700;
      color: @primary-color;
      padding: 29px 0 6px 0;
      font-family: Source Han Sans CN;
      letter-spacing: 0.5px;
      height: 50px;
    }

    .pic-info {
      font-size: 14px;
      font-family: Source Han Sans CN, Source Han Sans CN-Normal;
      color: rgb(120, 125, 139);
      line-height: 21px;
    }
  }

  .menu-content {
    margin: 0 4%;
    display: flex;
    width: calc(100% - 215px);

    .icon {
      font-size: 27px;
      margin-right: 6px;
    }

    .menu-item {
      width: 25%;

      .item-title {
        display: flex;

        span {
          font-size: 18px;
          font-family: Source Han Sans CN-Medium;
          font-weight: 500;
          color: #000000;
        }

        img {
          width: 21px;
          height: 21px;
          margin-top: 2px;
          padding-top: 6px;
        }

        .title-left {
          width: 83%;
        }
      }

      .item-list {
        padding: 20px 10px;

        :deep(.ant-timeline) {
          .ant-timeline-item-head-blue {
            width: 8px;
            height: 8px;
            background: @primary-color;
            border: none;
          }

          .ant-timeline-item {
            padding-bottom: 14px;
          }

          .ant-timeline-item-last {
            padding-bottom: 0;
          }

          .ant-timeline-item-last > .ant-timeline-item-content {
            min-height: 22px;
          }

          .ant-timeline-item-tail {
            border-left: 2px solid @primary-color;
            top: 0;
            left: 3px;
            height: 100%;
          }

          .ant-timeline-item-content {
            font-size: 14px;
            font-family: Source Han Sans CN, Source Han Sans CN-Normal;
            color: #000000;
            letter-spacing: 0.5px;
          }

          .ant-timeline-item-content:hover {
            cursor: pointer;
            color: @primary-color;
          }
        }
      }
    }
  }
}

.pro-box {
  height: 100%;
  width: 100vw;
  overflow-x: hidden;

  .layout-nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 62px;
    background: #fff;
    font-family: Source Han Sans CN-Medium;
    box-shadow: 0 8px 10px 0 rgba(26, 62, 153, 0.1);
    z-index: 9999;
    position: relative;

    .img {
      display: flex;
      justify-content: center;

      img {
        height: 28px;
        margin: 21px 0 0 16px;
      }
    }

    :deep(li.ant-menu-overflow-item.ant-menu-item.ant-menu-item-only-child) {
      padding: 10px 20px;
      font-size: 17px;
      margin: 0 7px;
      font-weight: 500;
    }

    :deep(.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu) {
      padding: 10px 20px;
      margin: 0 10px;
      font-size: 16px;
      font-weight: 500;
    }

    :deep(.ant-menu-submenu-title:hover) {
      color: @primary-color;
    }

    :deep(.ant-menu-item:focus-visible, .ant-menu-submenu-title:focus-visible) {
      box-shadow: none;
    }

    :deep(.ant-menu-horizontal:not(.ant-menu-dark)) {
      .ant-menu-item-selected,
      .ant-menu-submenu:hover,
      .ant-menu-submenu-selected,
      .ant-menu-item-active,
      .ant-menu-submenu-open {
        color: @primary-color;
      }

      .ant-menu-submenu:hover::after,
      .ant-menu-submenu-open::after,
      .ant-menu-submenu-selected::after,
      .ant-menu-item-selected::after,
      .ant-menu-item-active::after {
        border-bottom: 2px solid @primary-color;
        border-radius: 2px;
      }
    }

    .menu {
      width: 57%;

      .ant-menu-overflow-item.ant-menu-submenu.ant-menu-submenu-horizontal {
        padding: 0 30px;
      }
    }

    .header {
      width: 28%;

      .log {
        display: flex;
        justify-content: flex-end;
        height: 100%;
        line-height: 3.6rem;
        text-align: center;
        font-size: 17px;
        font-weight: 500;
        font-family: Source Han Sans CN-Medium;

        .register {
          padding: 4px 44px 0 30px;
          background: @primary-color;
          color: #fff;
        }

        :deep(.ant-badge) {
          padding: 6px 13px 0 17px !important;
          color: rgba(0, 0, 0, 0.8);
          font-size: 17px;
          margin: 20px 0 20px 0;

          .ant-badge-count {
            min-width: 14px;
            height: 14px;
            line-height: 14px;
          }
        }

        .login {
          padding: 6px 24px 0 0;
          color: rgba(0, 0, 0, 0.8);
        }

        .login:hover {
          cursor: pointer;
          color: @primary-color;
        }

        .register:hover {
          cursor: pointer;
        }

        .icon2 {
          padding: 0 20px;
          position: relative;
          margin-right: 10px;
          height: 60px;
          display: flex;
          align-items: center;
          img {
            width: 26px;
            height: 26px;
            margin-right: 10px;
            box-shadow: 0px 10px 20px 0px rgb(23 61 172 / 10%);
            border-radius: 50%;
          }

          .iconfont {
            height: 60px;
            line-height: 60px;
          }
        }
      }
    }
  }

  .layout-content {
    --antd-wave-shadow-color: transparent !important;
    height: calc(100vh - 62px);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;
    .content-box {
      display: flex;
      flex-direction: column;
      justify-content: left;
      height: calc(100vh - 92px);
      width: 100%;
      .content-item {
        margin: 0 auto;
        padding-top: 13%;
        height: 100%;
        width: 1200px;
        overflow-y: auto;
        .title {
          font-size: 41px;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.8);
          display: block;
        }

        .info {
          padding: 15px 0;
          font-size: 18px;
          color: #000000;
          line-height: 34px;
          font-family: Source Han Sans CN-Normal;
          display: block;
          width: 650px;
          height: 200px;
          overflow-y: auto;
        }

        .btns {
          padding-bottom: 30px;
          :deep(.ant-btn-primary) {
            box-shadow: none;
            border-radius: 18px !important;
            width: 120px;
            font-size: 18px;
            height: 37px;
            letter-spacing: 0.5px;
            margin-right: 10px;
          }
        }

        p {
          font-size: 18px;
          font-family: Source Han Sans CN-Normal;
          font-weight: normal;
          text-align: left;
          position: relative;
          right: 9px;
          span {
            color: @primary-color;
          }
        }
      }

      :deep(.ant-carousel) {
        width: 100%;
      }
    }
  }
}
</style>
