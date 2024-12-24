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
        <div class="date">{{ formatDate(targetPost.date) }}</div>
        <div class="title">{{ targetPost.title }}</div>
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
      font-size: 52px;
      color: #333333;
      line-height: 75px;
      text-align: left;
      margin-bottom: 30px;
    }
    .date {
      font-weight: lighter;
      font-size: 14px;
      color: white;
      background: var(--color-primary);
      display: inline-block;
      padding: 5px 20px;
      border-radius: 22px;
      margin-bottom: 30px;
    }
    .banner {
      display: block;
      margin: 20px 0 30px;
      width: 100%;
    }
    .content-wrapper {
      .line-title {
        font-weight: bold;
        font-size: 30px;
        color: #333333;
        line-height: 1.4;
        margin-bottom: 22px;
      }
      .line-text {
        font-weight: lighter;
        font-size: 30px;
        color: #333333;
        line-height: 1.4;
        margin-bottom: 40px;
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
