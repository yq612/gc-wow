<script setup lang="ts">
import { allBlogList, formatDate } from "../config";

const router = useRoute();

const targetPost = computed(() => {
  const { id } = router.params;
  const post = allBlogList.find((it) => String(it.postId) === id);
  return post?.content as any;
});
</script>

<template>
  <div class="section">
    <div class="container">
      <div class="post-wrapper" v-if="targetPost">
        <div class="title">{{ targetPost.title }}</div>
        <div class="date">{{ formatDate(targetPost.date) }}</div>
        <img :src="targetPost.banner" alt="banner" class="banner" />
        <div class="content-wrapper" v-if="targetPost.content">
          <div v-for="(c, i) in targetPost.content" :key="i">
            <div class="line-title" v-if="c.type === 'title'">{{ c.des }}</div>
            <div class="line-text" v-if="c.type === 'content'">{{ c.des }}</div>
            <div class="line-pic" v-if="c.type === 'img'">
              <img :src="c.src" alt="pic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section {
  padding: 140px 0 40px;
  .post-wrapper {
    .title {
      font-weight: bold;
      font-size: 54px;
      color: #333333;
      line-height: 64px;
      margin-bottom: 10px;
    }
    .date {
      font-weight: 400;
      font-size: 16px;
      color: #6c6f77;
      line-height: 34px;
    }
    .banner {
      display: block;
      margin: 20px 0 30px;
      width: 100%;
    }
    .content-wrapper {
      .line-title {
        font-weight: bold;
        font-size: 18px;
        color: #333333;
        line-height: 26px;
        margin-bottom: 12px;
      }
      .line-text {
        font-weight: 400;
        font-size: 18px;
        color: #333333;
        line-height: 26px;
        margin-bottom: 30px;
        white-space: pre-line;
      }
      .line-pic {
        margin: 20px 0;
        img {
          display: block;
          max-width: 100%;
        }
      }
    }
  }
}
</style>
