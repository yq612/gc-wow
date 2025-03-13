<script setup lang="ts">
</script>

<template>
  <div
    class="home-wrapper relative py-60 pt-140"
  >
    <div class="area">
      <div class="title mb-20 text-64px text-[#FFFFFF] font-800 lh-75px" data-aos="fade-up">
        Fast & Reliable
        <br>
        Focused on personal loan services
      </div>
      <div class="sub mb-60 text-20px text-[#BCD1E6] font-400 lh-23px" data-aos="fade-up">
        At Piska Tech Nigeria Limited we offer fast, reliable and professional personal loan services to solve your financial problems.
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home-wrapper {
  background: var(--primary-color);
}
</style>

<style lang="less" scoped>
@media only screen and (max-width: 768px) {
  .home-wrapper {
    background: var(--primary-color);
    padding: 400px 80px 200px;
    .title {
      font-size: 90px;
      line-height: 1.4;
      margin-bottom: 50px;
    }
    .sub {
      font-size: 76px;
      line-height: 1.4;
    }
    .info-wrapper {
      display: none;
    }
  }
}
</style>
