<template>
  <div class="style-box">
    <div class="cantainer">
      <div class="type-center">
        <!-- 标题字 -->
        <CardTitle title="服务流程" />
        <div class="service-process">
          <a-steps label-placement="vertical" :initial="0">
            <a-step v-for="(item, index) in serviceProcess" :key="index" disabled>
              <template #icon>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-danxuan-yixuan-copy" />
                </svg>
              </template>
              <template #title>
                <img :src="item.pictureUrl" alt="" />
              </template>
              <template #subTitle>{{ item.title }}</template>
              <template #description>
                <div v-for="(ite, _index) in item.content.split('$')" :key="_index" class="heng">
                  <a-badge status="processing" />
                  <span>{{ ite }}</span>
                </div>
              </template>
            </a-step>
          </a-steps>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import CardTitle from '../../home/components/cardTitle.vue';
const props = defineProps({
  serviceProcess: {
    type: Object,
    default: () => ({})
  }
});
const serviceProcess = computed(() => props.serviceProcess);
</script>

<style lang="less" scoped>
.style-box {
  background-image: url('../../../../assets/images/system/home/serviceProcessBg.png');
  width: 100%;
  height: 44vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  // overflow-y: auto;

  .cantainer {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
    z-index: 10;
    overflow-x: hidden;
    overflow-y: auto;
    .type-center {
      padding-top: 3%;
      width: 1100px;
      margin: 0 auto;
      .service-process {
        margin-top: 200px;
      }
    }
  }
  :deep(.ant-steps-item-wait > .ant-steps-item-container > .ant-steps-item-tail::after) {
    background-color: rgba(0, 0, 0, 0.2);
  }
  :deep(.ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-tail::after) {
    background-color: rgba(0, 0, 0, 0.2);
  }
  :deep(.ant-steps-item-container) {
    &:hover {
      cursor: auto;
    }
  }
  :deep(.ant-steps-item-title) {
    display: flex;
    flex-direction: column;
    img {
      width: 50px;
      position: absolute;
      top: -130px;
      right: 34px;
    }
    .ant-steps-item-subtitle {
      position: relative;
      left: 12px;
      flex: 1;
      font-size: 22px;
      font-family: Source Han Sans CN-Medium;
      font-weight: 500;
      text-align: left;
      color: #000000;
      margin-bottom: 10px;
      margin-top: 10px;
      white-space: nowrap;
    }
  }
  .ant-steps-item {
    margin-bottom: 30px;
    :deep(.ant-steps-item-description) {
      position: relative;
      left: 12px;
      font-size: 18px;
      font-family: Source Han Sans CN-Regular;
      font-weight: 400;
      color: #000000 !important;
      width: 200px;
      text-align: left;
      .heng {
        display: flex;
        margin-bottom: 10px;
        position: relative;
        right: 21px;
        span:nth-child(1) {
          margin-right: 8px;
          line-height: 32px;
        }
        span:nth-child(2) {
          text-align: left;
          display: block;
          line-height: 30px;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
