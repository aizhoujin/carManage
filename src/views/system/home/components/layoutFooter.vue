<template>
  <div class="footer">
    <div class="footer-box">
      <div class="footer-info">
        <div class="footer-left">
          <div class="left-title">商务联系</div>
          <div class="left-item">
            <span>联系邮箱: info@easy-testing.cn</span>
          </div>
          <div class="left-item">
            <span>联系地址: 南京国际软件质量总部基地新城总部大厦2层</span>
          </div>
        </div>
        <div class="footer-right">
          <div class="right-item">
            <span>服务热线</span>
            <div class="phone">400-0850-887</div>
          </div>
          <div class="right-item">
            <span>关注ETesting</span>
            <img src="@/assets/images/system/home/footer_EQrCode.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="footer-copyright">Copyright©2022 易迪森科技 All Rights Reserved 版权所有</div>
  </div>
</template>

<style scoped lang="less">
.footer {
  .footer-box {
    height: 200px;
    background-image: url('@/assets/images/system/home/footer_bg.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    padding: 3%;
    justify-content: space-around;
    color: #ffffff;
    .footer-info {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      .footer-left {
        width: 542px;
        .left-title {
          font-size: 18px;
          font-family: Source Han Sans CN-Medium;
          font-weight: 500;
        }

        .left-item {
          padding-top: 14px;
          font-size: 14px;
          font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        }
      }

      .footer-right {
        display: flex;
        .right-item {
          display: flex;
          flex-direction: column;
          font-weight: 500;
          font-family: Source Han Sans CN-Medium;
          margin-right: 60px;

          span {
            font-size: 18px;
          }

          .phone {
            font-size: 28px;
          }

          img {
            width: 71px;
            height: 71px;
            margin-top: 10px;
          }
        }
      }
    }
  }

  .footer-copyright {
    background: #262a35;
    font-size: 10px;
    font-family: Source Han Sans CN-Normal;
    font-weight: 500;
    text-align: center;
    color: #ffffff;
    padding: 6px 0;
  }
}
</style>
