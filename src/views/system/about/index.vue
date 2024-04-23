<template>
  <div id="app-root" class="box">
    <LayoutHeader type="nav" />
    <LayoutTitleOpt :title="aboutUs.title" :img="aboutUs.pictureUrl" />
    <div class="about-box">
      <div class="description">
        <CardTitle :title="aboutUsEtesting.title" />
        <div class="description-content">
          {{ aboutUsEtesting.content }}
        </div>
        <CardTitle title="专业服务及时触达" />
        <div class="description-content">
          <div class="content-left">
            <img :src="aboutUsServicePic" alt="" />
          </div>
          <div class="content-right">
            <div v-for="(item, index) in aboutUsService" :key="index" class="content-card">
              <div class="card-title">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-mobanku" />
                </svg>
                <span>{{ item.title }}</span>
              </div>
              <div class="card-info">{{ item.content }}</div>
            </div>
          </div>
        </div>
      </div>
      <AdvantagOpt :advantage-data="aboutUsAdvantage" />
      <div class="partner">
        <CardTitle title="生态伙伴" />
        <div
          class="partner-content"
          :style="{ backgroundImage: `url(${aboutUsFriends.pictureUrl})` }"
        >
          <div class="partner-info">
            <p style="white-space: pre-wrap">{{ aboutUsFriends.title }}</p>
            <div>{{ aboutUsFriends.content }}</div>
          </div>
        </div>
      </div>
      <ExcellentCase :excellent-case-data="excellentCaseData" />
      <ContactUs />
      <LayoutFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import LayoutHeader from '@/layout/layoutHeader/index.vue';
import LayoutFooter from '@/views/system/home/components/layoutFooter.vue';
import LayoutTitleOpt from '@/views/system/home/components/LayoutTitleOpt.vue';
import AdvantagOpt from '/@/views/system/home/components/AdvantagOpt.vue';
import ExcellentCase from '@/views/system/home/components/excellentCase.vue';
import ContactUs from '@/views/system/home/components/contactUs.vue';
import CardTitle from '@/views/system/home/components/cardTitle.vue';
import { onMounted, ref, reactive } from 'vue';
import { getSecondary } from '@/api/system/index';
// const proxy: any = getCurrentInstance()?.proxy;
const aboutUs = reactive({ title: '', pictureUrl: '' });
const aboutUsEtesting = reactive({ title: '', content: '' });
const aboutUsService = ref<any>([]);
const aboutUsServicePic = ref('');
const aboutUsAdvantage = ref([]);
const aboutUsFriends = reactive({ title: '', content: '', pictureUrl: '' });
const excellentCaseData = ref([]);
const initSecondData = (key: string) => {
  getSecondary(key).then((res) => {
    let data = res.result;
    let aboutUsData = data.find((item: any) => item.keyword === 'about_us');
    aboutUs.title = aboutUsData.paperList[0].title;
    aboutUs.pictureUrl = aboutUsData.paperList[0].pictureUrl;
    let aboutUsEtestingData = data.find((item: any) => item.keyword === 'about_us_etesting');
    aboutUsEtesting.title = aboutUsEtestingData.paperList[0].title;
    aboutUsEtesting.content = aboutUsEtestingData.paperList[0].content.replace(
      /易迪森/g,
      '\n         易迪森'
    );
    let aboutUsServiceData = data.find((item: any) => item.keyword === 'about_us_service');
    aboutUsServicePic.value = aboutUsServiceData.paperList[0].pictureUrl;
    aboutUsService.value = aboutUsServiceData.paperList;
    let aboutUsAdvantageData = data.find((item: any) => item.keyword === 'about_us_advantage');
    aboutUsAdvantageData.paperList.forEach((item: any) => {
      item.content = item.content.split('$');
    });
    aboutUsAdvantage.value = aboutUsAdvantageData.paperList;
    let aboutUsFriendsData = data.find((item: any) => item.keyword === 'about_us_friends');
    aboutUsFriends.title = aboutUsFriendsData.paperList[0].title.replace('$', '\n');
    aboutUsFriends.content = aboutUsFriendsData.paperList[0].content;
    aboutUsFriends.pictureUrl = aboutUsFriendsData.paperList[0].pictureUrl;
    let excellentCasesData = data.find((item: any) => item.keyword === 'homepage_excellent_cases');
    excellentCaseData.value = excellentCasesData.paperList;
  });
};
onMounted(() => {
  initSecondData('about_us_index');
});
</script>

<style lang="less" scoped>
.box {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  min-width: 1200px;
  .about-box {
    margin: 0;
    .description {
      background-image: url('@/assets/images/system/home/contactUs_back.png');
      background-size: 100% 140%;
      background-repeat: no-repeat;
      background-position: center center;
      padding: 3% 0;
      .description-content {
        width: 60%;
        margin: 3% auto;
        font-size: 20px;
        font-family: Source Han Sans CN, Source Han Sans CN-Normal;
        color: #000000;
        line-height: 34px;
        display: flex;
        justify-content: space-around;
        gap: 2%;
        padding-bottom: 5%;
        white-space: pre-wrap;
        .content-right {
          width: 40%;
          margin-top: 14px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .content-card {
            background-image: url('@/assets/images/system/home/about_service.png');
            background-repeat: no-repeat;
            background-position: center center;
            padding: 3% 6%;
            border: 1px solid @primary-color;
            border-radius: 4px;
            height: 47%;
            .card-title {
              position: relative;
              .icon {
                font-size: 40px;
                margin-right: 10px;
              }
              span {
                font-size: 20px;
                font-family: Source Han Sans CN, Source Han Sans CN-Medium;
                font-weight: 500;
                color: #000000;
                position: absolute;
                bottom: 5px;
              }
            }

            .card-info {
              font-size: 16px;
              font-family: Source Han Sans CN, Source Han Sans CN-Normal;
              color: rgba(0, 0, 0, 0.8);
              padding: 5px 0 8px;
              line-height: 28px;
            }
          }
        }
        .content-left {
          width: 60%;
          margin-top: 14px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .partner {
      // background-image: url('/@/assets/index/advantages/back.png');
      .partner-content {
        // background-image: url('@/assets/images/system/home/about_partner.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        width: 91%;
        margin: 0 auto;
        .partner-info {
          height: 100%;
          margin: 3% 0 0 20%;
          padding: 15% 0;
          p {
            width: 320px;
            font-size: 30px;
            font-family: Source Han Sans CN, Source Han Sans CN-Medium;
            font-weight: 500;
            color: rgba(0, 0, 0, 0.8);
            line-height: 44px;
          }
          div {
            width: 194px;
            font-size: 24px;
            font-family: Source Han Sans CN, Source Han Sans CN-Regular;
            color: rgba(0, 0, 0, 0.8);
            margin-top: -10px;
          }
        }
      }
    }
  }
}
</style>
