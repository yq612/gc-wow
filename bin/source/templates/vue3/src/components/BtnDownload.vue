<script setup lang="ts">
import IconGoogleDownload from "~/assets/common/btn-google.webp";
import IconGreenGoogleDownload from "~/assets/common/btn-google-green.webp";
import IconDarkGoogleDownload from "~/assets/common/btn-google-dark.webp";
import Code from "~/assets/common/code.webp";

withDefaults(defineProps<{ showCode?: boolean; bgType?: string }>(), {
  bgType: "white", // white green
  showCode: false,
});
</script>

<template>
  <a class="btn-download" href="https://www.google.com/" target="_blank" title="download">
    <img :src="IconGoogleDownload" alt="download" v-if="bgType === 'white'" />
    <img :src="IconGreenGoogleDownload" alt="download" v-if="bgType === 'green'" />
    <img :src="IconDarkGoogleDownload" alt="download" v-if="bgType === 'dark'" />
    <div class="code" v-if="showCode">
      <img :src="Code" alt="Code" />
    </div>
  </a>
</template>

<style lang="scss" scoped>
.btn-download {
  cursor: pointer;
  width: 244px;
  height: 82px;
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
