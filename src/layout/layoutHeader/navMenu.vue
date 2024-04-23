<template>
  <a-menu
    id="home_nav_menu"
    v-model:selectedKeys="current"
    :get-popup-container="(trigger:any) => trigger.parentNode"
    mode="horizontal"
    class="menu"
    @click="handleClick"
  >
    <a-menu-item key="/" class="item_height" style="line-height: 64px">
      <span>服务总览</span>
    </a-menu-item>
    <a-sub-menu key="/product" style="line-height: 64px" @title-click="handleSubClick('/product')">
      <template #title>
        <span :class="current[0] === '/product' ? 'nav-title' : ''">产品与服务</span>
      </template>
      <div class="nav-content">
        <div class="menu-pic">
          <img src="@/assets/images/system/home/nav_product.png" alt="" />
          <div class="pic-title">产品与服务</div>
          <div class="pic-info">提供从需求到运维各阶段的全生命周期服务。</div>
        </div>
        <div class="menu-content">
          <div class="menu-item">
            <div class="item-title">
              <div class="title-left">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-wangzhanluru" />
                </svg>
                <span>规划</span>
              </div>
              <img src="@/assets/images/system/home/nav_arrow.png" alt="" />
            </div>
            <div class="item-list">
              <a-timeline>
                <a-timeline-item @click="clickToProduct('consult')">
                  质量管控方案咨询
                </a-timeline-item>
                <!-- <a-timeline-item @click="clickToProduct('projectApproval')">立项文档评审</a-timeline-item> -->
              </a-timeline>
            </div>
          </div>
          <div class="menu-item">
            <div class="item-title">
              <div class="title-left">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-wangzhanyinliu" />
                </svg>
                <span>需求</span>
              </div>
              <img src="@/assets/images/system/home/nav_arrow.png" alt="" />
            </div>
            <div class="item-list">
              <a-timeline>
                <a-timeline-item @click="clickToProduct('expertConsultation')">
                  需求质量专家咨询
                </a-timeline-item>
                <!-- <a-timeline-item @click="clickToProduct('demandReview')">需求文档评审</a-timeline-item> -->
              </a-timeline>
            </div>
          </div>
          <div class="menu-item">
            <div class="item-title">
              <div class="title-left">
                <svg class="icon" aria-hidden="true">
                  <!-- <use xlink:href="#icon-zishiyingwangzhan" /> -->
                  <use xlink:href="#icon-shejizhichi" />
                </svg>
                <span>设计</span>
              </div>
              <img src="@/assets/images/system/home/nav_arrow.png" alt="" />
            </div>
            <div class="item-list">
              <a-timeline>
                <a-timeline-item @click="clickToProduct('designReview')">
                  设计方案专家咨询
                </a-timeline-item>
              </a-timeline>
            </div>
          </div>
          <div class="menu-item">
            <div class="item-title">
              <div class="title-left">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-yumingguanli" />
                </svg>
                <span>开发</span>
              </div>
              <img src="@/assets/images/system/home/nav_arrow.png" alt="" />
            </div>
            <div class="item-list">
              <a-timeline>
                <!-- <a-timeline-item @click="clickToProduct('codeExamine')">代码质量检查</a-timeline-item> -->
                <a-timeline-item @click="clickToProduct('codesecurity')">
                  代码安全测试
                </a-timeline-item>
                <a-timeline-item @click="clickToProduct('functionalityTest')">
                  接口功能测试
                </a-timeline-item>
                <a-timeline-item @click="clickToProduct('interface')">接口性能测试</a-timeline-item>
              </a-timeline>
            </div>
          </div>
          <div class="menu-item">
            <div class="item-title">
              <div class="title-left">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-wangzhananquan" />
                </svg>
                <span>测试</span>
              </div>
              <img src="@/assets/images/system/home/nav_arrow.png" alt="" />
            </div>
            <div class="item-list">
              <a-timeline>
                <a-timeline-item @click="clickToProduct('system')">系统性能画像</a-timeline-item>
                <a-timeline-item @click="toProfession">专业性能测试</a-timeline-item>
                <!-- <a-timeline-item @click="toProfessionNew"
                    >新版专业性能测试</a-timeline-item
                  > -->
                <a-timeline-item @click="clickToProduct('stabilityTest')">
                  稳定性测试
                </a-timeline-item>
                <a-timeline-item @click="clickToProduct('professionservice')">
                  性能专家服务
                </a-timeline-item>
                <a-timeline-item @click="clickToProduct('dynamic')">
                  动态应用安全测试
                </a-timeline-item>
                <a-timeline-item @click="clickToProduct('mobile')">移动应用测试</a-timeline-item>
                <a-timeline-item @click="clickToProduct('procedure')">测试过程管理</a-timeline-item>
                <a-timeline-item @click="clickToProduct('sittest')">SIT测试服务</a-timeline-item>
              </a-timeline>
            </div>
          </div>
          <div class="menu-item">
            <div class="item-title">
              <div class="title-left">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-wangzhanzhuanhua1" />
                </svg>
                <span>上线</span>
              </div>
              <img src="@/assets/images/system/home/nav_arrow.png" alt="" />
            </div>
            <div class="item-list">
              <a-timeline>
                <a-timeline-item @click="clickToProduct('useraccept')">
                  用户验收测试
                </a-timeline-item>
              </a-timeline>
            </div>
          </div>
          <div class="menu-item">
            <div class="item-title">
              <div class="title-left">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-liuliangtuiguang" />
                </svg>
                <span>运营</span>
              </div>
            </div>
            <div class="item-list">
              <a-timeline>
                <a-timeline-item @click="clickToProduct('monitor')">应用动态监测</a-timeline-item>
              </a-timeline>
            </div>
          </div>
        </div>
      </div>
    </a-sub-menu>
    <a-sub-menu key="sub2" style="line-height: 64px">
      <template #title>
        <span :class="current[0] === '/sub2' ? 'nav-title' : ''">解决方案</span>
      </template>
      <div class="nav-content">
        <div class="menu-pic">
          <img src="@/assets/images/system/home/nav_solution.png" alt="" />
          <div class="pic-title">解决方案</div>
          <div class="pic-info">ETesting为你提供一站式专业解决方案</div>
        </div>
        <div class="menu-content">
          <div class="menu-item">
            <div class="item-title">
              <div class="title-left">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-mobanku" />
                </svg>
                <span>通用</span>
              </div>
            </div>
            <div class="item-list">
              <a-timeline>
                <a-timeline-item @click="ClicktoPage('performance')">
                  性能测试服务解决方案
                </a-timeline-item>
                <a-timeline-item @click="ClicktoPage('quality')">
                  公共质量服务平台解决方案
                </a-timeline-item>
                <a-timeline-item @click="ClicktoPage('research')">
                  研发效能提升解决方案
                </a-timeline-item>
                <a-timeline-item @click="ClicktoPage('mobileTest')">
                  移动端测试服务解决方案
                </a-timeline-item>
                <a-timeline-item @click="ClicktoPage('automation')">
                  自动化测试服务解决方案
                </a-timeline-item>
                <a-timeline-item @click="ClicktoPage('security')">
                  安全测试服务解决方案
                </a-timeline-item>
                <a-timeline-item @click="ClicktoPage('software')">
                  软件质量检测及认证（CMA/CNAS）解决方案
                </a-timeline-item>
              </a-timeline>
            </div>
          </div>
          <div class="menu-item">
            <div class="item-title">
              <div class="title-left">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-zuzhijigou" />
                </svg>
                <span>行业</span>
              </div>
            </div>
            <div class="item-list">
              <a-timeline>
                <a-timeline-item @click="ClicktoPage('government')">
                  政府园区解决方案
                </a-timeline-item>
                <a-timeline-item @click="ClicktoPage('softpark')">软件园区解决方案</a-timeline-item>
                <a-timeline-item @click="ClicktoPage('publiccloud')">
                  公有云行业解决方案
                </a-timeline-item>
                <a-timeline-item @click="ClicktoPage('medicalTreatment')">
                  医疗行业解决方案
                </a-timeline-item>
                <a-timeline-item @click="ClicktoPage('schoolEnterprise')">
                  校企合作解决方案
                </a-timeline-item>
                <a-timeline-item @click="ClicktoPage('internet')">
                  中小互联网企业解决方案
                </a-timeline-item>
                <a-timeline-item @click="ClicktoPage('manufacture')">
                  制造业解决方案
                </a-timeline-item>
              </a-timeline>
            </div>
          </div>
        </div>
      </div>
    </a-sub-menu>
    <a-sub-menu key="/customers" style="line-height: 64px">
      <template #title>
        <span :class="current[0] === '/customers' ? 'nav-title' : ''">客户支持</span>
      </template>
      <div class="nav-content">
        <div class="menu-pic">
          <img src="@/assets/images/system/home/nav_customer.png" alt="" />
          <div class="pic-title">客户支持</div>
          <div class="pic-info">ETesting为你提供全方位的技术支持</div>
        </div>
        <div class="menu-content">
          <!-- <div class="menu-item">
            <div class="item-title">
              <div class="title-left">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-neirongxiezuo" />
                </svg>
                <span>帮助文档</span>
              </div>
            </div>
            <div class="item-list">
              <a-timeline>
                <a-timeline-item>
                  <a href="/#/customers/helpdocument" target="_blank">产品文档</a>
                </a-timeline-item>
              </a-timeline>
            </div>
        </div> -->
          <div class="menu-item">
            <div class="item-title">
              <div class="title-left">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-gengduofuwu" />
                </svg>
                <span>基础服务</span>
              </div>
            </div>
            <div class="item-list">
              <a-timeline>
                <!-- <a-timeline-item @click="handleOpenChat">在线客服</a-timeline-item>
                <a-timeline-item>
                  <a href="/#/customers/suggestions" target="_blank">投诉建议</a>
                </a-timeline-item> -->
                <a-timeline-item @click="clearLocal">
                  <a>服务咨询</a>
                </a-timeline-item>
              </a-timeline>
            </div>
          </div>
        </div>
      </div>
    </a-sub-menu>
    <a-menu-item key="/about" style="line-height: 64px">
      <span>关于我们</span>
    </a-menu-item>
  </a-menu>
  <div v-if="accessToken" class="dashboard_btn" @click="handleGoDashboard">
    <text>控制台</text>
    <i class="iconfont icon-kongzhitai1"></i>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/system/user';
const accessToken = computed(() => {
  return useUserStore().accessToken;
});

const router = useRouter();
const current = ref<string[]>(['/productNew']);
const handleClick = (e: any) => {
  router.push(`${e.key}`);
};
const handleSubClick = (e: any) => {
  router.push(`${e}`);
};
const clickToProduct = (name: string) => {
  router.push(`/product/${name}`);
};
const toProfession = () => {
  router.push('/product');
};

const menuHide = ref(false);

const ClicktoPage = (name: string) => {
  menuHide.value = true;
  router.push(`/solution/${name}`);
};

const clearLocal = () => {
  localStorage.removeItem('consultateInfo');
  router.push('/customers/demandworkorder');
};
const munuDisplay = computed(() => {
  return menuHide.value ? 'none' : 'block';
});
const handleGoDashboard = () => {
  if (!localStorage.getItem('projectId')) {
    return;
  }
  window.open('/dashboard', '_blank');
};
watch(
  () => menuHide.value,
  (value) => {
    if (value === true) {
      setTimeout(() => {
        menuHide.value = false;
      }, 1000);
    }
  }
);
</script>
<style lang="less" scoped>
.dashboard_btn {
  margin-left: auto;
  height: 64px;
  width: 72px;
  line-height: 64px;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
:deep(.ant-menu-vertical.ant-menu-sub) {
  display: v-bind(munuDisplay);
}
:deep(.control) {
  position: relative;
}
a {
  color: #000000;
  &:hover {
    color: @primary-color;
  }
}
.nav-content {
  padding: 30px;
  display: flex;
  background: #fff;
  width: 100%;
  overflow-x: auto;
  .menu-pic {
    margin-left: 14px;
    border-radius: 8px;
    box-shadow: 0 8px 20px 0 rgb(23 61 172 / 8%);
    padding: 20px 29px 14px 29px;
    width: 215px;
    min-width: 215px;
    height: 260px;
    img {
      width: 100%;
      height: 118px;
      min-height: 130px;
    }

    .pic-title {
      font-size: 15px;
      font-weight: 700;
      color: @primary-color;
      padding: 23px 0 6px 0;
      font-family: Source Han Sans CN;
      letter-spacing: 0.5px;
      line-height: 10px !important;
      text-align: center;
      margin-bottom: 5px;
    }

    .pic-info {
      font-size: 14px;
      font-family: Source Han Sans CN, Source Han Sans CN-Normal;
      color: rgb(120, 125, 139);
      line-height: 21px;
    }
  }

  .menu-content {
    margin: 0 2%;
    display: flex;
    width: calc(100% - 215px);
    min-width: 500px;
    .icon {
      font-size: 27px;
      margin-right: 6px;
    }

    .menu-item {
      width: 23%;
      .item-title {
        display: flex;
        align-items: center;
        span {
          font-size: 18px;
          font-family: Source Han Sans CN-Medium;
          font-weight: 500;
          color: #000000;
        }

        img {
          width: 21px;
          height: 16px;
          padding-left: 8px;
        }

        .title-left {
          width: 61%;
        }
      }

      .item-list {
        padding: 20px 10px;
        :deep(.ant-timeline) {
          .ant-timeline-item-head-blue {
            width: 8px;
            height: 8px;
            background: @primary-color;
            border: none;
          }

          .ant-timeline-item {
            padding-bottom: 14px;
          }

          .ant-timeline-item-last {
            padding-bottom: 0;
          }

          .ant-timeline-item-last > .ant-timeline-item-content {
            min-height: 22px;
          }

          .ant-timeline-item-tail {
            border-left: 2px solid @primary-color;
            top: 0;
            left: 3px;
            height: 100%;
          }

          .ant-timeline-item-content {
            font-size: 14px;
            font-family: Source Han Sans CN, Source Han Sans CN-Normal;
            color: #000000;
            letter-spacing: 0.5px;
          }

          .ant-timeline-item-content:hover {
            cursor: pointer;
            color: @primary-color;
          }
        }
      }
    }
  }
}
:global(.ant-menu-vertical.ant-menu-sub) {
  min-width: 100vw !important;
  border: none;
}

:global(.ant-menu-submenu-popup) {
  top: 65px !important;
}
.layout-nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 62px;
  background: #fff;
  font-family: Source Han Sans CN-Medium;
  box-shadow: 0 8px 10px 0 rgba(26, 62, 153, 0.1);
  z-index: 9999;
  position: relative;

  .img {
    display: flex;
    justify-content: center;

    img {
      height: 28px;
      margin: 21px 0 0 16px;
    }
  }
  :deep(li.ant-menu-overflow-item.ant-menu-item.ant-menu-item-only-child) {
    padding: 10px 20px;
    font-size: 17px;
    margin: 0 7px;
    font-weight: 500;
  }
  :deep(.ant-menu-horizontal) {
    line-height: 70px !important;
  }
  :deep(.ant-menu-submenu-horizontal) {
    padding: 10px 20px;
  }
  :deep(.ant-menu-horizontal:not(.ant-menu-dark)) {
    .ant-menu-submenu {
      margin: 0 10px;
      font-size: 16px;
      font-weight: 500;
    }
  }

  :deep(.ant-menu-submenu-title:hover) {
    color: @primary-color;
  }

  :deep(.ant-menu-item:focus-visible, .ant-menu-submenu-title:focus-visible) {
    box-shadow: none;
  }

  :deep(.ant-menu-horizontal:not(.ant-menu-dark)) {
    .ant-menu-item-selected,
    .ant-menu-submenu:hover,
    .ant-menu-submenu-selected,
    .ant-menu-item-active,
    .ant-menu-submenu-open {
      color: @primary-color;
    }

    .ant-menu-submenu:hover::after,
    .ant-menu-submenu-open::after,
    .ant-menu-submenu-selected::after,
    .ant-menu-item-selected::after,
    .ant-menu-item-active::after {
      border-bottom: 2px solid @primary-color;
      border-radius: 2px;
    }
  }

  .menu {
    width: 57%;
    min-width: 200px;
    .ant-menu-overflow-item.ant-menu-submenu.ant-menu-submenu-horizontal {
      padding: 0 30px;
    }
    .nav-title {
      color: @primary-color;
      border-bottom: 2px solid @primary-color;
      border-radius: 2px;
      padding: 21px 0;
    }
  }

  .header {
    width: 28%;
    min-width: 354px;
    .log {
      display: flex;
      justify-content: flex-end;
      height: 100%;
      line-height: 3.6rem;
      text-align: center;
      font-size: 17px;
      font-weight: 500;
      font-family: Source Han Sans CN-Medium;
      .register {
        padding: 2px 30px 0 30px;
        background: @primary-color;
        color: #fff;
      }

      :deep(.ant-badge) {
        padding: 3px 13px 0 17px !important;
        color: rgba(0, 0, 0, 0.8);
        font-size: 16px;
        margin: 20px 0 20px 0;
        .ant-badge-count {
          min-width: 14px;
          height: 14px;
          line-height: 14px;
        }
      }

      .login {
        padding: 2px 24px 0 0;
        color: rgba(0, 0, 0, 0.8);
      }

      .login:hover {
        cursor: pointer;
        color: @primary-color;
      }

      .register:hover {
        cursor: pointer;
      }

      .icon2 {
        padding: 0 20px;
        position: relative;
        margin-right: 10px;
        height: 60px;
        display: flex;
        align-items: center;
        .iconimg {
          width: 32px;
          height: 32px;
          margin-right: 12px;
          box-shadow: 0 10px 20px 0 rgb(23 61 172 / 10%);
          border-radius: 50%;
          display: inline-block !important;
          object-fit: contain !important;
          border: 1px solid red;
        }
        .iconfont {
          height: 60px;
          line-height: 60px;
        }
        :deep(.anticon-down) {
          font-size: 14px !important;
          position: relative;
          top: -4px;
          left: 4px;
        }
      }
    }
  }
}
</style>

<style lang="less">
#home_nav_menu {
  .ant-menu-item {
    &:hover {
      color: @primary-color;
      &::after {
        border-bottom-color: @primary-color;
      }
    }
  }
  .ant-menu-item.ant-menu-item-selected {
    background: @primary-color;
    color: @sl-font-color-white;
  }
  .ant-menu-submenu {
    .ant-menu-submenu-title:hover {
      color: @primary-color;
    }

    &.ant-menu-submenu-selected {
      color: @primary-color;
    }
  }
}
</style>
