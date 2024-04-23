<template>
  <div class="proservice">
    <!-- 标题字 -->
    <CardTitle title="提供全生命周期产品与服务" />
    <!-- 结构部分 -->
    <div class="content">
      <div class="main">
        <div class="imgs">
          <div class="top-content">
            <div class="top-item"></div>
            <div class="top-item">
              <a-timeline>
                <a-timeline-item>
                  <span @click="toSecondary('expertConsultation')">需求质量专家咨询</span>
                </a-timeline-item>
                <a-timeline-item class="reset" />
              </a-timeline>
            </div>
            <div class="top-item"></div>
            <div class="top-item">
              <a-timeline>
                <a-timeline-item>
                  <span @click="toSecondary('interface')">接口性能测试</span>
                </a-timeline-item>
                <a-timeline-item>
                  <span @click="toSecondary('functionalityTest')">接口功能测试</span>
                </a-timeline-item>
                <a-timeline-item>
                  <span @click="toSecondary('codesecurity')">代码安全扫描</span>
                </a-timeline-item>
                <a-timeline-item class="reset" />
              </a-timeline>
            </div>
            <div class="top-item"></div>
            <div class="top-item">
              <a-timeline>
                <a-timeline-item>
                  <span @click="toSecondary('useraccept')">用户验收测试</span>
                </a-timeline-item>
                <a-timeline-item class="reset" />
              </a-timeline>
            </div>
          </div>
          <div class="center-img">
            <span class="title">规划</span>
            <img src="@/assets/images/system/home/proservice_row1.png" alt="" />
            <span class="title">需求</span>
            <img src="@/assets/images/system/home/proservice_row1.png" alt="" />
            <span class="title">设计</span>
            <img src="@/assets/images/system/home/proservice_row1.png" alt="" />
            <span class="title">开发</span>
            <img
              src="@/assets/images/system/home/proservice_row1.png"
              alt=""
              style="position: relative; right: 16px"
            />
            <span class="title" style="position: relative; right: 28px">测试</span>
            <img
              src="@/assets/images/system/home/proservice_row1.png"
              alt=""
              style="position: relative; right: 30px"
            />
            <span class="title" style="position: relative; right: 30px">上线</span>
            <img
              src="@/assets/images/system/home/proservice_row1.png"
              alt=""
              style="position: relative; right: 30px"
            />
            <span class="title" style="position: relative; right: 40px">运营</span>
          </div>
          <div class="under-content">
            <div class="bottom-item">
              <a-timeline>
                <a-timeline-item class="reset" />
                <a-timeline-item>
                  <span @click="toSecondary('consult')">质量管控方案咨询</span>
                </a-timeline-item>
              </a-timeline>
            </div>
            <div class="bottom-item"></div>
            <div class="bottom-item">
              <a-timeline>
                <a-timeline-item class="reset" />
                <a-timeline-item>
                  <span @click="toSecondary('designReview')">设计方案专家咨询</span>
                </a-timeline-item>
              </a-timeline>
            </div>
            <div class="bottom-item"></div>
            <div class="bottom-item">
              <a-timeline>
                <a-timeline-item class="reset" />
                <a-timeline-item>
                  <span @click="toSecondary('system')">系统性能画像</span>
                </a-timeline-item>
                <a-timeline-item>
                  <span @click="toSecondary('')">专业性能测试</span>
                </a-timeline-item>
                <a-timeline-item>
                  <span @click="toSecondary('stabilityTest')">稳定性测试</span>
                </a-timeline-item>
              </a-timeline>
            </div>
            <div class="bottom-item">
              <a-timeline>
                <a-timeline-item>
                  <span @click="toSecondary('professionservice')">性能专家服务</span>
                </a-timeline-item>
                <a-timeline-item>
                  <span @click="toSecondary('dynamic')">动态应用安全测试</span>
                </a-timeline-item>
                <a-timeline-item>
                  <span @click="toSecondary('mobile')">移动应用测试</span>
                </a-timeline-item>
                <a-timeline-item>
                  <span @click="toSecondary('procedure')">测试过程管理</span>
                </a-timeline-item>
                <a-timeline-item>
                  <span @click="toSecondary('sittest')">SIT测试服务</span>
                </a-timeline-item>
              </a-timeline>
            </div>
            <div class="bottom-item">
              <a-timeline>
                <a-timeline-item class="reset" />
                <a-timeline-item>
                  <span @click="toSecondary('monitor')">应用动态监测</span>
                </a-timeline-item>
              </a-timeline>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardTitle from './cardTitle.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const toSecondary = (key: string) => {
  if (key) {
    router.push(`/product/${key}`);
  } else {
    router.push(`/product`);
  }
};
</script>

<style lang="less" scoped>
.proservice {
  background-image: url('@/assets/images/system/home/proservice_back.jpg');
  width: 100%;
  height: 100%;
  background-size: 110% 110%;
  background-repeat: no-repeat;
  background-position: center center;
  padding: 3% 0;
  :deep(.ant-timeline-item-head) {
    border: none;
    width: 8px;
    height: 8px;
    margin-top: 10px;
  }
  :deep(.ant-timeline) {
    .ant-timeline-item {
      padding-bottom: 5px;
      &:not(.reset):hover {
        .ant-timeline-item-head {
          background: @primary-color !important;
        }
      }
    }

    .ant-timeline-item-last {
      padding-bottom: 0;
    }
    .ant-timeline-item-last > .ant-timeline-item-content {
      min-height: 20px;
    }

    .ant-timeline-item-tail {
      top: 0;
      left: 3px;
      height: 100%;
      margin-top: 10px;
    }

    .ant-timeline-item-content {
      font-size: 16px;
      font-family: Source Han Sans CN, Source Han Sans CN-Normal;
      color: #000000;
      letter-spacing: 0.5px;
      line-height: 40px;
      left: 5px;
      & > span {
        &:hover {
          cursor: pointer;
          color: @primary-color;
        }
      }
    }
  }

  // 内容样式
  .content {
    padding: 1% 0 4% 0;
    margin: 5% auto;
    width: 1200px;
    .main {
      // 图片
      .imgs {
        .top-content {
          width: 100%;
          display: flex;
          .top-item {
            width: calc(100% / 6);
            height: 200px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            .ant-timeline {
              position: relative;
              top: 7px;

              :deep(.ant-timeline-item:nth-last-child(1)) {
                .ant-timeline-item-head {
                  background: #b0dbff;
                }
                .ant-timeline-item-tail {
                  border-left: 2px solid;
                  border-image: linear-gradient(rgba(176, 219, 255, 0.9), rgba(176, 219, 255, 1)) 1;
                }
              }
              :deep(.ant-timeline-item:nth-last-child(2)) {
                .ant-timeline-item-head {
                  background: rgba(176, 219, 255, 0.9);
                }
                .ant-timeline-item-tail {
                  border-left: 2px solid;
                  border-image: linear-gradient(rgba(176, 219, 255, 0.9), rgba(176, 219, 255, 1)) 1;
                }
              }
              :deep(.ant-timeline-item:nth-last-child(3)) {
                .ant-timeline-item-head {
                  background: rgba(176, 219, 255, 0.6);
                }
                .ant-timeline-item-tail {
                  border-left: 2px solid;
                  border-image: linear-gradient(rgba(176, 219, 255, 0.4), rgba(176, 219, 255, 0.6))
                    1;
                }
              }
              :deep(.ant-timeline-item:nth-last-child(4)) {
                .ant-timeline-item-head {
                  background: rgba(176, 219, 255, 0.6);
                }
                .ant-timeline-item-tail {
                  border-left: 2px solid;
                  border-image: linear-gradient(rgba(176, 219, 255, 0.4), rgba(176, 219, 255, 0.6))
                    1;
                }
              }
              :deep(.ant-timeline-item:nth-last-child(5)) {
                .ant-timeline-item-head {
                  background: rgba(176, 219, 255, 0.4);
                }
                .ant-timeline-item-tail {
                  border-left: 2px solid;
                  border-image: linear-gradient(rgba(176, 219, 255, 0.2), rgba(176, 219, 255, 0.4))
                    1;
                }
              }
              .ant-timeline-item-last {
                padding-bottom: 0;
              }
            }
          }
          .top-item:nth-child(1),
          .top-item:nth-child(3),
          .top-item:nth-child(5) {
            border-left: none;
          }
          .top-item:nth-child(4) {
            position: relative;
            left: -40px;
          }
          .top-item:nth-last-child(1) {
            position: relative;
            right: 110px;
          }
        }
        .center-img {
          width: 100%;
          height: 80px;
          background-image: url('@/assets/images/system/home/proservice_back1.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 99;
          padding-right: 6%;
          span {
            font-size: 22px;
            font-family: Source Han Sans CN-Regular;
            font-weight: 600;
            background-image: -webkit-linear-gradient(
              bottom,
              rgba(11, 99, 225, 1),
              rgba(11, 99, 225, 0.6)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          img {
            width: 26px;
            height: 24px;
          }
        }
        .under-content {
          width: 100%;
          display: flex;
          .bottom-item {
            width: calc(100% / 6);
            height: 240px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            position: relative;
            left: 50px;
            .ant-timeline {
              position: relative;
              top: -14px;
              :deep(.ant-timeline-item:nth-child(1)) {
                .ant-timeline-item-head {
                  background: #b0dbff;
                }
                .ant-timeline-item-tail {
                  border-left: 2px solid;
                  border-image: linear-gradient(rgba(176, 219, 255, 0.9), rgba(176, 219, 255, 1)) 1;
                }
              }
              :deep(.ant-timeline-item:nth-child(2)) {
                .ant-timeline-item-head {
                  background: rgba(176, 219, 255, 0.9);
                }
                .ant-timeline-item-tail {
                  border-left: 2px solid;
                  border-image: linear-gradient(rgba(176, 219, 255, 0.8), rgba(176, 219, 255, 0.9))
                    1;
                }
              }
              :deep(.ant-timeline-item:nth-child(3)) {
                .ant-timeline-item-head {
                  background: rgba(176, 219, 255, 0.9);
                }
                .ant-timeline-item-tail {
                  border-left: 2px solid;
                  border-image: linear-gradient(rgba(176, 219, 255, 0.8), rgba(176, 219, 255, 0.9))
                    1;
                }
              }
              :deep(.ant-timeline-item:nth-child(4)) {
                .ant-timeline-item-head {
                  background: rgba(176, 219, 255, 0.8);
                }
                .ant-timeline-item-tail {
                  border-left: 2px solid;
                  border-image: linear-gradient(rgba(176, 219, 255, 0.6), rgba(176, 219, 255, 0.8))
                    1;
                }
              }
              :deep(.ant-timeline-item:nth-child(5)) {
                .ant-timeline-item-head {
                  background: rgba(176, 219, 255, 0.6);
                }
                .ant-timeline-item-tail {
                  border-left: 2px solid;
                  border-image: linear-gradient(rgba(176, 219, 255, 0.4), rgba(176, 219, 255, 0.6))
                    1;
                }
              }
              :deep(.ant-timeline-item:nth-child(6)) {
                .ant-timeline-item-head {
                  background: rgba(176, 219, 255, 0.4);
                }
                .ant-timeline-item-tail {
                  border-left: 2px solid;
                  border-image: linear-gradient(rgba(176, 219, 255, 0.2), rgba(176, 219, 255, 0.4))
                    1;
                }
              }
              :deep(.ant-timeline-item:nth-child(7)) {
                .ant-timeline-item-head {
                  background: rgba(176, 219, 255, 0.2);
                }
                .ant-timeline-item-tail {
                  border-left: 2px solid;
                  border-image: linear-gradient(rgba(176, 219, 255, 0.1), rgba(176, 219, 255, 0.2))
                    1;
                }
              }
              :deep(.ant-timeline-item:nth-child(8)) {
                .ant-timeline-item-head {
                  background: rgba(176, 219, 255, 0.2);
                }
                .ant-timeline-item-tail {
                  border-left: 2px solid;
                  border-image: linear-gradient(rgba(176, 219, 255, 0.1), rgba(176, 219, 255, 0.2))
                    1;
                }
              }
              .ant-timeline-item:nth-child(1) {
                height: 48px;
              }
            }
          }
          .bottom-item:nth-child(1) {
            position: relative;
            left: 16px;
          }
          .bottom-item:nth-child(2),
          .bottom-item:nth-child(4) {
            border-left: none;
          }
          .bottom-item:nth-child(3) {
            position: relative;
            left: 38px;
          }
          .bottom-item:nth-child(5) {
            position: relative;
            left: 10px;
          }
          .bottom-item:nth-child(6) {
            position: relative;
            top: 48px;
            left: -20px;
            padding-top: 0;
          }
          .bottom-item:nth-child(7) {
            position: relative;
            left: 30px;
          }
        }
      }
    }
  }
}
</style>
