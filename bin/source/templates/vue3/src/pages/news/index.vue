<script setup lang="ts">
import Empty from "~/assets/common/empty.webp";
import { allBlogList, blogCate, sortByDateDesc } from "./config";
import BlogPanel from "~/components/BlogPanel.vue";
import DownloadSection from "~/components/DownloadSection.vue";

defineOptions({
  name: "Blog",
});

const currentCate = ref("all");
const currentIndex = ref(0);
const sortPosts = sortByDateDesc(allBlogList);
const filterBlogList = computed(() => {
  return sortPosts.filter((item) => item.tags.includes(currentCate.value)) || [];
});

function changeTab(index: number, item: any) {
  currentCate.value = item.value;
  currentIndex.value = index;
}
</script>

<template>
  <div class="news-part">
    <div class="container">
      <div class="banner-wrapper" data-aos="fade-up">
        <div class="name">Latest Blogs</div>
        <div class="sub">In the News</div>
      </div>
      <VerticalTab
        class="switch-tab"
        :curIndex="currentIndex"
        :list="blogCate"
        data-aos="fade-up"
        @change="(val:any, item:any) => changeTab(val, item)"
      />
      <div v-if="filterBlogList.length" class="post-list">
        <BlogPanel
          :blog="item"
          v-for="(item, i) in filterBlogList"
          :key="i"
          data-aos="fade-up"
          data-aos-delay="200"
        />
      </div>
      <img v-else data-aos="fade-up" :src="Empty" alt="Empty" class="empty" />
    </div>
    <DownloadSection />
  </div>
</template>

<style lang="scss" scoped>
.news-part {
  padding-top: 100px;
  .banner-wrapper {
    display: flex;
    align-items: center;
    margin: 40px 0 70px;
    color: #333333;
    .name {
      font-weight: bold;
      font-size: 48px;
      line-height: 0.8;
      border-right: 1px solid #353535;
      padding-right: 24px;
      margin-right: 24px;
    }
    .des {
      font-size: 16px;
    }
  }
  .switch-tab {
    margin-bottom: 60px;
  }
  .post-list {
    :deep(.post-wrapper):last-child {
      .post-item {
        border: none;
      }
    }
  }
  .empty {
    width: 400px;
    display: block;
    margin: 150px auto 120px;
  }
}
</style>
