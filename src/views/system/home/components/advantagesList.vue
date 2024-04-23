<template>
  <div class="advantages">
    <CardTitle title="了解我们的优势" />
    <div class="content">
      <div v-for="(item, index) in props.advantageData" :key="index" class="card-item">
        <div class="head-back">
          <img src="@/assets/images/system/home/advantages_reg.png" alt="" />
          <span>{{ item.title }}</span>
        </div>
        <img :src="item.pictureUrl" alt="" />
        <!-- 文本内容 -->
        <div class="font-content">
          <div v-for="(items, i) in item.content.split(';')" :key="i">
            <div></div>
            <span>{{ items }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardTitle from './cardTitle.vue';
import type { IPaper } from '@/modules/system/home';
interface IProps {
  advantageData: IPaper[];
}
const props = defineProps<IProps>();
</script>

<style lang="less" scoped>
.advantages {
  background-image: url('@/assets/images/system/home/advantages_back.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3%;

  .content {
    margin-top: 10%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 1050px;
    position: relative;
    right: 24px;
    .card-item {
      width: 410px;
      position: relative;
      min-height: 470px;
      // height: 470px;
      background: rgba(255, 255, 255, 0.75);
      border-radius: 8px;
      box-shadow: 0px 8px 24px 0px rgba(23, 61, 172, 0.1);
      margin-bottom: 10%;
      //   MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
      .head-back {
        width: 100%;
        position: relative;

        & > img:nth-child(1) {
          width: 100%;
        }

        span {
          position: absolute;
          top: 50%;
          left: 35%;
          transform: translate(-55%, -50%);
          font-size: 29px;
          font-family: Source Han Sans CN, Source Han Sans CN-Medium;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
          white-space: nowrap;
        }
      }

      & > img {
        width: 46%;
        position: absolute;
        top: -61px;
        right: -20%;
      }

      .font-content {
        padding: 3vw 1.8vw;

        & > div {
          display: flex;
          align-items: flex-start;
          margin-bottom: 18px;

          & > div {
            width: 8px;
            height: 8px;
            background: @primary-color;
            border-radius: 50%;
            margin: 10px 10px 0 7px;
          }

          & > span {
            flex: 1;
            font-size: 20px;
            font-family: Source Han Sans CN, Source Han Sans CN-Normal;
            font-weight: normal;
            display: block;
            line-height: 32px;
            text-overflow: auto;
          }
        }
      }
    }
  }
}
</style>
