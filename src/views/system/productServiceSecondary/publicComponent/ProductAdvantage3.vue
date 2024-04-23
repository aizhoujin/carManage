<template>
  <div class="advantage">
    <!-- 标题字 -->
    <CardTitle title="产品优势" />
    <!-- 页面内容 -->
    <div class="page-content">
      <div class="left">
        <div class="page-top">
          <div class="font-top text">
            <span>{{ productAdvantage[0].title }}</span>
            <span>{{ productAdvantage[0].content }}</span>
          </div>
        </div>
      </div>
      <div class="pagecenter"></div>
      <div class="right">
        <div class="page-top">
          <div class="font-top text">
            <span>{{ productAdvantage[1].title }}</span>
            <span>{{ productAdvantage[1].content }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="right bottom-content">
      <div class="page-top">
        <div class="font-top text">
          <span>{{ productAdvantage[2].title }}</span>
          <span>{{ productAdvantage[2].content }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import CardTitle from '../../home/components/cardTitle.vue';
const props = defineProps({
  productAdvantage: {
    type: Object,
    default: () => ({})
  }
});
const productAdvantage = computed(() => props.productAdvantage);
// console.log('productAdvantage :>> ', productAdvantage.value);
</script>

<style lang="less" scoped>
.text {
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
  padding: 3% 0;
  .page-content {
    width: 1200px;
    height: 520px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    background-image: url('../../../../assets/images/system/home/productAdvantage3.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%;

    .left {
      margin: 7% 0 0 0;
      width: 500px;
      .page-top {
        .font-top {
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
      width: 100%;
    }

    .right {
      margin: 11% 0 0 0;
      width: 500px;
    }
  }
  .bottom-content {
    display: flex;
    justify-content: center;
    width: 100%;
    position: relative;
    top: 15px;
    .page-top {
      width: 310px;
      position: relative;
      left: 8%;
    }
  }
}
</style>
