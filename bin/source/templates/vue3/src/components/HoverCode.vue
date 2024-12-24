<script setup lang="ts">
import Code from "~/assets/common/code.webp";

withDefaults(defineProps<{ bgColor?: string }>(), {
  bgColor: "white",
});
</script>

<template>
  <div class="code-wrapper" :style="{ backgroundColor: bgColor }">
    <img :src="Code" alt="Code" class="code" />
    <div class="box">
      <img :src="Code" alt="Code" class="code" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.code-wrapper {
  width: 50px;
  height: 50px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  .code {
    width: 90%;
    height: 90%;
  }
  .box {
    position: absolute;
    width: 200px;
    height: 200px;
    bottom: calc(100% + 20px);
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease;
    img {
      width: 99%;
      height: 99%;
    }
    &::before {
      width: 0;
      height: 0;
      border-top: 13px solid white;
      border-right: 13px solid transparent;
      border-left: 13px solid transparent;
      content: "";
      position: absolute;
      bottom: -10px;
    }
  }
}
.code-wrapper:hover {
  .box {
    opacity: 1;
    visibility: visible;
  }
}
</style>
