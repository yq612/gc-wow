<script setup lang="ts">
withDefaults(defineProps<{ curIndex?: number; list: Array<any> }>(), {
  curIndex: 0,
});

defineEmits(["change"]);
</script>

<template>
  <div class="tab-wrapper">
    <div
      class="tab"
      v-for="(item, i) in list"
      :key="i"
      :class="[i === curIndex && 'active']"
      @click="i !== curIndex && $emit('change', i, item)"
    >
      {{ item.label }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tab-wrapper {
  font-size: 22px;
  line-height: 20px;
  text-align: center;
  display: flex;
  gap: 20px;
  position: relative;
  z-index: 99;
  .tab {
    cursor: pointer;
    transition: all 0.2s ease;
    flex: 1;
    padding: 20px 0;
    background: #f8faff;
    border-radius: 32px;
    border: 1px solid rgba(0, 0, 0, 0);
    &.active,
    &:hover {
      background-color: var(--color-primary);
      color: white;
    }
  }
}
</style>
