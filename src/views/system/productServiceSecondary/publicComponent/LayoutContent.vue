<template>
  <div v-if="indexData" class="layout-content">
    <div class="content-box" :style="`background-image: url(${indexData[0].pictureUrl})`">
      <div class="content-item">
        <div class="title">{{ props.title }}</div>
        <div class="info">{{ indexData[0].content }}</div>
        <div class="btn">
          <div v-if="defaultTitle.includes(props.title)">
            <a-button
              type="primary"
              :class="`${buyChange ? '' : 'backTransparent'} cursor-pointer`"
              @click="buyClick"
            >
              立即购买
            </a-button>
            <a-button
              type="primary"
              :class="`${useChange ? '' : 'backTransparent'} cursor-pointer`"
              @click="useClick"
            >
              立即使用
            </a-button>
          </div>
          <a-button v-else type="primary" @click="consultClick">立即咨询</a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const props = defineProps({
  indexData: {
    type: Object,
    default: () => ({})
  },
  title: {
    type: String,
    default: ''
  },
  url: { type: String, default: '' }
});
const defaultTitle = ref(['应用动态监测', '动态应用安全测试', '系统性能画像']);
const indexData = computed(() => props.indexData);
const buyChange = ref(true);
const useChange = ref(false);
const consultClick = () => {
  let root = document.getElementById('cantact');
  root?.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'nearest' });
};
const buyClick = () => {
  (buyChange.value = true), (useChange.value = false);
  document.querySelector('#recommandId')?.scrollIntoView(true);
};
const goNewVue = () => {
  window.open(props.url);
};
const useClick = () => {
  (buyChange.value = false), (useChange.value = true);
  let checkToken = localStorage.getItem('accessToken');
  if (checkToken) {
    goNewVue();
  } else {
    router.push({
      path: '/login',
      query: {
        redirect: props.url
      }
    });
  }
};
</script>

<style lang="less" scoped>
.backTransparent {
  background: transparent !important;
  border: 1px solid #000 !important;
  color: #000 !important;
}
:deep(::-webkit-scrollbar-thumb) {
  box-shadow: none !important;
  background-color: transparent !important;
}
:deep(.ant-btn) {
  border: none;
  box-shadow: none;
  color: #fff;
  border-radius: 22px !important;
  width: 120px;
  font-size: 18px;
  height: 37px;
  letter-spacing: 0.5px;
  margin-right: 10px;
}
.layout-content {
  // height: 90%;

  .content-box {
    --antd-wave-shadow-color: transparent !important;
    height: calc(100vh - 62px);
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    overflow-y: auto;

    .content-item {
      display: flex;
      flex-direction: column;
      padding-top: 13%;
      width: 1200px;
      overflow: auto;
      margin: 0 auto;
      .title {
        font-size: 41px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.8);
      }

      .info {
        width: 600px;
        font-size: 18px;
        color: #000000;
        line-height: 32px;
        padding: 15px 0;
        font-family: Source Han Sans CN-Normal;
        height: 200px;
        overflow-y: auto;
      }
    }
  }
}
</style>
