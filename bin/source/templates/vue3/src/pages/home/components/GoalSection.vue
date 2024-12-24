<script setup lang="ts">
import BtnLearnMore from "~/components/BtnLearnMore.vue";

const list = [
  {
    name: "Safe lending",
    des: `Backed by intelligent risk management, high-quality assets, and comprehensive insurance coverage.`,
  },
  {
    name: "Flexible loan options",
    des: `Choose your desired loan amount with ease. Once approved, receive your funds quickly and hassle-free`,
  },
  {
    name: "Low Interest",
    des: `The more you borrow, the lower your interest rate becomes, and your credit limit grows over time.`,
  },
];
</script>

<template>
  <div class="part" id="goals">
    <div class="container">
      <div class="section-title" data-aos="fade-up">
        Products that meet all your life goals
      </div>
      <div class="card-wrapper">
        <div
          class="card"
          v-for="(item, i) in list"
          :key="i"
          data-aos="fade-up"
          :data-aos-delay="200 + i * 200"
        >
          <div class="index">{{ i + 1 }}</div>
          <div class="name">{{ item.name }}</div>
          <div class="des">{{ item.des }}</div>
          <BtnLearnMore routeName="Product" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.part {
  position: relative;
  background: #88d3ce2d;
  padding: 160px 0 180px;
  .container {
    .section-title {
      width: 549px;
      margin: 0 auto 160px;
    }
    .card-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      .card {
        width: 338px;
        height: 240px;
        border-radius: 16px 16px 16px 16px;
        padding: 40px 30px;
        margin: 0 20px;
        position: relative;
        color: #ffffff;
        background-image: linear-gradient(to top, #88d3ce 0%, #6e45e2 100%);
        .index {
          width: 48px;
          height: 48px;
          background: #8f6aae;
          border-radius: 100%;
          position: absolute;
          top: -65px;
          left: 0;
          font-size: 25px;
          line-height: 48px;
          text-align: center;
        }
        .name {
          font-weight: bold;
          font-size: 20px;
          line-height: 23px;
          margin-bottom: 20px;
        }
        .des {
          width: 242px;
          font-size: 14px;
          line-height: 22px;
          margin-bottom: 20px;
          font-weight: lighter;
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
/* 移动设备样式 */
@media only screen and (max-width: 768px) {
  .part {
    padding: 90px 30px;
    height: auto;
    .container {
      .section-title {
        text-align: left;
        width: auto;
        margin-bottom: 40px;
      }
      .card-wrapper {
        display: block;
        .card {
          width: 100%;
          margin: 0 0 20px;
          background-position: right bottom !important;
          .name {
            font-size: 33px;
            margin-top: 20px;
            margin-bottom: 30px;
          }
          .des {
            font-size: 26px;
            width: 440px;
            line-height: 1.3;
            margin-bottom: 30px;
          }
          .index {
            right: 30px;
            left: auto;
            top: 30px;
          }
        }
      }
    }
  }
}
</style>
