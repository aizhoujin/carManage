<template>
  <!-- 适用场景两张卡片 -->
  <div class="application">
    <!-- 标题字 -->
    <CardTitle title="适用场景" />
    <!-- 页面内容 -->
    <div class="page-content">
      <div class="left-page"></div>
      <div class="right-page">
        <div v-for="(item, index) in applicableScenes" :key="index" class="text-card">
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
const applicableScenes = computed(() => props.applicableScene);
// console.log('222 :>> ', applicableScenes.value);
</script>

<style lang="less" scoped>
.application {
  background-image: url('@/assets/images/system/home/functionBack.jpg');
  // background-image: url('@/assets/images/system/home/solution-company6.png');
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  padding: 3% 16%;

  ::-webkit-scrollbar-thumb {
    background-color: transparent;
    box-shadow: none;
  }
  .page-content {
    width: 1200px;
    height: 500px;
    display: flex;
    margin-top: 80px;
    margin-bottom: 50px;
    position: relative;

    .left-page {
      background-image: url('../../../../assets/images/system/home/applicationSenario.png');
      background-size: 100%;
      background-repeat: no-repeat;
      width: 65%;
      height: 100%;
      position: relative;
    }

    .right-page {
      width: 62%;
      display: flex;
      flex-direction: column;
      // 修改此处
      justify-content: center;
      align-items: flex-end;
      padding: 20px;
      position: absolute;
      right: 6%;
      height: 500px;
      overflow-y: auto;

      .text-card {
        width: 74%;
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
        &:nth-last-child(1) {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
