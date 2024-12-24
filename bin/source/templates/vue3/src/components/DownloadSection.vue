<script setup lang="ts">
import BtnDownload from "./BtnDownload.vue";

withDefaults(defineProps<{ bgColor?: string; aosOffset?: number }>(), {
  bgColor: "#88d3ce2d",
  aosOffset: 0,
});
</script>

<template>
  <div class="download-part" :style="{ backgroundColor: bgColor }">
    <div class="container">
      <div class="app" data-aos="fade-right" :data-aos-offset="aosOffset" />
      <div data-aos="fade-up" :data-aos-offset="aosOffset">
        <div class="title">Ready to take your finances to the next level?</div>
        <BtnDownload class="download" />
        <div class="line"></div>
        <div class="tips">
          <HoverCode class="hover-code" />
          <span
            >Scan the QR code with your phone camera to download the Demo app.</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.download-part {
  position: relative;
  padding: 230px 0;
  .app {
    width: 288px;
    position: absolute;
    left: 0;
    top: -70px;
    background-image: linear-gradient(to top, #88d3ce 0%, #6e45e2 100%);
    height: 620px;
    border-radius: 20px;
  }
  .title {
    width: 734px;
    height: 130px;
    font-weight: bold;
    font-size: 48px;
    color: #000000;
    line-height: 67px;
    margin-left: 490px;
    margin-bottom: 60px;
  }
  .download {
    display: block;
    margin-left: 490px;
    margin-bottom: 60px;
  }
  .line {
    width: 735px;
    height: 2px;
    background: #6f7b79;
    opacity: 0.2;
    margin: 0 0 60px 490px;
  }
  .tips {
    width: 715px;
    margin-left: 490px;
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    cursor: pointer;
    .hover-code {
      width: 85px;
      height: 85px;
      min-width: 85px;
    }
    span {
      margin-left: 20px;
    }
  }
}
</style>
<style lang="scss" scoped>
/* 移动设备样式 */
@media only screen and (max-width: 768px) {
  .download-part {
    padding: 50px 30px;
    .title {
      width: 660px !important;
    }
    .app {
      display: none;
    }
    .title {
      margin-left: 0;
      width: 700px;
    }
    .download {
      margin-left: 0;
    }
    .line {
      display: none;
    }
    .tips {
      display: none;
    }
  }
}
</style>
