<script setup lang="ts">
import { PageConstant } from "~/constant/pageConstant";
import Logo from "~/assets/layout/logo.webp";
import IconPhone from "~/assets/layout/icon-phone.webp";
import IconEmail from "~/assets/layout/icon-email.webp";
import IconTime from "~/assets/layout/icon-time.webp";
import IconAddress from "~/assets/layout/icon-address.webp";
import BtnDownload from "~/components/BtnDownload.vue";

const router = useRouter();

function goto(payload?: any) {
  if (!payload) return;
  router.push(payload);
}
</script>

<template>
  <div class="footer-wrapper">
    <div class="container">
      <div class="grid-wrapper">
        <div class="grid-item">
          <div class="logo-wrapper">
            <img :src="Logo" alt="Logo" class="logo" /> {{ PageConstant.APP_NAME }}
          </div>
          <div class="des">
            Company Name: Dolphin Lending Investor, Inc. SEC Registration: No.CS201911897
            Registered Business Name: PesoGo CERTIFICATE OF AUTHORITY: No.3037
          </div>
          <div class="info-wrapper">
            <img src="../../assets/layout/info1.webp" alt="info" class="info" />
            <img src="../../assets/layout/info2.webp" alt="info" class="info" />
            <BtnDownload class="btn" :show-code="false" />
          </div>
        </div>
        <div class="grid-item">
          <div class="line-name">Contact us</div>
          <div class="text-wrapper">
            <div class="item">
              <img :src="IconEmail" alt="icon" />Mailbox - customer@pesogo.ph
            </div>
            <div class="item">
              <img :src="IconPhone" alt="icon" />Telephone - +638983007212
            </div>
            <div class="item">
              <img :src="IconTime" alt="icon" />Monday - Sunday 09.00 - 17.00
            </div>
            <div class="item">
              <img :src="IconAddress" alt="icon" />#367 Torre Venezia Suites 170
              TimogAvenue cor.Scout Santiago St, Quezon City 1103
            </div>
          </div>
        </div>
        <div class="grid-item">
          <div class="line-name">Other info</div>
          <span class="link" @click="goto({ name: `ExecutiveTeam` })">About us</span>
          <span class="link" @click="goto({ name: `FAQ` })">FAQ</span>
          <span class="link" @click="goto({ name: `SecurityStatement` })"
            >Security Statement</span
          >
          <span class="link" @click="goto({ name: `Blog` })">BLOG</span>
          <a class="link" href="https://h5.pesogo.ph/#/privacy_statement" target="_blank"
            >Privacy Policy</a
          >
          <span class="link" @click="goto({ name: `DeleteAccount` })"
            >Account Deletion Instructions</span
          >
        </div>
      </div>
      <div class="copyright">
        © 2024 Dolphin Lending Investor, Inc. All Rights Reserved
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-wrapper {
  font-size: 24px;
  background: #f0f6ff;
  color: rgba(255, 255, 255, 0.6);
  padding: 50px 0 20px;
  position: relative;
  color: #333333;
  .grid-wrapper {
    display: grid;
    grid-template-columns: 370px 460px 1fr;
    .grid-item {
      &:nth-child(2) {
        margin-left: 140px;
      }
      &:nth-child(3) {
        margin-left: 140px;
      }
    }
  }
  .logo-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 35px;
    font-size: 16px;
    font-weight: bold;
    img {
      height: 40px;
      margin-right: 15px;
    }
  }

  .des {
    width: 351px;
    font-size: 16px;
    line-height: 23px;
    margin-bottom: 35px;
  }
  .info-wrapper {
    height: 44px;
    .info {
      height: 100%;
      display: inline-block;
      vertical-align: middle;
      margin-right: 20px;
    }
    .btn {
      vertical-align: middle;
    }
  }
  .line-name {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 38px;
  }
  .text-wrapper {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 20px;
    .item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 20px;
      img {
        height: 18px;
        margin-right: 10px;
        margin-top: 2px;
      }
    }
  }
  .link {
    display: block;
    margin-bottom: 18px;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    cursor: pointer;
    text-decoration: underline;
  }
  .copyright {
    height: 63px;
    background: var(--color-primary);
    border-radius: 10px;
    font-size: 14px;
    color: white;
    line-height: 63px;
    padding: 0 40px;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
<style lang="scss" scoped>
/* 移动设备样式 */
@media only screen and (max-width: 768px) {
  .footer-wrapper {
    padding: 50px 40px;
    height: auto;
    .logo-wrapper {
      img {
        height: 70px;
      }
    }
    .grid-wrapper {
      display: block;
      .grid-item {
        margin: 0 !important;
      }
      .des {
        font-size: 23px;
        width: 650px;
        line-height: 1.2;
        margin-bottom: 40px;
      }
      .other {
        width: 140px;
      }
      :deep(.btn-download) {
        width: 320px;
        height: 50px;
      }
      .line-name {
        font-size: 30px;
        margin-top: 40px;
        border-top: 1px solid rgba(255, 255, 255, 0.45);
        padding-top: 20px;
      }
      .item,
      .link {
        font-size: 20px;
      }
    }
    .copyright {
      height: 63px;
      background: var(--color-primary);
      border-radius: 10px;
      font-size: 20px;
    }
  }
}
</style>
