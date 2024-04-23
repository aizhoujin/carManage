<template>
  <div class="secondary">
    <!-- 头部 -->
    <div class="header">
      <div class="layout">
        <div class="content">
          <span @click="() => router.push('/government')">首页</span>
          <span @click="() => router.push('/government/noticesecondary')">通知公告</span>
          <span>入驻指南</span>
          <span>培训活动</span>
          <span class="focus">行业资讯</span>
          <span>质量规范</span>
        </div>
      </div>
    </div>

    <div class="articleList">
      <div class="layout">
        <div class="content" @click="toInfoThreeLevel">
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
        <div class="content" @click="toInfoThreeLevel">
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
        <div class="content" @click="toInfoThreeLevel">
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
        <div class="content" @click="toInfoThreeLevel">
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
      </div>
    </div>
    <IndexFooter :infos="infos" />
  </div>
</template>

<script setup lang="ts">
import IndexFooter from './IndexFooter.vue';
import { reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { administInfo } from '@/api/system/index';
const router = useRouter();
const requestData = reactive<any>({});
const infos = reactive({
  tel: '',
  sponsor: '',
  service: ''
});
const toInfoThreeLevel = () => {
  router.push('/government/infothreelevel');
};
const reqInfomation = async () => {
  let data = await administInfo({ category: 'public', code: 'city' });
  requestData.value = data.result;
  infos.tel = requestData.value.telephone;
  infos.sponsor = requestData.value.sponsorName;
  infos.service = requestData.value.serviceName;
};
onMounted(() => {
  reqInfomation();
});
</script>

<style lang="less" scoped>
:deep(.focus) {
  color: #125ee1;
}
.secondary {
  width: 100%;
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
    min-height: calc(100vh - 159px);
    .layout {
      width: 1200px;
      margin: 0 auto;
      padding: 54px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .content {
        margin-bottom: 24px;
        height: 240px;
        display: flex;
        padding: 22px;
        width: 100%;
        background: #fafafa;
        border-radius: 4px;
        margin-right: 24px;
        box-sizing: border-box;
        cursor: pointer;
        img {
          width: 30%;
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
    }
  }
}
</style>
