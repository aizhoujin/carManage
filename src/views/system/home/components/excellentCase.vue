<template>
  <div class="excellent">
    <!-- 标题字 -->
    <CardTitle title="优秀案例与成功实践" />
    <!-- banner区 -->
    <div class="medium">
      <Carousel autoplay>
        <div v-for="(item, index) in props.excellentCaseData" :key="index" class="medium-item">
          <img :src="item.pictureUrl" alt="" />
          <div class="item-card">{{ item.content }}</div>
        </div>
      </Carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Carousel } from 'ant-design-vue';
import CardTitle from './cardTitle.vue';
import type { IPaper } from '@/modules/system/home';
interface IProps {
  excellentCaseData: IPaper[];
}
const props = defineProps<IProps>();
</script>

<style lang="less" scoped>
.excellent {
  background-image: url('@/assets/images/system/home/excellentcase_highbg.png');
  background-size: 100% 100%;
  background-position: center;
  padding: 1vw 5vw 4vw 5vw;

  .medium {
    background-image: url('@/assets/images/system/home/excellentcase_mediubg.png');
    background-size: 100% 100%;
    background-position: center;
    height: 500px;
    display: flex;
    padding: 1vw 9vw 4vw 9vw;
    margin-top: 5vw;
    position: relative;
    .medium-item {
      margin-top: 1vw;
      position: relative;
      display: flex;
      align-items: center;
      height: 450px;
      padding: 0 4vw;
      & > img:nth-child(1) {
        width: 35%;
        position: absolute;
        bottom: 30%;
      }

      .item-card {
        box-sizing: border-box;
        width: 45%;
        padding: 4% 0;
        // background-image: url('../../../../assets/index/excellentcase/fontb.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center center;
        text-overflow: wrap;
        font-family: Source Han Sans CN-Normal;
        font-size: 18px;
        font-weight: normal;
        line-height: 37px;
        position: absolute;
        right: 6%;
        bottom: 28%;
        border-radius: 8px;
        z-index: 999;
        text-indent: 2em;
        //   box-shadow: 0px 8px 20px 0px rgba(23, 61, 172, 0.05),
        //     0px 3px 6px 0px rgba(214, 213, 213, 0.02) inset;
      }
    }

    :deep(.ant-carousel) {
      width: 100%;
    }
  }

  :deep(.ant-carousel) {
    height: 100%;

    .slick-slider {
      height: 100%;
    }

    .slick-dots li.slick-active button {
      background: @primary-color;
      height: 5px;
      width: 50px;
      border-radius: 3px;
    }

    .slick-dots {
      justify-content: center;
      margin-right: 0;
      margin-left: 0;
      position: absolute;
      bottom: 5px;

      li {
        width: 50px;
        border-radius: 3px;
        background: #fff;

        .slick-active {
          width: 50px;
          border-radius: 3px;
          box-shadow: 0 14px 42px 0 rgba(23, 61, 172, 0.12);
        }

        button {
          width: 100%;
          height: 5px;
        }
      }
    }
  }
}
</style>
