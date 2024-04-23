<template>
  <div class="infoThreeLevel">
    <!-- 头部 -->
    <div class="header">
      <div class="layout">
        <div class="textcontent">
          <span @click="() => router.push('/government')">首页</span>
          <span @click="() => router.push('/government/noticesecondary')">通知公告</span>
          <span>入驻指南</span>
          <span>培训活动</span>
          <span class="focus" @click="() => router.push('/government/infosecondary')">
            行业资讯
          </span>
          <span>质量规范</span>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="title">
        <p>智慧城市（合肥）软件质量联合实验室今日在合肥正式成立。</p>
        <div class="under">
          <span>2023-02-15 10:06</span>
          <span>已阅356次</span>
        </div>
      </div>
      <Divider />
      <div class="text">
        <div class="left-article">
          <div class="center">
            <p>
              今日下午，智慧城市（合肥）软件质量联合实验室在合肥正式成立，有关上级领导，联合组建单位领导等出席揭牌仪式，共同为实验室揭牌。用科技的翅膀助力软件质量，制定高水平智慧城市国际标准，健全智慧城市质量体系，共同跨入新的篇章！
              软件作为数字产业的发展基础，通过软件测试保证软件产品质量控制、管理与检测成为助推产业转型升级的新引擎，易迪森通过为企业用户提供核心技术、产品工具和专业人才三位一体的服务模式，为不同规模、不同行业的用户提供覆盖线上Saas测试云平台、线下量身定制等多种产品+服务形态的功能、兼容、性能、安全、自动化、用户体验等软件测试服务;在满足众多开发者从研发到运营各阶段的测试需求的同时，并为开发者提供从IT咨询、人才培训、业务外包、产品设计、开发、上线到运维的完整生命周期软件质量提升解决方案。平台秉持“让软件质量服务更容易、更普惠、更智能”的经营理念，加强企业软件质量生态建设，积极探索软件质量创新之路，努力打造中国企业软件质量服务新引擎，助推中国碳达峰和碳中和国家战略进程的同时帮助中国企业培育出高品质、强品牌、强产品、共未来的中国软件质量生态命运共同体。
            </p>
          </div>
        </div>
        <div class="right-list">
          <p>新闻推荐</p>
          <div class="card">
            <img src="@/assets/images/system/government/business-exam.png" alt="" />
            <div class="under">
              <span>全市首个！数字化质量公共服务云平台正式启动运营！</span>
            </div>
          </div>
          <div class="card">
            <img src="@/assets/images/system/government/business-exam.png" alt="" />
            <div class="under">
              <span>全市首个！数字化质量公共服务云平台正式启动运营！</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Divider } from 'ant-design-vue';
import { reactive, ref } from 'vue';
const router = useRouter();
const pagination = reactive({
  current: 5,
  total: 15
});
const pageSize = ref(0);
</script>

<style lang="less" scoped>
:deep(.focus) {
  color: #125ee1;
}
.infoThreeLevel {
  width: 100%;
  background: #fff;
  .header {
    height: 68px;
    width: 100%;
    background: #f8f8f8;
    .layout {
      width: 1200px;
      margin: 0 auto;
      .textcontent {
        font-size: 18px;
        font-family: Source Han Sans CN-Medium;
        font-weight: 500;
        text-align: left;
        color: rgba(0, 0, 0, 0.8);
        span {
          line-height: 68px;
          margin-right: 68px;
          cursor: pointer;
        }
      }
    }
  }
  .content {
    padding: 64px 0 0;
    width: 1200px;
    margin: 0 auto;
    .title {
      p {
        font-size: 42px;
        font-family: Source Han Sans CN-Regular;
        font-weight: 400;
        text-align: left;
        color: rgba(0, 0, 0, 0.8);
        line-height: 90px;
      }
      .under {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        font-family: Source Han Sans CN-Regular;
        font-weight: 400;
        text-align: left;
        color: rgba(0, 0, 0, 0.4);
      }
    }
    .text {
      display: flex;
      .left-article {
        position: relative;
        width: 70%;
        padding: 12px;
        font-size: 20px;
        font-family: Source Han Sans CN-Regular;
        font-weight: 400;
        text-align: left;
        color: rgba(0, 0, 0, 0.8);
        .top {
          margin-bottom: 32px;
          p {
            margin-bottom: 0;
          }
        }
        .center {
          .title {
            font-weight: 700;
          }
          .sectitle {
            font-weight: 600;
          }
          .graph {
            margin-bottom: 32px;
          }
          p {
            margin-bottom: 0;
          }
        }
        img {
          width: 100%;
        }
      }
      .right-list {
        flex: 1;
        border-left: 1px solid rgba(170, 170, 170, 0.2);
        padding-left: 40px;
        p {
          font-size: 24px;
          font-family: Source Han Sans CN-Medium;
          font-weight: 500;
          text-align: left;
          color: #000000;
        }
        .card {
          width: 280px;
          background: #f4f4f4;
          margin-bottom: 40px;
          img {
            width: 100%;
          }
          .under {
            padding: 12px;
            span {
              font-size: 14px;
              font-family: Source Han Sans CN-Regular;
              font-weight: 400;
              text-align: left;
              color: rgba(0, 0, 0, 0.8);
            }
          }
        }
      }
    }
  }
}
</style>
