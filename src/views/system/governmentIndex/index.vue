<template>
  <div class="admin">
    <div class="type-center">
      <div
        :style="`background-image: url(${bgUrl});height: 62vw;background-size: 100%;background-position: center;background-repeat: no-repeat;margin-bottom:50px;`"
        class="second"
      >
        <div class="layout-title">
          <img :src="requestData.value?.logoUrl" alt="" />
          <span>{{ requestData.value?.welcomeInfo }}</span>
        </div>
        <div class="layout">
          <p class="project-title">{{ requestData.value?.title }}</p>
          <div class="title-third">
            <div class="item">
              <img src="@/assets/images/system/government/tit-top.png" alt="" />
              <span>线上自助</span>
              <img src="@/assets/images/system/government/tit-under.png" alt="" />
            </div>
            <img src="@/assets/images/system/government/triangle.png" alt="" />
            <div class="item">
              <img src="@/assets/images/system/government/tit-top.png" alt="" />
              <span>咨询服务</span>
              <img src="@/assets/images/system/government/tit-under.png" alt="" />
            </div>
            <img src="@/assets/images/system/government/triangle.png" alt="" />
            <div class="item">
              <img src="@/assets/images/system/government/tit-top.png" alt="" />
              <span>技术服务</span>
              <img src="@/assets/images/system/government/tit-under.png" alt="" />
            </div>
            <img src="@/assets/images/system/government/triangle.png" alt="" />
            <div class="item">
              <img src="@/assets/images/system/government/tit-top.png" alt="" />
              <span>人力资源</span>
              <img src="@/assets/images/system/government/tit-under.png" alt="" />
            </div>
            <img src="@/assets/images/system/government/triangle.png" alt="" />
            <div class="item">
              <img src="@/assets/images/system/government/tit-top.png" alt="" />
              <span>培训服务</span>
              <img src="@/assets/images/system/government/tit-under.png" alt="" />
            </div>
          </div>
          <div class="header-btn">
            <a href="/" target="_blank" rel="noopener noreferrer">服务专区</a>
          </div>
          <!-- 一站式服务 -->
          <div class="one-stop">
            <div class="leftTop">
              <div class="header">
                <div class="title">
                  <img src="@/assets/images/system/government/llogo.png" alt="" />
                  <span>一站式服务</span>
                  <img src="@/assets/images/system/government/rlogo.png" alt="" />
                </div>
                <div class="more">
                  <a href="/" target="_blank" rel="noopener noreferrer">更多服务</a>
                  <i class="iconfont icon-you"></i>
                </div>
              </div>

              <div class="content">
                <div class="card" @click="goPage('/product/consult')">
                  <img src="@/assets/images/system/government/zhiliang.png" alt="" />
                  <div class="produce">
                    <span>质量管控方案咨询</span>
                    <p>规划阶段</p>
                  </div>
                </div>
                <div class="card" @click="goPage('/product/expertConsultation')">
                  <img src="@/assets/images/system/government/xuqiu.png" alt="" />
                  <div class="produce">
                    <span>需求质量专家咨询</span>
                    <p>需求阶段</p>
                  </div>
                </div>
                <div class="card" @click="goPage('/product/codesecurity')">
                  <img src="@/assets/images/system/government/daima.png" alt="" />

                  <div class="produce">
                    <span>代码安全测试</span>
                    <p>开发阶段</p>
                  </div>
                </div>
                <div class="card" @click="goPage('/product')">
                  <img src="@/assets/images/system/government/zhuanye.png" alt="" />

                  <div class="produce">
                    <span>专业性能测试</span>
                    <p>测试阶段</p>
                  </div>
                </div>
                <div class="card" @click="goPage('/product/useraccept')">
                  <img src="@/assets/images/system/government/yonghu.png" alt="" />

                  <div class="produce">
                    <span>用户验收测试</span>
                    <p>上线阶段</p>
                  </div>
                </div>
                <div class="card">
                  <img src="@/assets/images/system/government/yingyong.png" alt="" />
                  <div class="produce" @click="goPage('/product/monitor')">
                    <span>应用动态监测</span>
                    <p>运营阶段</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="rigghtTop">
              <a-tabs v-model:activeKey="activeKey" type="card" @tab-click="tabClick">
                <a-tab-pane key="1" tab="通知公告">
                  <div class="line"></div>
                  <div class="card" @click="toNotice">
                    <p>全市首个！数字化质量公共服务云平台正...</p>
                    <p>2023-03-15</p>
                  </div>
                  <div class="card" @click="toNotice">
                    <p>全市首个！数字化质量公共服务云平台正...</p>
                    <p>2023-03-15</p>
                  </div>
                  <div class="card" @click="toNotice">
                    <p>全市首个！数字化质量公共服务云平台正...</p>
                    <p>2023-03-15</p>
                  </div>
                  <div class="card" @click="toNotice">
                    <p>全市首个！数字化质量公共服务云平台正...</p>
                    <p>2023-03-15</p>
                  </div>
                </a-tab-pane>
                <a-tab-pane key="2" tab="入驻指南" disabled>入驻指南</a-tab-pane>
                <a-tab-pane key="3" tab="培训活动" disabled>培训活动</a-tab-pane>
              </a-tabs>
              <div class="footer" @click="goPage('/government/noticesecondary')">
                <img src="@/assets/images/system/government/notice-line.png" alt="" />
                <span>查看更多</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 服务概览 -->
      <div class="serviceView">
        <div class="layout">
          <div class="title-card">
            <div class="top">
              <img src="@/assets/images/system/government/llogo.png" alt="" />
              <span>服务概览</span>
              <img src="@/assets/images/system/government/rlogo.png" alt="" />
            </div>
            <img src="@/assets/images/system/government/service-line.png" alt="" />
            <div class="foot" @click="goLargeScreen">
              <span>进入数字化质量服务大屏</span>
              <i class="iconfont icon-you"></i>
            </div>
          </div>
          <div class="content">
            <div class="left-card">
              <div class="title">
                <img src="@/assets/images/system/government/business-under.png" alt="" />
                <span>服务企业</span>
                <img src="@/assets/images/system/government/business-top.png" alt="" />
              </div>
              <div class="circle">
                <div class="content">
                  <span>{{ businessCount }}</span>
                  <span>入驻企业</span>
                </div>
                <div class="content">
                  <span>{{ userCount }}</span>
                  <span>使用用户</span>
                </div>
              </div>
              <div class="business">
                <div class="fir">辉隆科技有限公司 已入驻!</div>
                <div class="sec">
                  <i class="iconfont icon-zhixiangshang"></i>
                  <i class="iconfont icon-zhixiangshang"></i>
                </div>
                <div class="thir">
                  <Carousel dot-position="left" autoplay>
                    <div>
                      <p>弘方科技有限公司 已入驻！</p>
                      <p>米集网络科技有限公司 已入驻！</p>
                      <p>闪达智能有限公司 已入驻！</p>
                      <p>苏玛科技有限公司 已入驻！</p>
                    </div>
                    <div>
                      <p>万泽信息有限公司 已入驻！</p>
                      <p>艺阁艺术有限公司 已入驻！</p>
                      <p>辉隆信息技术有限公司 已入驻！</p>
                      <p>威德技术有限公司 已入驻！</p>
                    </div>
                    <div>
                      <p>扬源信息有限公司 已入驻！</p>
                      <p>新森技术有限公司 已入驻！</p>
                      <p>翔吉翔信息技术有限公司 已入驻！</p>
                      <p>银钢辉煌信息技术有限公司 已入驻！</p>
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
            <div class="right-card">
              <div class="title">
                <img src="@/assets/images/system/government/charts-under.png" alt="" />
                <span>服务支撑</span>
                <img src="@/assets/images/system/government/charts-top.png" alt="" />
              </div>
              <div class="charts">
                <div class="cardone">
                  <div class="produce">
                    <span>线上自助</span>
                    <span>{{ timeNums.salesNum }}次</span>
                  </div>
                  <img src="@/assets/images/system/government/charts-right.png" alt="" />
                </div>
                <div class="cardone">
                  <div class="produce">
                    <span>发现问题</span>
                    <span>{{ timeNums.findsNum }}次</span>
                  </div>
                  <a-progress type="circle" :percent="defaultPercent" stroke-color="#EA0D00" />
                </div>
                <div class="card">
                  <div class="produce">
                    <span>专家服务</span>
                    <p>{{ timeNums.exportNum }}次</p>
                  </div>
                  <img src="@/assets/images/system/government/expert.png" alt="" />
                </div>
                <div class="card">
                  <div class="produce">
                    <span>解决问题</span>
                    <p>{{ timeNums.solveNum }}次</p>
                  </div>
                  <a-progress :percent="80" status="active" size="small" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 行业资讯 -->
      <div class="industry">
        <div class="layout">
          <div class="title">
            <div class="top">
              <img src="@/assets/images/system/government/llogo.png" alt="" />
              <span>行业资讯</span>
              <img src="@/assets/images/system/government/rlogo.png" alt="" />
            </div>
            <img src="@/assets/images/system/government/service-line.png" alt="" />
            <div class="foot" @click="toSecondary">
              <span>查看更多</span>
              <i class="iconfont icon-you"></i>
            </div>
          </div>
          <div class="content">
            <div class="left-content" @click="goPage('/government/infothreelevel')">
              <img src="@/assets/images/system/government/business-exam.png" alt="" />
              <div class="text">
                <span>全市首个！数字化质量公共服务云平台正式启动运营！全市首个！</span>
                <span>
                  数字化质量公共全市首个！数字化质量公共服务云平台正式启动运营！全市首个！数字化质量公共服务云全市首个！数字化质量公共服务云平台正式启动运营！全市首个！数字化质量公共服务云服务云
                </span>
                <div class="foot">
                  <span>2023-03-15</span>
                  <span>数字化质量公共服务云</span>
                </div>
              </div>
            </div>
            <div class="right-content">
              <div class="top" @click="goPage('/government/infothreelevel')">
                <div class="left">
                  <span>15</span>
                  <span>2023-03</span>
                </div>
                <div class="right">
                  <span>
                    全市首个！数字化质量公共服务云平台正式启动运营！全市首个！数字化质量公共服务云...
                  </span>
                  <span>数字化质量公共服务云</span>
                </div>
              </div>
              <div class="bottom top" @click="goPage('/government/infothreelevel')">
                <div class="left">
                  <span>15</span>
                  <span>2023-03</span>
                </div>
                <div class="right">
                  <span>
                    全市首个！数字化质量公共服务云平台正式启动运营！全市首个！数字化质量公共服务云...
                  </span>
                  <span>公共服务云</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 底部 -->
      <IndexFooter :infos="infos" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';
import { Carousel } from 'ant-design-vue';
import IndexFooter from './component/IndexFooter.vue';
import { useRouter } from 'vue-router';
import { administInfo, getDocument } from '@/api/system/index';
import axios from 'axios';
const bgUrl = ref();
const router = useRouter();
const activeKey = ref('1');
const businessCount = ref(10);
const userCount = ref(78);
const defaultPercent = ref(0);
const requestData = reactive<any>({});
const timeNums = reactive({
  salesNum: 198,
  findsNum: 121,
  exportNum: 76,
  solveNum: 119
});
const percentTimer = ref<any>(null);
const countTimer = ref<any>(null);
const infos = reactive({
  tel: '',
  sponsor: '',
  service: ''
});
const goLargeScreen = () => {
  axios.get('/config.json').then((res) => {
    window.open(res.data.dashboardUrl);
  });
};
const toSecondary = () => {
  router.push('/government/infosecondary');
};
const toNotice = () => {
  router.push('/government/noticethreelevel');
};
const tabClick = () => {
  router.push('/government/noticesecondary');
};
const percentIncrease = () => {
  let random = parseInt((Math.random() * 10).toString());
  percentTimer.value = setTimeout(() => {
    if (defaultPercent.value <= 80) {
      defaultPercent.value += random;
      percentIncrease();
    } else {
      clearTimeout(percentTimer.value);
    }
  }, 2000);
};

const countIncrease = () => {
  let random1 = parseInt((Math.random() * 100).toString());
  let random2 = parseInt((Math.random() * 100).toString());
  let random3 = parseInt((Math.random() * 100).toString());
  let random4 = parseInt((Math.random() * 100).toString());
  let random5 = parseInt((Math.random() * 100).toString());
  let random6 = parseInt((Math.random() * 100).toString());
  countTimer.value = setTimeout(() => {
    if (defaultPercent.value <= 80) {
      businessCount.value += random1;
      userCount.value += random2;
      timeNums.salesNum += random3;
      timeNums.findsNum += random4;
      timeNums.exportNum += random5;
      timeNums.solveNum += random6;
      countIncrease();
    } else {
      clearTimeout(countTimer.value);
    }
  }, 10000);
};
const reqInfomation = async () => {
  let data = await administInfo({ category: 'public', code: 'city' });
  requestData.value = data.result;
  infos.tel = requestData.value.telephone;
  infos.sponsor = requestData.value.sponsorName;
  infos.service = requestData.value.serviceName;
  await getDocument('public_service_index')
    .then((res) => {
      bgUrl.value = res.result[0].url;
    })
    .catch();
};
const goPage = (key: string) => {
  router.push(key);
};
onMounted(() => {
  percentIncrease();
  countIncrease();
  reqInfomation();
});
onBeforeUnmount(() => {
  if (percentTimer.value) clearTimeout(percentTimer.value);
  if (countTimer.value) clearTimeout(countTimer.value);
});
</script>

<style lang="less" scoped>
.admin {
  width: 100%;
  :deep(.ant-tabs-card.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab-active) {
    background-image: url('@/assets/images/system/government/btnactive.svg');
    background-size: 150%;
    background-position: center;
    border: 1px solid #ffffff;
    border-radius: 8px 8px 0px 0px;
    border-bottom: 2px solid #125ee1 !important;
  }
  :deep(.ant-tabs-card.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab + .ant-tabs-tab) {
    background: rgba(255, 255, 255, 0.4);
    background-size: 100%;
    background-position: center;
    border-radius: 8px 8px 0px 0px;
    border: 1px solid #ffffff !important;
    color: #ffffff !important;
    cursor: auto;
  }
  :deep(.ant-tabs-tab:nth-child(1)) {
    margin-right: 19px;
    width: calc((373px - 38px) / 3);
    display: flex;
    justify-content: center;
  }
  :deep(.ant-tabs-tab:nth-child(2)) {
    margin-right: 19px;
    width: calc((373px - 38px) / 3);
    display: flex;
    justify-content: center;
  }
  :deep(.ant-tabs-tab:nth-child(3)) {
    width: calc((373px - 38px) / 3);
    display: flex;
    justify-content: center;
  }
  :deep(.ant-tabs-bar) {
    border-bottom: none !important;
    margin: 0 !important;
  }
  :deep(.slick-list) {
    height: 108px !important;
  }
  :deep(.ant-progress-inner:not(.ant-progress-circle-gradient) .ant-progress-circle-path) {
    border: 1px solid red !important;
  }
  :deep(.ant-progress-circle .ant-progress-text) {
    background: #fccfcc;
    width: 60%;
    border-radius: 50%;
    padding: 15px 0;
    color: #ea0d00;
  }
  .type-center {
    width: 100%;
    background: #fff;
    .layout-title {
      height: 60px;
      display: flex;
      align-items: center;
      padding: 0 0 0 16px;
      background: rgba(0, 0, 0, 0.25);
      img {
        width: 148px;
        margin-right: 12%;
        margin-top: 5px;
      }
      span {
        font-family: Source Han Sans CN-Regular;
        font-size: 18px;
        color: #fff;
        white-space: nowrap;
      }
    }
    // 版心内容
    .layout {
      width: 1200px;
      margin: 0 auto;
    }
    //小标题
    .project-title {
      margin-top: 70px;
      margin-bottom: 90px;
      font-family: Source Han Sans CN-Medium;
      font-size: 48px;
      color: #fff;
      text-align: center;
    }

    .title-third {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 700px;
      height: 60px;
      margin: 0 auto;
      .item {
        display: flex;
        flex-direction: column;
        img {
          width: 80px;
          &:nth-child(1) {
            margin-bottom: 10px;
          }
        }
        span {
          font-size: 20px;
          font-family: Source Han Sans CN-Regular;
          font-weight: 400;
          text-align: left;
          color: #ffffff;
          margin-bottom: 10px;
        }
      }
      & > img {
        width: 17px;
        height: 15px;
      }
    }

    .header-btn {
      width: 112px;
      line-height: 48px;
      font-size: 18px;
      font-family: Source Han Sans CN-Medium;
      font-weight: 500;
      text-align: center;
      background: #00c8c8;
      border-radius: 4px;
      margin: 0 auto;
      margin-top: 80px;
      cursor: pointer;
      a {
        color: #ffffff !important;
      }
    }

    // 一站式服务
    .one-stop {
      width: 100%;
      margin-top: 8vw;
      display: flex;
      margin-bottom: 20px;
      // height: 500px;
      .leftTop {
        width: 790px;
        margin-right: 16px;
        box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.03);
        z-index: 9;
        height: 424px;
        .header {
          background-image: url('@/assets/images/system/government/onetop.svg');
          background-size: 100%;
          background-position: center;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 64px;
          border-radius: 8px;
          padding: 0 25px;
          opacity: 0.85;
          margin-bottom: 20px;

          .title {
            display: flex;
            align-items: center;
            img {
              width: 22px;
              height: 14px;
              justify-content: space-right;
            }
            span {
              font-size: 20px;
              font-family: Source Han Sans CN-Medium;
              font-weight: 500;
              text-align: left;
              color: rgba(0, 0, 0, 0.8);
              padding: 0 10px;
            }
          }
          .more {
            font-size: 16px;
            font-family: Source Han Sans CN-Regular;
            font-weight: 400;
            text-align: right;
            cursor: pointer;
            color: #ffffff;
            a {
              margin-right: 10px;
              color: #ffffff;
            }
          }
        }

        .content {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          padding: 36px 20px 44px 20px;
          background-image: url('@/assets/images/system/government/newcontent.svg');
          background-size: cover;
          background-position: center;
          border-radius: 8px;
          box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.08);
          height: calc(424px - 82px);
          .card {
            box-sizing: border-box;
            background-image: url('../../../assets/images/system/government/nothover.png');
            background-position: center;
            background-size: 110%;
            background-repeat: no-repeat;
            width: 232px;
            height: 120px;
            padding: 21px 30px 25px 10px;
            display: flex;
            align-items: center;
            border-radius: 4px;
            img {
              width: 35px;
              height: 39px;
              margin-right: 10px;
            }
            cursor: pointer;
            .produce {
              span {
                font-size: 18px;
                font-family: Source Han Sans CN-Regular;
                font-weight: 400;
                text-align: left;
                color: rgba(0, 0, 0, 0.8);
                display: block;
                line-height: 40px;
                white-space: nowrap;
              }
              p {
                font-size: 18px;
                font-family: Source Han Sans CN-Regular;
                font-weight: 400;
                text-align: left;
                color: rgba(0, 0, 0, 0.4);
                margin: 0 !important;
              }
            }

            &:hover {
              background-image: url('@/assets/images/system/government/onetop-hover.png');
            }
          }
        }
      }

      .rigghtTop {
        flex: 1;
        height: 424px;
        opacity: 0.85;
        background-image: url('@/assets/images/system/government/onetop-notice.svg');
        background-size: cover;
        background-position: center;
        border-radius: 8px;
        box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
        padding: 16px;
        z-index: 9;
        .line {
          width: 75%;
          height: 1px;
          border-top: none;
          border-left: none;
          border-right: none;
        }

        .card {
          margin: 12px 0;
          height: 64px;
          width: 100%;
          padding: 12px 18px;
          font-size: 14px;
          font-family: Source Han Sans CN-Regular;
          font-weight: 400;
          text-align: left;
          box-sizing: border-box;
          cursor: pointer;
          p:nth-child(1) {
            margin-bottom: 4px;
            color: rgba(0, 0, 0, 0.8);
          }
          p:nth-child(2) {
            color: rgba(0, 0, 0, 0.2);
          }
          &:hover {
            background-image: url('@/assets/images/system/government/notice-hover.png') !important;
            background-position: center;
          }
          &:hover > p {
            color: #125ee1;
          }
        }
        .card:nth-child(2),
        .card:nth-child(3),
        .card:nth-child(4),
        .card:nth-child(5) {
          background-image: url('@/assets/images/system/government/notice-new.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }
        .card:nth-child(3) {
          margin-top: 17px;
        }
        .card:nth-child(6) {
          background-image: url('@/assets/images/system/government/notice-new.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
          margin-bottom: 0 !important;
        }
        .footer {
          position: relative;
          right: 14px;
          img {
            width: 108%;
          }
          span {
            display: block;
            width: 100%;
            text-align: right;
            font-size: 14px;
            font-family: Source Han Sans CN-Regular;
            font-weight: 400;
            color: #125ee1;
            cursor: pointer;
            position: relative;
            left: 12px;
          }
        }
      }
    }
    //服务总览
    .serviceView {
      margin-top: 5vw;
      position: relative;
      background-image: url('@/assets/images/system/government/service-bg.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      padding: 90px 0 60px 0;
      .title-card {
        position: absolute;
        top: 70px;
        left: calc(50% - 152px);
        z-index: 9999;
        width: 304px;
        height: 130px;
        background: #fffeff;
        box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.06);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 10px;
        .top {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          margin-bottom: 18px;
          width: 50%;

          img {
            width: 22px;
            height: 14px;
          }
          span {
            font-size: 20px;
            font-family: Source Han Sans CN-Medium;
            font-weight: 500;
            text-align: left;
            color: #000000;
            padding: 0 10px;
          }
        }
        & > img {
          width: 180px;
          margin-bottom: 16px;
        }
        .foot {
          font-size: 14px;
          font-family: Source Han Sans CN-Regular;
          font-weight: 400;
          text-align: right;
          color: #125ee1;
          position: relative;
          left: 6px;
          cursor: pointer;
        }
      }
      .content {
        display: flex;
        .left-card {
          padding: 85px 15px 15px 15px;
          width: 590px;
          margin-right: 20px;
          height: 592px;
          border-radius: 16px;
          box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.08);

          .title {
            width: 30%;
            font-size: 16px;
            font-family: Source Han Sans CN-Medium;
            font-weight: 500;
            img {
              width: 130%;
              height: 3px;
            }
            img:nth-child(1) {
              width: 150%;
            }
          }
          .circle {
            display: flex;
            margin-top: 30px;
            width: 100%;
            padding: 0 113px;
            justify-content: space-evenly;
            .content {
              width: 140px;
              height: 140px;
              background-image: url('@/assets/images/system/government/businessb.png');
              background-size: 100% 100%;
              background-position: center;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin-right: 60px;
              span:nth-child(1) {
                font-size: 20px;
                font-family: Source Han Sans CN-Medium;
                font-weight: 500;
                text-align: left;
                color: #125ee1;
              }
              span:nth-child(2) {
                font-size: 14px;
                font-family: Source Han Sans CN-Regular;
                font-weight: 400;
                text-align: left;
                color: rgba(0, 0, 0, 0.8);
              }
            }
            .content:nth-child(2) {
              background-image: url('@/assets/images/system/government/businessg.png');
              background-size: 100% 100%;
              background-position: center;
              margin-right: 0 !important;
              span:nth-child(1) {
                color: #00c8c8;
              }
            }
          }
          .business {
            margin-top: 30px;
            .fir {
              font-size: 16px;
              font-family: Source Han Sans CN-Regular;
              font-weight: 400;
              text-align: center;
              color: #125ee1;
            }
            .sec {
              width: 50%;
              display: flex;
              justify-content: space-between;
              font-size: 16px;
              font-family: Source Han Sans CN-Regular;
              font-weight: 400;
              text-align: center;
              color: #125ee1;
              margin: 0 auto;
              margin-bottom: 10px;
              i:nth-child(1) {
                rotate: 50deg;
              }
              i:nth-child(2) {
                rotate: -50deg;
              }
            }
            .thir {
              font-size: 14px;
              font-family: Source Han Sans CN-Regular;
              font-weight: 400;
              text-align: center;
              color: rgba(0, 0, 0, 0.8);
              p {
                margin: 5px;
              }
            }
          }
        }
        .right-card {
          padding: 85px 15px 15px 15px;
          width: 590px;
          height: 592px;
          border-radius: 16px;
          box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.08);
          .title {
            width: 30%;
            position: relative;
            left: 70%;
            text-align: right;
            font-size: 16px;
            font-family: Source Han Sans CN-Medium;
            font-weight: 500;
            img {
              width: 120%;
              position: relative;
            }
            img:nth-child(1) {
              width: 150%;
              height: 3px;
              position: relative;
            }
          }
          .charts {
            padding: 50px 14px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            align-items: space-between;
            .cardone {
              width: 250px;
              height: 134px;
              border-radius: 8px;
              box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.08);
              margin-bottom: 30px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 16px;
              .produce {
                margin-right: 10px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                span:nth-child(1) {
                  font-size: 16px;
                  font-family: Source Han Sans CN-Regular;
                  font-weight: 400;
                  text-align: left;
                  color: rgba(0, 0, 0, 0.4);
                  display: block;
                  margin-bottom: 16px;
                }
                span:nth-child(2) {
                  font-size: 24px;
                  font-family: Source Han Sans CN-Regular;
                  font-weight: 400;
                  text-align: center;
                  color: #000000;
                }
              }
              & > img {
                width: 120px;
                height: 50px;
              }
              :deep(.ant-progress-inner) {
                width: 90px !important;
                height: 90px !important;
              }
            }
            .card {
              width: 250px;
              height: 134px;
              border-radius: 8px;
              box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.08);
              margin-bottom: 30px;
              padding: 16px;
              box-sizing: border-box;
              .produce {
                & > span:nth-child(1) {
                  font-size: 16px;
                  font-family: Source Han Sans CN-Regular;
                  font-weight: 400;
                  text-align: left;
                  color: rgba(0, 0, 0, 0.4);
                }
                p {
                  font-size: 24px;
                  font-family: Source Han Sans CN-Regular;
                  font-weight: 400;
                  text-align: center;
                  color: rgba(0, 0, 0, 0.8);
                  text-align: right;
                  margin-bottom: 12px;
                }
              }
              & > img {
                width: 100%;
                // height: 60px;
              }
            }
          }
        }
      }
    }
    //行业资讯
    .industry {
      width: 100%;
      height: 600px;
      padding: 100px 0;
      .title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 300px;
        margin: 0 auto;
        .top {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          margin-bottom: 20px;
          width: 50%;
          height: 20px;

          img {
            width: 22px;
            height: 14px;
          }
          span {
            font-size: 20px;
            font-family: Source Han Sans CN-Medium;
            font-weight: 500;
            text-align: left;
            color: #000000;
            padding: 0 10px;
          }
        }
        & > img {
          width: 180px;
          margin-bottom: 20px;
        }
        .foot {
          font-size: 14px;
          font-family: Source Han Sans CN-Regular;
          font-weight: 400;
          text-align: right;
          color: #125ee1;
          cursor: pointer;
        }
      }
      .content {
        margin-top: 60px;
        display: flex;
        .left-content {
          display: flex;
          padding: 22px;
          width: 130%;
          background: #fafafa;
          border-radius: 4px;
          margin-right: 24px;
          img {
            width: 50%;
            margin-right: 30px;
          }
          .text {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            span {
              display: block;
            }
            span:nth-child(1) {
              font-size: 16px;
              font-family: Source Han Sans CN-Regular;
              font-weight: 400;
              text-align: left;
              color: rgba(0, 0, 0, 0.8);
            }
            span:nth-child(2),
            .foot > span {
              font-size: 14px;
              font-family: Source Han Sans CN-Regular;
              font-weight: 400;
              text-align: left;
              color: rgba(0, 0, 0, 0.4);
              text-align: justify;
            }
            .foot {
              display: flex;
              justify-content: space-between;
            }
          }
        }
        .right-content {
          padding: 10px 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .top {
            display: flex;
            margin-bottom: 15px;
            .left {
              width: 100px;
              height: 100px;
              background: #fafafa;
              border-radius: 4px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              margin-right: 10px;
              span:nth-child(1) {
                font-size: 20px;
                font-family: Source Han Sans CN-Regular;
                font-weight: 400;
                text-align: center;
                color: rgba(0, 0, 0, 0.6);
              }
              span:nth-child(2) {
                font-size: 14px;
                font-family: Source Han Sans CN-Regular;
                font-weight: 400;
                text-align: left;
                color: rgba(0, 0, 0, 0.4);
              }
            }
            .right {
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              span:nth-child(1) {
                font-size: 14px;
                font-family: Source Han Sans CN-Regular;
                font-weight: 400;
                text-align: left;
                color: rgba(0, 0, 0, 0.8);
                margin-bottom: 10px;
              }
              span:nth-child(2) {
                font-size: 14px;
                font-family: Source Han Sans CN-Regular;
                font-weight: 400;
                text-align: left;
                color: rgba(0, 0, 0, 0.4);
                display: block;
                text-align: right;
              }
            }
          }
        }
      }
    }
  }
}
</style>
