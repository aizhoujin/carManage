<template>
  <div class="application">
    <!-- 标题字 -->
    <CardTitle title="适用场景" />
    <!-- 页面内容 -->
    <div class="page-content">
      <div class="left-page"></div>
      <div class="right-page">
        <div v-for="(item, index) in applicableScene" :key="index" class="text-card">
          <div class="title">
            <div></div>
            <span>{{ item.title }}</span>
          </div>
          <span>{{ item.content }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import CardTitle from '../../home/components/cardTitle.vue';
const props = defineProps({
  applicableScene: {
    type: Object,
    default: () => ({})
  }
});
const applicableScene = computed(() => props.applicableScene);
</script>

<style lang="less" scoped>
.application {
  background-image: url('../../../../assets/images/system/home/functionBack.jpg');
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  padding: 5% 16%;
  ::-webkit-scrollbar-thumb {
    background-color: transparent;
    box-shadow: none;
  }
  .page-content {
    width: 1100px;
    height: 500px;
    display: flex;
    margin-top: 80px;
    position: relative;
    .left-page {
      background-image: url('../../../../assets//images/system/home/applicationSenario.png');
      background-size: 100%;
      background-repeat: no-repeat;
      width: 65%;
      height: 100%;
      position: relative;
      left: 2%;
    }

    .right-page {
      width: 70%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      padding: 20px;
      position: absolute;
      right: 0;
      top: 2%;
      height: 92%;
      overflow-y: auto;

      .text-card {
        width: 70%;
        background: #fff;
        margin-bottom: 20px;
        border-radius: 8px;
        box-shadow: 0px 8px 20px 0px rgba(23, 61, 172, 0.1);
        padding: 20px;

        .title {
          display: flex;
          align-items: center;

          & > div {
            width: 8px;
            height: 8px;
            background: @primary-color;
            border-radius: 50%;
            margin-right: 10px;
          }

          span {
            flex: 1;
            font-size: 20px;
            font-family: Source Han Sans CN, Source Han Sans CN-Medium;
            font-weight: 500;
          }
        }

        & > span {
          font-size: 18px;
          font-family: Source Han Sans CN, Source Han Sans CN-Normal;
          font-weight: normal;
          text-align: left;
          display: block;
          margin-left: 18px;
        }
      }
      :deep(.ant-carousel) {
        border: 1px solid red;
        z-index: 99;
        width: 100%;
        height: 200%;
      }
    }
  }
}
</style>
