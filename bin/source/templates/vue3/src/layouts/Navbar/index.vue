<script setup lang="ts">
import { PageConstant } from "~/constant/pageConstant";
import MenuList from "./components/MenuList.vue";
import Logo from "~/assets/layout/logo.webp";
import appStore from "~/store";

defineOptions({
  name: "HeaderNav",
});
const { togglePositionState } = appStore.pageConfig;
const atTop = computed(() => {
  const { config } = appStore.pageConfig;
  return config.atTheTop;
});
const whiteBgList = ["SecurityStatement", "Blog"];
const matchWhiteBg = () => {
  const route = useRoute();
  const routerName = route.name as string;
  return whiteBgList.includes(routerName);
};
function debounce(func: Function, wait: number) {
  let timeout: any;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  };
}
onMounted(() => {
  window.addEventListener(
    "scroll",
    debounce(function () {
      const result = (document.documentElement?.scrollTop || 0) > 0;
      togglePositionState(!result);
    }, 100)
  );
});
</script>

<template>
  <div
    class="header-nav"
    id="header-Nav"
    :class="[!atTop && 'active', matchWhiteBg() && 'whiteBg']"
  >
    <div class="inner-container">
      <div class="logo-wrapper">
        <img :src="Logo" alt="Logo" class="logo" />
        {{ PageConstant.APP_NAME }}
      </div>
      <MenuList />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9999;
  transition: all 0.25s ease;
  background: #c3e0fd;

  &.whiteBg {
    background-color: white;
    box-shadow: 0px 4px 9px 0px rgba(192, 201, 213, 0.15);
    .logo-wrapper {
      color: var(--color-primary);
    }
  }
  &.active {
    background: white;
    .logo-wrapper {
      /* background: white; */
      color: #333333;
    }
  }

  .inner-container {
    width: 1710px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
  }

  .logo-wrapper {
    font-size: 20px;
    color: #333333;
    padding: 10px 15px;
    border-radius: 15px;
    transition: all 0.2s ease;
    .logo {
      height: 38px;
      margin-right: 10px;
      display: inline-block;
    }
  }
}
</style>
<style lang="scss" scoped>
/* 移动设备样式 */
@media only screen and (max-width: 768px) {
  .header-nav {
    position: relative;
    background: white;
    .inner-container {
      height: 80px;
      width: 100%;
    }
    .logo-wrapper {
      padding: 20px 30px 0 40px;
      margin-left: 0;
      color: var(--color-primary);
      font-size: 32px;
      .logo {
        height: 60px;
      }
    }
  }
}
</style>
