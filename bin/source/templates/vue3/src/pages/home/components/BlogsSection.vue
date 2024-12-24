<script setup lang="ts">
import { allBlogList, sortByDateDesc } from "~/pages/news/config";

const sortPosts = sortByDateDesc(allBlogList);
const filterBlogList = computed(() => {
  return sortPosts.filter((item) => item.tags.includes("all")).slice(0, 3) || [];
});
</script>

<template>
  <div class="part">
    <div class="container">
      <div class="section-title" data-aos="fade-up">Latest Blogs</div>
      <div v-if="filterBlogList.length" class="post-list">
        <BlogPanel
          :blog="item"
          v-for="(item, i) in filterBlogList"
          :key="i"
          data-aos="fade-up"
          data-aos-delay="200"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.part {
  position: relative;
  background: white;
  padding: 150px 0;
  .section-title {
    width: 549px;
    margin: 0 auto 80px;
  }
  .post-list {
    :deep(.post-wrapper):last-child {
      .post-item {
        border: none;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
/* 移动设备样式 */
@media only screen and (max-width: 768px) {
  .part {
    display: none;
  }
}
</style>
