<script setup lang="ts">
import { APP_NAME } from '@/config/index'
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'

const router = useRouter()
const isVisible = ref(false)

function goto(path: any) {
  router.push(path)
}

onMounted(() => {
  // 延迟一小段时间后显示，以确保DOM已完全加载
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <transition name="fade-slide" appear>
    <div class="footer relative overflow-hidden bg-[var(--primary-color)]">
      <div class="area">
        <div class="logo relative mb-30 mt-50 flex items-center text-31 text-[#FFFFFF] font-bold">
          <img src="@/assets/images/common/logo.webp" alt="logo" class="mr-15 block h-62 w-62 border-rd-15 lh-0" width="62" height="62">
          <div>{{ APP_NAME }}</div>
        </div>
        <div class="wrap relative flex justify-between">
          <div class="des w-314 text-14 text-[#FFFFFF] lh-22">
            <div class="name mb-20">
              At Piska Tech Nigeria Limited we offer fast, reliable and professional personal loan services to solve your financial problems.
            </div>
            <HoverCode theme="dark" class="hover-code ml-[-48px] mt-[-10px] scale-65" />
          </div>
          <div class="link">
            <div class="mb-35 cursor-pointer text-14 text-[#FFFFFF] underline" @click="goto({ path: 'docs', query: { tag: 'privacy' } })">
              Privacy Policy
            </div>
            <div class="mb-35 cursor-pointer text-14 text-[#FFFFFF] underline" @click="goto({ path: 'docs', query: { tag: 'terms' } })">
              Terms & Conditions
            </div>
            <div class="mb-35 cursor-pointer text-14 text-[#FFFFFF] underline" @click="goto({ path: '/account' })">
              Account Cancellation
            </div>
          </div>
          <div class="info">
            <div class="text mb-35 flex items-center text-14px text-[#FFFFFF]">
              <img src="@/assets/images/common/icon-email.webp" alt="email" class="mr-10 block h-18 w-18">
              support@umifinance.com
            </div>
            <div class="text mb-35 flex items-center text-14px text-[#FFFFFF]">
              <img src="@/assets/images/common/icon-time.webp" alt="time" class="mr-10 block h-18 w-18">
              Monday to Friday 9:00 - 18:00
            </div>
            <div class="text mb-35 flex items-center text-14px text-[#FFFFFF]">
              <img src="@/assets/images/common/icon-address.webp" alt="address" class="mr-10 block h-18 w-18">
              41 AIh. Masha Rd, Surulere, Lagos101241,Lagos
            </div>
          </div>
        </div>
        <div class="copyright relative flex items-center justify-between py-20 text-14px text-[#E0E0E0]">
          <div class="text">
            Copyright © Piska Tech Nigeria Limited All rights reserved.
          </div>
          <div class="about flex text-14px text-[#E0E0E0]">
            <div class="color-pointer cursor-pointer" @click="goto({ path: 'services' })">
              About Us
            </div>
            <span class="mx-10">|</span>
            <div class="color-pointer cursor-pointer" @click="goto({ path: 'company' })">
              Contact Us
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="less" scoped>
/* 渐入动画 */
.fade-slide-enter-active,
.fade-slide-appear-active {
  transition: all 300ms ease;
}

.fade-slide-enter-from,
.fade-slide-appear-from {
  opacity: 0;
  transform: translateY(30px);
}

@media only screen and (max-width: 768px) {
  .footer {
    padding: 60px 80px;
    .logo {
      font-size: 85px;
      margin-bottom: 90px;
      img {
        width: 200px;
        height: 200px;
        margin-right: 60px;
      }
    }
    .des {
      width: auto;
      height: 100%;
      margin-bottom: 100px;
      .name {
        font-size: 80px;
        line-height: 1.5;
        width: auto;
      }
      .hover-code {
        display: none;
      }
    }
    .wrap {
      display: block;
    }
    .link {
      display: none;
    }
    .info {
      img {
        width: 80px;
        height: 80px;
        margin-right: 30px;
      }
      .text {
        font-size: 70px;
        line-height: 1.5;
        height: auto;
      }
    }
    .copyright {
      font-size: 60px;
      margin-top: 200px;
      margin-bottom: 40px;
      .text {
        width: 100%;
        display: block;
        border-top: 1px solid white;
        line-height: 3;
        text-align: center;
      }
      .about {
        display: none;
      }
    }
  }
}
</style>
