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
  position: relative;
  z-index: 99;
  .tab {
    display: inline-block;
    vertical-align: middle;
    margin-right: 20px;
    cursor: pointer;
    transition: all 0.2s ease;
    padding: 12px 30px;
    background: #f5f5f5;
    border-radius: 10px;
    &.active,
    &:hover {
      background-color: var(--color-primary);
      color: white;
    }
  }
}
</style>
