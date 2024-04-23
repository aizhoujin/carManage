<template>
  <div class="application">
    <!-- 标题字 -->
    <CardTitle title="适用场景" />
    <!-- 页面内容 -->
    <div class="page-content">
      <div class="left-page"></div>
      <div class="right-page">
        <div v-for="item in applicableScenarios" :key="item" class="text-card">
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

<script setup lang="ts">
import { computed } from 'vue';
import CardTitle from '/@/views/system/home/components/cardTitle.vue';
const props = defineProps({
  applicableScenarios: {
    type: Object,
    default: () => ({})
  }
});
const applicableScenarios = computed(() => props.applicableScenarios);
</script>

<style lang="less" scoped>
.application {
  background-image: url('../../../../assets/images/system/home/functionBack.jpg');
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  padding: 5% 16%;

  .page-content {
    width: 1100px;
    height: 500px;
    display: flex;
    margin-top: 80px;
    position: relative;
    .left-page {
      background-image: url('../../../../assets/images/system/home/applicationSenario.png');
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: center;
      width: 65%;
      height: 100%;
      position: relative;
      left: 4%;
    }

    .right-page {
      width: 65%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      padding: 20px;
      position: absolute;
      right: 13%;
      height: 100%;

      .text-card {
        width: 75%;
        background: #fff;
        margin-bottom: 20px;
        border-radius: 8px;
        box-shadow: 0px 8px 20px 0px rgba(23, 61, 172, 0.1);
        padding: 20px;
        position: relative;
        left: 25%;

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
        &:nth-last-child(1) {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
