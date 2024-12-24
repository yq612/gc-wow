<script setup lang="ts">
import BtnDownload from "~/components/BtnDownload.vue";
</script>

<template>
  <div class="part">
    <div class="flex-box">
      <div class="bg" data-aos="fade-right" />
      <div class="content-box" data-aos="fade-left">
        <div class="title">Technology-Driven and Compliant</div>
        <div class="sub">
          Doku Technology Limited's core strength lies in technological innovation. We use
          advanced credit evaluation algorithms to ensure that each loan application
          undergoes thorough review. The company adheres strictly to the regulations of
          the Central Bank of Nigeria (CBN) and other regulatory bodies, ensuring the
          security of customer data and funds while upholding compliance and corporate
          social responsibility.
        </div>
        <BtnDownload bgType="dark" class="download" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.part {
  padding: 200px 0 140px;
  background: #88d3ce2d;
  .flex-box {
    width: 1414px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .bg {
      width: 632px;
      background-image: linear-gradient(to top, #88d3ce 0%, #6e45e2 100%);
      height: 632px;
      border-radius: 20px;
    }
    .content-box {
      width: 585px;
      color: #333333;
      .title {
        font-weight: bold;
        font-size: 48px;
        margin-bottom: 40px;
      }
      .sub {
        font-size: 16px;
        color: #333333;
        line-height: 26px;
        text-align: justified;
        padding-bottom: 50px;
        border-bottom: 1px solid #6f7b7964;
        margin-bottom: 60px;
      }
    }
  }
}
</style>
