<template>
  <!-- 两张白底卡片布局 -->
  <div class="function">
    <!-- 标题字 -->
    <CardTitle title="产品功能" />
    <!-- 页面内容 -->
    <div class="page-content">
      <div v-for="(item, index) in productFeatures" :key="index" class="page-item">
        <div class="icon">
          <i v-if="Number(index) === 0" class="iconfont icon-zhongduanjiankong"></i>
          <i v-if="Number(index) === 1" class="iconfont icon-jiankongqu"></i>
        </div>
        <span>{{ item.title }}</span>
        <div></div>
        <span>{{ item.content }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import CardTitle from '../../home/components/cardTitle.vue';
const props = defineProps({
  productFeatures: {
    type: Object,
    default: () => ({})
  }
});
const productFeatures = computed(() => props.productFeatures);
const justifyContent = computed(() =>
  productFeatures.value.length > 1 ? 'space-between' : 'center'
);
</script>

<style lang="less" scoped>
.function {
  background-image: url('../../../../assets/images/system/home/functionBack.jpg');
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  padding: 3% 16%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .page-content {
    width: 800px;
    display: flex;
    justify-content: v-bind(justifyContent);
    margin-top: 10%;
    margin-bottom: 4%;
    .page-item {
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #fff;
      padding: 35px 40px 85px 40px;
      border-radius: 8px;
      box-shadow: 0px 8px 24px 0px rgba(23, 61, 172, 0.1);
      margin-right: 5px;

      .icon {
        width: 50px;
        height: 50px;
        border: 1px solid @primary-color;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;

        i {
          font-size: 30px;
          color: @primary-color;
        }
      }

      & > span:nth-child(2) {
        font-size: 24px;
        font-family: Source Han Sans CN, Source Han Sans CN-Medium;
        font-weight: 500;
        margin-bottom: 18px;
      }

      & > div:nth-child(3) {
        width: 85%;
        border-top: 2px solid rgb(88, 87, 87);
        margin-bottom: 20px;
        opacity: 0.1;
      }

      & > span:nth-child(4) {
        font-size: 16px;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 500;
        line-height: 37px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
