<script setup lang="ts">
import IconGoogleDownload from "~/assets/common/btn-google.webp";
import Code from "~/assets/common/code.webp";

withDefaults(
  defineProps<{ showCode?: boolean; googleImgType?: string }>(),
  {
    type: "google",
    showCode: true,
  }
);

</script>

<template>
  <a
    class="btn-download"
    href="https://play.google.com/store/apps/details?id=com.peso.go.pro.loan&hl=en-gb&gl=ph"
    target="_blank"
  >
    <img :src="IconGoogleDownload" alt="download" />
    <div class="code" v-if="showCode">
      <img :src="Code" alt="Code" />
    </div>
  </a>
</template>

<style lang="scss" scoped>
.btn-download {
  cursor: pointer;
  width: 146px;
  height: 40px;
  display: inline-block;
  position: relative;
  img {
    width: auto;
    height: 100%;
  }
  &:hover {
    .code {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }
  .code {
    position: absolute;
    background: white;
    border-radius: 10px;
    top: -200px;
    width: 185px;
    height: 185px;
    transform: translateY(20px);
    right: -40px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease;
    &:hover {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    &::before {
      content: "";
      width: 0;
      height: 0;
      border-top: 15px solid white;
      border-right: 15px solid transparent;
      border-left: 15px solid transparent;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -13px;
    }
  }
}
</style>
