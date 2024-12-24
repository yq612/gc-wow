<script setup lang="ts">
import { list } from "./faq";
import DownloadSection from "~/components/DownloadSection.vue";

const route = useRoute();

const faqList = ref(list);
const currentCate = ref(route.query?.tag || "loan");
const currentIndex = ref(0);

function changeTab(index: number, item: any) {
  currentCate.value = item.value;
  currentIndex.value = index;
  currentFaq.value.forEach((it: any, index: number) => (it.open = index == 0));
}

const currentFaq = computed(() => {
  return faqList.value.find((it) => it.value === currentCate.value)?.faq;
});
</script>

<template>
  <div class="part">
    <div class="container" data-aos="fade-up">
      <div class="banner-wrapper">
        <div class="name">Frequently Asked Questions</div>
      </div>
      <VerticalTab
        class="switch-tab"
        :curIndex="currentIndex"
        :list="faqList"
        @change="(val:any, item:any) => changeTab(val, item)"
      />
      <CollapseItem
        v-for="(c, j) in currentFaq"
        :key="j"
        v-model:open="c.open"
        :data="{ title: c.question, content: c.answer }"
      />
    </div>
  </div>
  <DownloadSection :aosOffset="-250" />
</template>

<style lang="scss" scoped>
.part {
  padding: 100px 0 120px;
  .banner-wrapper {
    display: flex;
    align-items: center;
    margin: 40px 0 70px;
    color: #333333;
    .name {
      font-weight: bold;
      font-size: 48px;
      line-height: 0.8;
    }
  }
  .switch-tab {
    margin-bottom: 60px;
  }
}
</style>
