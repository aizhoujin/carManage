<template>
  <div class="solution">
    <CardTitle title="挑选适合你的解决方案" />
    <div class="content">
      <div class="top-content">
        <span :class="index ? 'active' : 'default'" @click="chooseGeneral">通用解决方案</span>
        <span :class="index ? 'default' : 'active'" @click="chooseIndustry">行业解决方案</span>
      </div>
      <div class="bottom">
        <div v-if="index" class="first-card">
          <div class="item-card">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-wangzhanzhuanhua" />
            </svg>
            <span>{{ props.solutionData[0].title }}</span>
            <span>{{ props.solutionData[0].content }}</span>
            <button @click="router.push('/solution/performance')">了解更多</button>
            <img src="@/assets/images/system/home/solution_performmence.png" alt="" />
          </div>
          <div class="item-card">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-wangzhanzhuanhua" />
            </svg>
            <span>{{ props.solutionData[1].title }}</span>
            <span>{{ props.solutionData[1].content }}</span>
            <button @click="router.push('/solution/security')">了解更多</button>
            <img src="@/assets/images/system/home/solution_safe.png" alt="" />
          </div>
        </div>
        <div v-else class="first-card">
          <div class="item-card">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-wangzhanzhuanhua" />
            </svg>
            <span>{{ props.solutionData[2].title }}</span>
            <span>{{ props.solutionData[2].content }}</span>
            <button @click="router.push('/solution/manufacture')">了解更多</button>
            <img src="@/assets/images/system/home/solution_made.png" alt="" />
          </div>
          <div class="item-card">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-wangzhanzhuanhua" />
            </svg>
            <span>{{ props.solutionData[3].title }}</span>
            <span>{{ props.solutionData[3].content }}</span>
            <button @click="router.push('/solution/softpark')">了解更多</button>
            <img src="@/assets/images/system/home/solution_CBD.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CardTitle from './cardTitle.vue';
import { useRouter } from 'vue-router';
import type { IPaper } from '@/modules/system/home';
interface IProps {
  solutionData: IPaper[];
}
const props = defineProps<IProps>();

const router = useRouter();

const index = ref(true);

const chooseGeneral = () => {
  index.value = true;
};
const chooseIndustry = () => {
  index.value = false;
};
</script>

<style lang="less" scoped>
.solution {
  --antd-wave-shadow-color: transparent !important;
  background-image: url('@/assets/images/system/home/solution_back.jpg');
  background-size: 100% 100%;
  background-position: center center;
  width: 100%;
  height: 100%;
  padding: 3% 0;
  .content {
    padding: 4% 0;
    margin: 0 auto;
    width: 1100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .top-content {
      display: flex;
      width: 45%;
      justify-content: center;
      margin-bottom: 50px;
      span {
        display: block;
        text-align: center;
        width: 280px;
        line-height: 60px;
        font-size: 24px;
        font-family: Source Han Sans CN-Regular;
        font-weight: 400;
        border-radius: 12px;
        margin-right: 100px;
        background: #fff;

        &:hover {
          cursor: pointer;
        }
      }
      span:nth-child(2) {
        margin-right: 0;
      }
      .active {
        color: @primary-color;
        box-shadow: 0px 4px 12px 0px rgba(23, 61, 172, 0.05);
      }
      .default {
        color: #000;
        box-shadow: 0px 4px 12px 0px rgba(23, 61, 172, 0.02);
      }
    }

    .bottom {
      .first-card {
        width: 100%;
        display: flex;
        justify-content: center;

        .item-card {
          width: 46%;
          height: 340px;
          margin-right: 100px;
          background: #fcffff;
          padding: 2% 3%;
          position: relative;
          margin-bottom: 4%;
          border-radius: 8px;
          background-size: 100% 100%;
          &:hover {
            background: #fff;
            cursor: pointer;
            box-shadow: 0px 8px 24px 0px rgba(23, 61, 172, 0.1);
            background-size: cover;
          }

          &:hover > button {
            background: @primary-color;
            color: #fff;
          }
          &:hover > img {
            width: 60%;
          }
          & > svg {
            margin-right: 10px;
            font-size: 22px;
          }

          & > span:nth-child(2) {
            font-size: 20px;
            font-weight: 500;
            font-family: Source Han Sans CN-Medium;
          }

          & > span:nth-child(3) {
            font-size: 16px;
            font-weight: 500;
            display: block;
            margin-top: 20px;
            font-family: Source Han Sans CN-Regular;
            font-weight: 400;
          }

          button {
            background: transparent;
            white-space: nowrap;
            color: @primary-color;
            font-size: 18px;
            font-weight: 400;
            padding: 2px 20px;
            position: absolute;
            left: 5%;
            bottom: 12%;
            border: 1.5px solid @primary-color;
            border-radius: 18px;
            width: 120px;
            height: 36px;
          }
          img {
            width: 48%;
            position: relative;
            left: 45%;
            bottom: 4%;
          }
        }
        & > div:nth-child(2) {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
