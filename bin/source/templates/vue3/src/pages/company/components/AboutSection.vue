<script setup lang="ts"></script>

<template>
  <div class="part">
    <div class="content-box" data-aos="fade">
      <div class="title" data-aos="fade-up" data-aos-delay="100">About us</div>
      <div class="tag" data-aos="fade-up" data-aos-delay="200">Company Overview</div>
      <div class="des" data-aos="fade-up" data-aos-delay="200">
        Doku Technology Limited is a leading fintech company in Nigeria, committed to
        providing convenient and secure loan services through innovative technology. By
        leveraging big data analytics and artificial intelligence, we offer tailored loan
        solutions for individuals and small businesses, helping them meet their financial
        needs and contribute to economic development.
      </div>
      <div class="tag" data-aos="fade-up" data-aos-delay="200">Mission and Servicesw</div>
      <div class="des" data-aos="fade-up" data-aos-delay="200">
        Our mission is to drive financial inclusion through technology, breaking down the
        barriers of traditional financial services. We offer flexible loan options to our
        customers, whether for personal consumption, education, or small business needs.
        We have simplified the application process, ensuring that customers can quickly
        access funds and enjoy an efficient, transparent loan experience.
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.part {
  background: linear-gradient(to bottom, #88d3ce2d 350px, #000000 350px);
  padding-bottom: 100px;
  .content-box {
    width: 1514px;
    background: #ffffff;
    background-size: 540px 357px;
    background-position: 840px 180px;
    border-radius: 16px;
    margin: 0 auto;
    padding: 80px 120px;
    .title {
      font-weight: bold;
      font-size: 48px;
      color: #000000;
      margin-bottom: 30px;
    }
    .tag {
      font-size: 14px;
      background: var(--color-primary);
      border-radius: 65px;
      display: inline-block;
      color: white;
      padding: 10px 20px;
      margin-bottom: 30px;
      text-transform: uppercase;
    }
    .des {
      height: 130px;
      font-size: 16px;
      color: rgba(51, 51, 51, 0.68);
      line-height: 26px;
    }
  }
}
</style>
