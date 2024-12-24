<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    data?: { title: string; content: string };
    open?: boolean;
  }>(),
  {
    data: { title: "", content: "" } as any,
    open: false,
  }
);

const containerDom = ref<null | Element>(null);
const titleDom = ref<null | Element>(null);
const uuid = Math.random().toString(16).slice(2);
const emits = defineEmits(["update:open"]);

onMounted(() => {
  containerDom.value = document.querySelector("#collapse_item_" + uuid);
  titleDom.value = document.querySelector("#collapse_title_" + uuid);
  if (props.open && containerDom.value) {
    (containerDom.value as any).style.height = containerDom.value.scrollHeight + "px";
  }
});

watch(props, (val) => {
  containerDom.value = document.querySelector("#collapse_item_" + uuid);
  titleDom.value = document.querySelector("#collapse_title_" + uuid);
  if (val.open && containerDom.value) {
    (containerDom.value as any).style.height = containerDom.value.scrollHeight + "px";
  } else if (titleDom.value) {
    (containerDom.value as any).style.height = titleDom.value.scrollHeight + "px";
  }
});

function toggleOpen() {
  if (!containerDom.value) return;
  const targetHeight = props.open
    ? titleDom.value?.clientHeight
    : containerDom.value.scrollHeight;
  (containerDom.value as any).style.height = targetHeight + "px";
  emits("update:open", !props.open);
}
</script>

<template>
  <div class="container" :id="`collapse_item_` + uuid">
    <div class="title" :id="`collapse_title_` + uuid" @click="toggleOpen">
      <div class="showText">{{ data.title }}</div>
      <div class="arrow" :class="open && 'open'"></div>
    </div>
    <div class="content">
      {{ data.content }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  transition: height 0.25s ease;
  height: 68px;
  background: #ffffff;
  border-radius: 10px;
  position: relative;
  margin-bottom: 30px;
  border: 2px solid #e0e0e0;
  &:nth-child(odd) {
    margin-right: 20px;
  }
  .showText {
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 68px;
    font-size: 18px;
    color: #333333;
    line-height: 32px;
    padding-right: 40px;
    padding: 0 80px 0 30px;
  }
  .arrow {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    position: absolute;
    right: 25px;
    top: 10px;
    transition: all 0.2s ease;
    cursor: pointer;
    &::after,
    &::before {
      width: 20px;
      height: 3px;
      background: rgba(111, 108, 143, 1);
      content: "";
      position: absolute;
      top: 22px;
      left: 10px;
      transition: all 0.2s ease;
    }
    &::after {
      transform: rotate(90deg);
    }
    &.open {
      &::after {
        transform: rotate(0);
      }
    }
  }
  .content {
    padding: 0 30px;
    margin-top: 0;
    white-space: pre-line;
    font-size: 16px;
    line-height: 1.7;
    padding-bottom: 20px;
    color: #5d6473;
  }
}
</style>
