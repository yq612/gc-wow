<script setup lang="ts">
import { formatDate } from "~/pages/news/config";
withDefaults(defineProps<{ blog?: any }>(), {
  blog: void 0,
});

const router = useRouter();
function goto(path?: string) {
  if (!path) return;
  router.push(path);
}
</script>

<template>
  <div class="post-wrapper" v-if="blog" @click="goto(`/post/${blog.postId}`)">
    <div class="post-item">
      <div class="img-box">
        <!-- <img :src="blog.post" alt="post" /> -->
      </div>
      <div class="panel">
        <div class="name">{{ blog.title }}</div>
        <div class="date">{{ formatDate(blog.date) }}</div>
        <div class="des">
          {{ blog.des }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.post-wrapper {
  position: relative;
  padding: 0 0 40px 0;
  .post-item {
    display: flex;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 40px;
    cursor: pointer;
    .img-box {
      width: 344px;
      height: 251px;
      border-radius: 8px;
      overflow: hidden;
      margin-right: 25px;
      background-image: linear-gradient(to top, #88d3ce 0%, #6e45e2 100%);
      &:hover {
        img {
          transform: scale(1.2);
        }
      }
      img {
        transition: all 0.2s ease-out;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .panel {
      flex: 1;
      position: relative;
      .name {
        font-weight: bold;
        font-size: 30px;
        color: #333333;
        line-height: 38px;
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        margin-bottom: 30px;
      }
      .date {
        width: 123px;
        height: 34px;
        background: var(--color-primary);
        border-radius: 22px;
        font-size: 14px;
        font-weight: lighter;
        color: white;
        text-align: center;
        line-height: 34px;
        top: 120px;
      }
      .des {
        font-weight: 500;
        font-size: 20px;
        color: #333333;
        line-height: 1.3;
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        position: absolute;
        top: 180px;
      }
    }
  }
}
</style>
