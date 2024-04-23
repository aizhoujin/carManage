<template>
  <div class="navTitle">
    <img :src="imgUrl" alt="" />
    <div class="title">
      {{ newTitle }}
      <div v-if="isHelpdocument" class="search">
        <a-input-search placeholder="输入关键字搜索" @search="onSearch" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  img: {
    type: String,
    default: ''
  },
  isHelpdocument: {
    type: Boolean,
    default: false
  }
});
const newTitle = computed(() => props.title);
const isHelpdocument = computed(() => props.isHelpdocument);
const newImg = computed(() => props.img);
const getAssetsImages = (name: string) => {
  return new URL(`../../../../assets/images/system/home/layouttitle-${name}.png`, import.meta.url)
    .href;
};
const imgUrl = getAssetsImages(newImg.value || '');
const onSearch = () => {
  // console.log('use value', searchValue);
  // console.log('or use this.value', value.value);
};
</script>

<style lang="less" scoped>
.navTitle {
  margin-top: -50px;
  position: relative;
  img {
    display: block;
    width: 100%;
    height: 400px;
    background-size: cover;
    background-position: left;
    background-repeat: no-repeat center;
  }
  .title {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 42px;
    font-family: Source Han Sans CN, Source Han Sans CN-Medium;
    font-weight: 500;
    text-align: center;
    color: rgba(0, 0, 0, 0.8);
    .search {
      padding: 40px;
    }
    .ant-input-affix-wrapper {
      height: 34px;
      border-radius: 20px;
    }
  }
}
</style>
