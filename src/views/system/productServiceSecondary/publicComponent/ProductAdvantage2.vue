<template>
  <div class="advantage">
    <!-- 标题字 -->
    <CardTitle title="产品优势" />
    <!-- 页面内容 -->
    <div class="page-content">
      <div class="left">
        <div class="page-top">
          <div class="font-top text">
            <span>{{ productAdvantage[0]?.title }}</span>
            <span>{{ productAdvantage[0]?.content }}</span>
          </div>
        </div>
      </div>
      <div class="pagecenter"></div>
      <div class="right">
        <div class="page-top">
          <div class="font-top text">
            <span>{{ productAdvantage[1]?.title }}</span>
            <span>{{ productAdvantage[1]?.content }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import CardTitle from '../../home/components/cardTitle.vue';
const props = defineProps({
  productAdvantage: {
    type: Object,
    default: () => ({})
  }
});
const productAdvantage = computed(() => props.productAdvantage);
</script>

<style lang="less" scoped>
.text {
  // width: 60%;
  & > span:nth-child(1) {
    font-size: 20px;
    font-family: Source Han Sans CN, Source Han Sans CN-Medium;
    font-weight: 500;
    line-height: 22px;
    display: block;
    margin-bottom: 30px;
  }

  & > span:nth-child(2) {
    font-size: 18px;
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
    font-weight: 400;
    display: block;
  }
}

.advantage {
  background-image: url('../../../../assets/images/system/home/productAdvantageBack.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .page-content {
    width: 1200px;
    height: 500px;
    margin-top: 80px;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
    background-image: url('../../../../assets/images/system/home/productAdvantage2.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 45%;
    .left {
      margin-top: 80px;
      width: 40%;
      .font-top {
        & > span:nth-child(1) {
          text-align: right;
        }

        & > span:nth-child(2) {
          text-align: left !important;
        }
      }

      .page-bottom {
        display: flex;

        .font-bottom {
          position: relative;
          bottom: -20%;

          & > span:nth-child(1) {
            text-align: right;
          }

          & > span:nth-child(2) {
            text-align: left !important;
          }
        }
      }
    }

    .pagecenter {
      width: 80%;
    }

    .right {
      margin-top: 80px;
      width: 40%;
    }

    .page-bottom {
      display: flex;

      .font-bottom {
        position: relative;
        bottom: -20%;
      }
    }
  }
}
</style>
