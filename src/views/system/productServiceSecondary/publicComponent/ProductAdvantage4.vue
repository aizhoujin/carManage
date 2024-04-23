<template>
  <!-- 四个分支布局 -->
  <div class="advantage">
    <!-- 标题字 -->
    <CardTitle :title="props.advantageTitle" />
    <!-- 页面内容 -->
    <div class="index">
      <div class="page-content">
        <div class="left">
          <div class="page-top">
            <div class="font-top text">
              <span>{{ data[0].title }}</span>
              <span>{{ data[0].content }}</span>
            </div>
          </div>
          <div class="page-bottom">
            <div class="font-bottom text">
              <span>{{ data[1].title }}</span>
              <span>{{ data[1].content }}</span>
            </div>
          </div>
        </div>
        <div class="pagecenter"></div>
        <div class="right">
          <div class="page-top">
            <div class="font-top text">
              <span>{{ data[2].title }}</span>
              <span>{{ data[2].content }}</span>
            </div>
          </div>
          <div class="page-bottom">
            <div class="font-bottom text">
              <span>{{ data[3].title }}</span>
              <span>{{ data[3].content }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import CardTitle from '/@/views/system/home/components/cardTitle.vue';
const props = defineProps({
  productAdvantage: {
    type: Object,
    default: () => ({})
  },
  advantageTitle: {
    type: String,
    default: ''
  }
});
const data = computed(() => props.productAdvantage);
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
  .index {
    display: flex;
    flex-direction: column;
    align-items: center;
    .page-content {
      width: 1200px;
      height: 550px;
      margin-top: 20px;
      display: flex;
      justify-content: space-evenly;
      background-image: url('../../../../assets/images/system/home/productAdvantage4.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 40%;

      .left {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 690px;
        height: 480px;
        position: relative;
        top: 100px;
        .page-top {
          display: flex;
          .font-top {
            & > span:nth-child(1) {
              text-align: right;
            }

            & > span:nth-child(2) {
              text-align: justify !important;
            }
          }
        }

        .page-bottom {
          position: absolute;
          top: 260px;
          display: flex;

          .font-bottom {
            & > span:nth-child(1) {
              text-align: right;
            }

            & > span:nth-child(2) {
              text-align: justify !important;
            }
          }
        }
      }

      .pagecenter {
        width: 1100px;
      }

      .right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 690px;
        height: 480px;
        position: relative;
        top: 100px;
        .page-top {
          display: flex;
        }

        .page-bottom {
          display: flex;
          position: absolute;
          top: 260px;
        }
      }
    }
  }
}
</style>
