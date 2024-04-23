<template>
  <div id="app-root" class="solution-box">
    <layoutHeader type="nav" />
    <!-- 页面头部描述 -->
    <div class="describe-box" :style="`background-image: url(${info.describe.pictureUrl})`">
      <div class="describe-list">
        <div class="desribe-title">{{ info.describe.title }}</div>
        <div class="desribe-graph">{{ info.describe.content }}</div>
        <a-button type="primary" @click="toContactPage">{{ info.describe.btnText }}</a-button>
      </div>
    </div>
    <!-- 方案服务 -->
    <div class="serives-box">
      <cardTitle title="方案服务" />
      <div class="serives-list">
        <div class="serives-img">
          <img :src="info.services.img" alt="" />
        </div>
        <div
          v-for="(item, index) in info.services.graph"
          :key="index"
          class="serives-item"
          :style="item.itemStyle"
        >
          <div class="serives-item-title" :style="item.titleStyle">{{ item.title }}</div>
          <div class="serives-item-graph">{{ item.content }}</div>
        </div>
      </div>
    </div>
    <!-- 方案优势 -->
    <div class="scheme-advantages-box">
      <div class="scheme-advantages">
        <cardTitle title="方案优势" />
        <div class="advantage-list">
          <div
            v-for="(item, index) in info.advantage"
            :key="index"
            :class="'advantage-item advantage-item-bg-' + item.background"
          >
            <div class="advantage-item-title">
              <span class="dot"></span>
              <span>{{ item.title }}</span>
            </div>
            <div class="advantage-item-describe">{{ item.content }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 服务流程 -->
    <div v-if="info.process.flag" class="service-process-box">
      <div class="cantainer">
        <div class="type-center">
          <!-- 标题字 -->
          <cardTitle title="服务流程" />
          <div class="service-process">
            <a-steps label-placement="vertical">
              <a-step v-for="(item, index) in info.process.graph" :key="index" disabled>
                <template #icon>
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-danxuan-yixuan-copy" />
                  </svg>
                </template>
                <template #title>
                  <img :src="item.pictureUrl" alt="" />
                </template>
                <template #subTitle>{{ item.title }}</template>
                <template #description>
                  <div v-for="(ite, _index) in item.content" :key="_index" class="heng">
                    <a-badge status="processing" />
                    <span>{{ ite }}</span>
                  </div>
                </template>
              </a-step>
            </a-steps>
          </div>
        </div>
      </div>
    </div>
    <!-- 客户故事 -->
    <div v-if="info.custom.flag" class="custom-story-box">
      <div class="custom-story">
        <cardTitle title="客户故事" />
        <div class="custom-story-list">
          <div class="custom-story-img">
            <img :src="info.custom?.img" alt="" />
          </div>
          <div class="custom-story-title-list">
            <div
              v-for="(item, index) in info.custom?.contentList"
              :key="index"
              class="custom-story-title"
            >
              <div v-if="index === 0" class="custom-story-line"></div>
              <div class="title">
                <span class="dot"></span>
                {{ item?.title }}
              </div>
              <div class="graph-list">
                <div v-for="(ite, ide) in item?.content" :key="ide" class="graph-item">
                  <div v-if="ite?.endsWith('。') && ite">{{ ite }}</div>
                  <div v-else-if="ite">{{ ite + '；' }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 联系我们 -->
    <div id="cantact" class="contactUs-box">
      <contactUs />
    </div>
    <layoutFooter />
  </div>
</template>
<script setup lang="ts">
import { ref, watch, nextTick, getCurrentInstance } from 'vue';
import { solutionInfo } from './commonData';
import cardTitle from '../home/components/cardTitle.vue';
import contactUs from '../home/components/contactUs.vue';
import LayoutHeader from '@/layout/layoutHeader/index.vue';
import layoutFooter from '../home/components/layoutFooter.vue';
import { useRouter } from 'vue-router';
import { getSecondary } from '@/api/system/index';
const proxy: any = getCurrentInstance()?.proxy;
const router = useRouter();
const info = ref<any>({});
const getInfo = (key: string) => {
  info.value = solutionInfo.get(key);
};
// 点击滑到底部联系我们
const toContactPage = () => {
  nextTick(() => {
    document
      .getElementsByClassName('contactUs-box')[0]
      .scrollIntoView({ behavior: 'auto', block: 'center', inline: 'nearest' });
  });
};
const initData = async () => {
  const [res] = await proxy.slAwait(getSecondary(info.value?.keyword + '_index'));
  if (res) {
    res.result.forEach((item: any) => {
      if (item.keyword === info.value.keyword + '_scheme') {
        // 方案服务
        info.value.services.graph.map((ite: any, dex: number) => {
          Object.assign(ite, item.paperList[dex]);
        });
      } else if (item.keyword === info.value.keyword + '_advantage') {
        // 方案优势
        info.value.advantage.map((ite: any, dex: number) => {
          Object.assign(ite, item.paperList[dex]);
        });
      } else if (item.keyword === info.value.keyword + '_process') {
        // 服务流程
        info.value.process.graph.map((ite: any, dex: number) => {
          Object.assign(ite, item.paperList[dex]);
          ite.content = ite.content.split('$');
        });
      } else if (item.keyword === info.value.keyword + '_story') {
        // 客户故事
        info.value.custom.contentList.map((ite: any, dex: number) => {
          Object.assign(ite, item.paperList[dex]);
          ite.content = ite.content.split('；');
        });
      } else if (item.keyword === info.value.keyword) {
        Object.assign(info.value.describe, item.paperList[0]);
      }
      console.log('info.value :>> ', info.value);
    });
  }
};
watch(
  () => router,
  (value) => {
    const currentPath = value.currentRoute.value.path.split('/');
    getInfo(currentPath[currentPath.length - 1]);
    initData();
  },
  {
    deep: true,
    immediate: true
  }
);
</script>
<style lang="less" scoped>
:deep(.ant-steps-item-container) {
  &:hover {
    cursor: auto;
  }
}
.solution-box {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  min-width: 1226px;
  .advantage-item-bg-top {
    background-image: url('../../../assets/images/system/home/solution-advantage-1.png');
  }
  .advantage-item-bg-left {
    background-image: url('../../../assets/images/system/home/solution-advantage-2.png');
  }
  .advantage-item-bg-right {
    background-image: url('../../../assets/images/system/home/solution-advantage-3.png');
  }
  .advantage-item-bg-bottom {
    background-image: url('../../../assets/images/system/home/solution-advantage-4.png');
  }
  .dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    background: @primary-color;
    border-radius: 50%;
    margin-right: 8px;
  }
  // 头部描述
  .describe-box {
    --antd-wave-shadow-color: transparent !important;
    height: calc(100vh - 62px);
    position: relative;
    // background-image: url('/@/assets/solution/describe-bg.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    overflow-y: auto;

    .describe-list {
      width: 1200px;
      padding-top: 13%;
      margin: 0 auto;
      overflow-y: auto;
      .desribe-title {
        font-size: 41px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.8);
      }
      .desribe-graph {
        font-size: 18px;
        color: #000000;
        line-height: 32px;
        padding: 15px 0;
        font-family: Source Han Sans CN-Normal;
        height: 200px;
        width: 590px;
        // margin-bottom: 68px;
      }
      :deep(.ant-btn-primary) {
        border: none;
        box-shadow: none;
        color: #fff;
        border-radius: 22px !important;
        width: 120px;
        font-size: 18px;
        height: 37px;
        letter-spacing: 0.5px;
      }
    }
  }
  // 方案服务
  .serives-box {
    background-image: url('../../../assets//images/system/home/functionBack.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    padding-top: 3%;
    .serives-list {
      width: 1300px;
      margin: 30px auto 0;
      position: relative;
      height: 500px;
      .serives-img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 500px;
        img {
          width: 100%;
        }
      }
      .serives-item {
        width: 22%;
        .serives-item-title {
          font-size: 20px;
          font-family: Source Han Sans CN, Source Han Sans CN-Medium;
          font-weight: 500;
          text-align: right;
          color: #000000;
          line-height: 22px;
          padding-bottom: 10px;
          white-space: nowrap;
        }
        .serives-item-title-right {
          text-align: left;
        }
        .serives-item-graph {
          font-size: 18px;
          font-family: Source Han Sans CN, Source Han Sans CN-Regular;
          font-weight: 400;
          text-align: justify;
          color: #000000;
        }
      }
    }
  }
  // 方案优势
  .scheme-advantages-box {
    width: 100%;
    background-color: #f4f9ff;
    padding-top: 3%;
    padding-bottom: 80px;

    .scheme-advantages {
      width: 1200px;
      margin: 0 auto;
      .advantage-list {
        padding-top: 90px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        row-gap: 80px;
        column-gap: 66px;
        min-height: 390px;
        .advantage-item {
          flex: 0 0 calc(100% / 2 - 33px);
          max-width: 50%;
          height: 195px;
          border-radius: 8px;
          background-color: #f4f9ff;
          box-shadow: 4px 6px 25px rgba(23, 61, 172, 0.1);
          background-size: contain;
          background-repeat: no-repeat;
          padding: 24px 24px 0 36px;
          .advantage-item-title {
            display: flex;
            align-items: center;
            padding-bottom: 10px;
            span:nth-child(2) {
              font-size: 24px;
              font-family: Source Han Sans CN, Source Han Sans CN-Medium;
              font-weight: 500;
            }
          }
          .advantage-item-describe {
            font-size: 18px;
            font-family: Source Han Sans CN, Source Han Sans CN-Regular;
            color: #000000;
            line-height: 37px;
          }
        }
      }
    }
  }
  // 服务流程
  .service-process-box {
    background-image: url('../../../assets/images/system/home/serviceProcessBg.png');
    width: 100%;
    height: 44vw;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    .cantainer {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center top;
      z-index: 10;
      overflow-x: hidden;
      overflow-y: auto;
      .type-center {
        padding-top: 3%;
        width: 1100px;
        margin: 0 auto;
        .service-process {
          margin-top: 200px;
        }
      }
    }
    :deep(.ant-steps-item-wait > .ant-steps-item-container > .ant-steps-item-tail::after) {
      background-color: rgba(0, 0, 0, 0.2);
    }
    :deep(.ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-tail::after) {
      background-color: rgba(0, 0, 0, 0.2);
    }
    :deep(.ant-steps-item-title) {
      display: flex;
      flex-direction: column;
      img {
        width: 50px;
        position: absolute;
        top: -130px;
        right: 34px;
      }
      .ant-steps-item-subtitle {
        position: relative;
        left: 12px;
        flex: 1;
        font-size: 22px;
        font-family: Source Han Sans CN-Medium;
        font-weight: 500;
        text-align: left;
        color: #000000;
        margin-bottom: 10px;
        margin-top: 10px;
        white-space: nowrap;
      }
    }
    .ant-steps-item {
      margin-bottom: 30px;
      :deep(.ant-steps-item-description) {
        position: relative;
        left: 12px;
        font-size: 18px;
        font-family: Source Han Sans CN-Regular;
        font-weight: 400;
        color: #000000 !important;
        width: 260px;
        text-align: left;
        .heng {
          display: flex;
          margin-bottom: 10px;
          position: relative;
          right: 21px;
          span:nth-child(1) {
            margin-right: 8px;
            line-height: 32px;
          }
          span:nth-child(2) {
            text-align: left;
            display: block;
            line-height: 30px;
            // white-space: nowrap;
          }
        }
      }
    }
  }
  // 客户故事
  .custom-story-box {
    background-color: #f4f9ff;
    padding: 3% 0px 80px;
    .custom-story {
      width: 1200px;
      margin: 0 auto;
    }
    .custom-story-list {
      margin-top: 70px;
      background: linear-gradient(
        90deg,
        rgba(240, 247, 255, 0.5) 1%,
        rgba(228, 236, 252, 0.4) 70%,
        rgba(230, 240, 255, 0.4)
      );
      padding: 108px 0;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      .custom-story-img {
        width: 300px;
        img {
          width: 100%;
        }
      }
      .custom-story-title-list {
        padding: 25px 25px 10px 25px;
        background: linear-gradient(89deg, #eaf3ff 1%, #f4f9ff 100%);
        border-radius: 8px;
        box-shadow: 0px 8px 20px 0px rgba(23, 61, 172, 0.05),
          0px 3px 6px 0px rgba(198, 197, 197, 0.16) inset;
        width: 520px;
        .custom-story-title {
          padding-bottom: 20px;
          position: relative;
          .custom-story-line {
            position: absolute;
            left: 3.3px;
            top: 17px;
            height: 100%;
            width: 1px;
            background: linear-gradient(180deg, #0b63e1, #5291ea 28%, #99bef4 68%, #edf4fe);
          }
          .title {
            font-size: 20px;
            font-family: Source Han Sans CN, Source Han Sans CN-Medium;
            font-weight: 500;
            color: #000000;
            line-height: 37px;
            display: flex;
            align-items: center;
          }
          .graph-list {
            font-size: 16px;
            padding-left: 16px;
          }
        }
      }
    }
  }
  .contactUs-box {
    background: linear-gradient(90deg, #f0f4fb 20%, #fefeff 60%, #fbfdff 100%);
    .contact {
      padding-top: 3%;
    }
  }
}
</style>
