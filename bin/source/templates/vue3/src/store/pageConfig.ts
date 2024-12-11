import { defineStore } from "pinia";
// import { useLocalStorage } from "@vueuse/core";

/** 默认的页面配置 */
const DEFAULT_PAGE_CONFIG = {
  /** 处于顶部 */
  atTheTop: true,
};

export const pageConfig = defineStore("pageConfig", () => {
  // const pageConfig = useLocalStorage("pageConfig", Object.assign({}, DEFAULT_PAGE_CONFIG));
  const config = ref(DEFAULT_PAGE_CONFIG);
  // function increment() {
  //   count.value++;
  // }

  // 改变位置状态
  function togglePositionState(target: boolean) {
    config.value.atTheTop = target;
  }

  return { config, togglePositionState };
});
