<template>
  <div class="threeLevel">
    <!-- 头部 -->
    <div class="header">
      <div class="layout">
        <div class="content">
          <span @click="goPage('/government')">首页</span>
          <span class="focus" @click="goPage('/government/noticesecondary')">通知公告</span>
          <span>入驻指南</span>
          <span>培训活动</span>
          <span @click="goPage('/government/infosecondary')">行业资讯</span>
          <span>质量规范</span>
        </div>
      </div>
    </div>

    <div class="articleList">
      <div class="title">
        <p>全市首个！数字化质量公共服务云平台正式启动运营！</p>
        <div class="under">
          <span>2023-03-15 10:41</span>
          <span>已阅356次</span>
        </div>
      </div>
      <Divider />
      <div class="article">
        <p>8月31日，数字化质量公共服务云平台正式启动运营！相关领导参加了启动仪式。</p>
        <p>
          数字科技融合下的实体产业转型升级和实体产业的互联网化、数字化、智能化已经成为世界各国经济增长的新动能；数字科技可以对生产和经营环节进行精准预测、优化布局、精细化运营、实时反馈并进行修正，从而形成了完整的、可持续发展闭环。
        </p>
        <p>
          软件做为数字产业的发展基础，通过软件测试保证软件产品质量控制、管理与检测成为助推产业转型升级的新引擎；易迪森通过为企业用户提供核心技术、产品工具和专业人才三位一体的服务模式，为不同规模、不同行业的用户提供覆盖线上Saas测试云平台、线下量身定制等多种产品+服务形态的功能、兼容、性能、安全、自动化、用户体验等软件测试服务；在满足众多开发者从研发到运营各阶段的测试需求的同时，并为开发者提供从IT咨询、人才培训、业务外包、产品设计、开发、上线到运维的完整生命周期软件质量提升解决方案。
        </p>
        <p>
          平台秉持“让软件质量服务更容易、更普惠、更智能”的经营理念，加强企业软件质量生态建设，积极探索软件质量创新之路，努力打造中国企业软件质量服务新引擎，助推中国碳达峰和碳中和国家战略进程的同时帮助中国企业培育出高品质、强品牌、强产品、共未来的中国软件质量生态命运共同体。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Divider } from 'ant-design-vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const goPage = (key: string) => {
  router.push(key);
};
</script>

<style lang="less" scoped>
:deep(.focus) {
  color: #125ee1;
}
.threeLevel {
  background: #fff;
  .header {
    height: 68px;
    width: 100%;
    background: #f8f8f8;
    .layout {
      width: 1200px;
      margin: 0 auto;
      .content {
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
  .articleList {
    padding: 64px 0;
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
    .article {
      margin-top: 54px;
      font-size: 20px;
      font-family: Source Han Sans CN-Regular;
      font-weight: 400;
      text-align: justify;
      color: rgba(0, 0, 0, 0.8);
      p {
        text-indent: 2em;
        margin-bottom: 0;
      }
    }
  }
}
</style>
