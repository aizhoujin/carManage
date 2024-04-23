<template>
  <div id="recommandId" class="recommand">
    <!-- 标题字 -->
    <CardTitle title="规格推荐" />
    <!-- 页面内容 -->
    <div class="page-content">
      <div v-for="(item, index) in recommandData" :key="index" class="page-item">
        <div class="card-top relative">
          <img
            src="../../../../assets/images/system/home/recommandCount.png"
            alt=""
            class="absolute !w-[90px] right-0 top-0"
          />
          <span>系统性能画像</span>
          <div class="price">
            <span>￥{{ item.recommendPrice }}</span>
            <span>/{{ item.quota }}次</span>
          </div>
          <div class="text-[#15419D] text-lg font-title opacity-80 mt-2">
            <span>{{ item.name }}</span>
          </div>
        </div>
        <div class="card-bottom">
          <div class="top-font flex">
            <div>
              <i class="iconfont icon-dui"></i>
              <span>500并发</span>
            </div>
            <div class="ml-60px">
              <i class="iconfont icon-dui"></i>
              <span>{{ item.name === '性能画像TOP1交易速测' ? 1 : 3 }}笔业务</span>
            </div>
          </div>
          <div class="top-font">
            <i class="iconfont icon-dui"></i>
            <span>测试活动</span>
          </div>
          <div class="top-font">
            <i class="iconfont icon-dui"></i>
            <span>测试监控</span>
          </div>
          <div class="top-font">
            <i class="iconfont icon-dui"></i>
            <span>测试报告</span>
          </div>
          <div class="w-full flex justify-center">
            <a-button type="primary" class="cursor-pointer" @click="emitBuy">立即购买</a-button>
          </div>
        </div>
      </div>
      <div class="page-item">
        <div class="card-top">
          <span>敬请期待</span>
          <div class="price">
            <span></span>
            <span>敬请期待</span>
          </div>
          <div class="price-bottom">
            <span>敬请期待</span>
          </div>
        </div>
        <div class="card-bottom">
          <div class="flex">
            <div class="top-font">
              <i class="iconfont icon-dui"></i>
              <span>敬请期待</span>
            </div>
            <div class="top-font">
              <i class="iconfont icon-dui"></i>
              <span>敬请期待</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CardTitle from '../../home/components/cardTitle.vue';
const props = defineProps({
  recommandData: {
    type: Object,
    default: () => ({})
  }
});
const emitBuy = () => {
  document.querySelector('#cantact')?.scrollIntoView(true);
};
</script>

<style lang="less" scoped>
.recommand {
  background-image: url('../../../../assets/images/system/home/functionBack.jpg');
  width: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  padding: 5% 16%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .page-content {
    width: 1100px;
    display: flex;
    justify-content: space-between;
    margin-top: 80px;
    margin-bottom: 30px;

    .page-item {
      width: 30%;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0px 8px 24px 0px rgba(23, 61, 172, 0.1);
      margin-right: 5px;
      white-space: nowrap;

      .card-top {
        width: 100%;
        height: 178px;
        padding: 30px 30px 0 30px;
        background: url('../../../../assets//images/system/home/recommandBg.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        & > span {
          font-size: 24px;
          font-family: Source Han Sans CN, Source Han Sans CN-Medium;
          font-weight: 500;
          color: #15419d;
        }

        .price {
          padding-top: 8px;

          & > span:nth-child(1) {
            font-size: 36px;
            font-family: Source Han Sans CN, Source Han Sans CN-Medium;
            font-weight: 500;
            color: @primary-color;
          }

          & > span:nth-child(2) {
            font-size: 20px;
            font-family: Source Han Sans CN, Source Han Sans CN-Medium;
            font-weight: 500;
            color: #000;
          }
        }

        .price-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;

          & > span:nth-child(1) {
            opacity: 0.6;
            font-size: 16px;
            font-family: Source Han Sans CN, Source Han Sans CN-Regular;
            font-weight: 400;
            text-align: left;
            color: rgba(0, 0, 0, 0.8);
            margin-right: 20px;
            text-decoration: line-through;
          }

          & > span:nth-child(2) {
            font-size: 18px;
            font-family: Source Han Sans CN, Source Han Sans CN-Medium;
            font-weight: 500;
            text-align: left;
            color: #15419d;
          }
        }
      }

      .card-bottom {
        padding: 30px 40px 10px 40px;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 260px;

        .top-font {
          width: 100%;
          margin-bottom: 10px;

          i {
            color: @primary-color;
            font-size: 20px;
            margin-right: 5px;
          }

          span {
            font-size: 18px;
            font-family: Source Han Sans CN, Source Han Sans CN-Normal;
            font-weight: normal;
            text-align: left !important;
            display: inline-block;
          }
        }

        button {
          width: 100%;
          height: 40px;
          border-radius: 8px;
          color: #fff;
          border: none;
          margin-top: 10px;
          font-size: 18px;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
