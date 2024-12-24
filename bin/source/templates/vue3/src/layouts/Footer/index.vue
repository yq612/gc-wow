<script setup lang="ts">
import Logo from "~/assets/layout/logo.webp";
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
      <div class="logo-wrapper">
        <img :src="Logo" alt="Logo" class="logo" />
      </div>
      <div class="grid-wrapper">
        <div class="grid-item">
          <div class="des">
            Doku Technology Limited is a highly innovative and professional company in the
            fintech field, focusing on developing various products and platforms that can
            meet users' practical needs and optimize the financial service experience.
            Adhering to the concept of "empowering finance with technology and creating
            value through service", the company is committed to using cutting-edge
            technological means to build a convenient, efficient, safe and reliable
            financial service ecosystem for a wide range of users.
          </div>
        </div>
        <div class="grid-item">
          <div class="line">Customer Service</div>
          <div class="link" @click="goto({ name: 'FAQ', query: { tag: 'loan' } })">
            FAQ
          </div>
          <div class="link" @click="goto({ name: 'Company' })">Company</div>
          <div class="link" @click="goto({ path: '/post/203' })">Guide</div>
        </div>
        <div class="grid-item">
          <div class="line">Customer Service</div>
          <div class="text">Email:support@dokucredit.com</div>
          <div class="text">Time: Monday to Friday 9:00 - 17:00</div>
          <div class="text">Address:1A KIKIOLA IGOKE ESTATE ELE-EPO PIPE</div>
          <div class="text">LINE ,ABULEGBA , ALIMOSHO, LAGOS STATE</div>
          <div class="flex-wrapper">
            <BtnDownload class="download" />
            <HoverCode />
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">© 2024 Demo. ALL RIGHTS RESERVED.</div>
  </div>
</template>

<style lang="scss" scoped>
.footer-wrapper {
  font-size: 24px;
  background: #000000;
  color: rgba(255, 255, 255, 0.6);
  padding: 60px 0 0;
  position: relative;
  color: white;
  .grid-wrapper {
    display: grid;
    grid-template-columns: 1fr 350px 1fr;
    margin-bottom: 60px;
    .grid-item {
      &:not(:last-child) {
        border-right: 1px solid rgb(130, 127, 127);
      }
      &:nth-child(2) {
        padding-left: 100px;
      }
      &:nth-child(3) {
        padding-left: 100px;
      }
    }
    .des {
      font-weight: lighter;
      font-size: 14px;
      color: #adadad;
      width: 349px;
      line-height: 21px;
    }
    .line {
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 20px;
      line-height: 1;
      color: white;
    }
    .link {
      display: block;
      font-size: 14px;
      color: #adadad;
      line-height: 1;
      margin-bottom: 20px;
    }
    .text {
      font-size: 14px;
      color: #adadad;
      margin-bottom: 20px;
      line-height: 1;
    }
    .flex-wrapper {
      display: flex;
      align-items: center;
      margin-top: 40px;
      .download {
        width: 170px;
        height: 50px;
      }
    }
  }
  .logo-wrapper {
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 55px;
    .logo {
      height: 43px;
      margin-right: 15px;
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
    background: #4a4a4a;
    font-size: 14px;
    color: #ffffff93;
    line-height: 3;
    text-align: center;
    font-weight: lighter;
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
      margin-bottom: 30px;
    }
    .grid-wrapper {
      display: block;
      .grid-item {
        border: none !important;
        .des {
          width: 100%;
          font-size: 24px;
          line-height: 1.2;
        }
      }
      .grid-item:not(:first-child) {
        display: none;
      }
    }
    .copyright {
      font-size: 22px;
    }
  }
}
</style>
