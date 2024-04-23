<template>
  <div class="navTitle">
    <img :src="newImg" alt="" />
    <div class="title">{{ newTitle }}</div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  img: {
    type: String,
    default: ''
  }
});
const newTitle = computed(() => props.title);
const newImg = computed(() => props.img);
</script>

<style lang="less" scoped>
.navTitle {
  margin-top: -50px;
  position: relative;
  img {
    display: block;
    width: 100%;
    height: 485px;
    background-size: cover;
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
  }
}
</style>
