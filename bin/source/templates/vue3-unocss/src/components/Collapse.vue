<script setup lang="ts">
import vw from "@/utils/inline-px-to-vw";

const props = defineProps<{
  isOpen?: boolean;
  title: string;
  content: string;
  index?: number;
}>();

const isOpen = ref(props.isOpen !== undefined ? props.isOpen : false);
const collapseRef = ref<HTMLDivElement>();
const toggle = () => {
  isOpen.value = !isOpen.value;
  changeHeight(isOpen.value);
};

const changeHeight = (open: boolean) => {
  if (open) {
    collapseRef.value!.style.height = "auto";
    const { height } = collapseRef.value!.getBoundingClientRect();
    collapseRef.value!.style.height = vw(88);
    collapseRef.value!.style.transition = "0.3s ease-in-out";
    collapseRef.value!.getBoundingClientRect();
    collapseRef.value!.style.height = height + "px";
  } else {
    collapseRef.value!.style.height = vw(88);
  }
};

onMounted(() => {
  if (props.isOpen) changeHeight(true);
});
</script>

<template>
  <div
    class="collapse h-88 overflow-hidden cursor-pointer rounded-20 mb-30 px-30"
    @click="toggle"
    ref="collapseRef"
  >
    <div class="lh-88 text-24 flex items-center justify-between relative">
      <div class="font-600 text-24px text-[#333333] lh-88">
        {{ props.title }}
      </div>
      <div>
        <img
          src="@/assets/images/faq/arrow.webp"
          alt=""
          class="w-48 h-48 absolute right-0 top-50% -translate-y-1/2 transition-all duration-250 rotate-[-90deg]"
          :class="{ 'rotate-0': isOpen }"
        />
      </div>
    </div>
    <div
      class="font-400 text-18px text-[rgba(51,51,51,0.8)] lh-26px mb-30 pr-50 whitespace-pre-line"
    >
      {{ props.content }}
    </div>
  </div>
</template>

<style lang="less" scoped>
.collapse {
  position: relative;
  border: 2px solid rgba(97, 56, 43, 0.3);
  box-sizing: content-box;
  &::before {
    content: "";
    width: 1200px;
    background-color: #e0e1e6;
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
