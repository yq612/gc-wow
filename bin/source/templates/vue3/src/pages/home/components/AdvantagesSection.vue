<script setup lang="ts"></script>

<template>
  <div class="part">
    <div class="card-container" data-aos="fade">
      <div class="title" data-aos="fade-up">
        Fast, Smart, and Secure Loans at Your Fingertips.
      </div>
      <div class="des" data-aos="fade-up" data-aos-delay="200">
        Demo is an innovative financial application launched by Doku Technology
        Limited, designed to provide users with convenient and efficient loan services.
        Whether you're an individual in urgent need of funds or a small business looking
        to expand, Demo offers fast loan application and approval processes, helping
        you meet your financial needs with ease.
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.part {
  position: relative;
  background: white;
  padding: 160px 0 120px;
  .card-container {
    width: 1748px;
    height: 620px;
    background-image: linear-gradient(
      to top,
      #3f51b1 0%,
      #5a55ae 13%,
      #7b5fac 25%,
      #8f6aae 38%,
      #a86aa4 50%,
      #cc6b8e 62%,
      #f18271 75%,
      #f3a469 87%,
      #f7c978 100%
    );
    margin: 0 auto;
    overflow: hidden;
    text-align: center;
    color: #ffffff;
    position: relative;
    border-radius: 20px;
    .title {
      width: 1019px;
      font-weight: bold;
      font-size: 64px;
      line-height: 75px;
      margin: 125px auto 0;
    }
    .des {
      width: 790px;
      font-size: 18px;
      line-height: 27px;
      text-align: center;
      margin: 86px auto 70px;
      font-weight: lighter;
    }
  }
}
</style>
<style lang="scss" scoped>
/* 移动设备样式 */
@media only screen and (max-width: 768px) {
  .part {
    padding-top: 0;
    height: auto;
    .card-container {
      width: 100%;
      border-radius: 0;
      background-size: cover;
      background-position-x: -70px;
      margin: 0;
      padding: 40px;
      .title {
        font-size: 40px;
        width: 95%;
        text-align: left;
        margin: 0;
        margin-top: 70px;
        line-height: 1.4;
        margin-bottom: 50px;
      }
      .des {
        font-size: 26px;
        line-height: 1.3;
        text-align: left;
        width: 95%;
        margin: 0;
        margin-bottom: 90px;
      }
    }
  }
}
</style>
