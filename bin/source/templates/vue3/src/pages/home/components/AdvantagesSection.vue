<script setup lang="ts">
import Icon1 from "~/assets/home/icon1.webp";
import Icon2 from "~/assets/home/icon2.webp";
import Icon3 from "~/assets/home/icon3.webp";

const list = [
  {
    name: "High-Quality Services",
    des:
      "With years of experience in the financial industry, we recognize the challenges many face when accessing quick cash. Whether unexpected expenses, medical emergencies, or simply bridging the gap until the next paycheck, we believe everyone deserves access to fair and transparent lending options.",
    src: Icon1,
  },
  {
    name: "Quick and Simple",
    des:
      "What sets PesoGo apart is our commitment to customer satisfaction and convenience. We leverage cutting-edge technology to streamline the loan application process, ensuring fast approvals and hassle-free transactions. Our platform is designed to be user-friendly, allowing customers to apply for loans anytime, anywhere, with just a few clicks.",
    src: Icon2,
  },
  {
    name: "Security and Reliability",
    des:
      "Transparency and trust are at the core of everything we do. We believe in providing clear and concise information, so our customers can make informed decisions about their finances. There are no hidden fees or surprises – just straightforward terms and conditions that prioritize your financial well-being.",
    src: Icon3,
  },
];
</script>

<template>
  <div class="part">
    <div class="section-title" data-aos="fade-up">Product advantages</div>
    <div class="card-wrapper">
      <div
        class="card"
        v-for="(item, i) in list"
        :key="i"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <img :src="item.src" alt="icon" class="icon" />
        <div class="content">
          <div class="name">{{ item.name }}</div>
          <div class="des">{{ item.des }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.part {
  position: relative;
  padding-bottom: 100px;
  background: var(--color-light);
  padding-top: 65px;
  .section-title {
    width: 820px;
    margin: 45px auto 120px;
  }
  .card-wrapper {
    margin: 0 300px;
    .card {
      padding: 0 30px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 80px;
      &:nth-child(2) {
        flex-direction: row-reverse;
      }
      .icon {
        width: 260px;
        height: auto;
        margin: 0 140px;
      }
      .content {
        width: 530px;
        .name {
          font-weight: bold;
          font-size: 24px;
          color: #333333;
          margin-bottom: 20px;
        }
        .des {
          font-weight: 400;
          font-size: 16px;
          color: #969faf;
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
    padding: 0 40px;
    padding-bottom: 100px;
    .section-title {
      margin-bottom: 20px;
    }
    .card-wrapper {
      display: block;
      margin: 0;
      .card {
        padding: 0;
        height: auto;
        margin-bottom: 40px;
        &:nth-child(2) {
          flex-direction: row;
        }
        .icon {
          display: none;
        }
        .content {
          width: 700px;
          .name {
            font-size: 33px;
            margin-bottom: 20px;
          }
          .des {
            font-size: 23px;
          }
        }
      }
    }
  }
}
</style>
