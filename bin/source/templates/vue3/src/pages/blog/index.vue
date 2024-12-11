<script setup lang="ts">
import Empty from "~/assets/blogs/empty.webp";
import { allBlogList, blogCate, formatDate, sortByDateDesc } from "./config";

defineOptions({
  name: "Blog",
});

const router = useRouter();
const currentCate = ref("all");
const currentIndex = ref(0);
const sortPosts = sortByDateDesc(allBlogList);
const filterBlogList = computed(() => {
  return sortPosts.filter((item) => item.tags.includes(currentCate.value)) || [];
});

function goto(path?: string) {
  if (!path) return;
  router.push(path);
}

function changeTab(index: number, item: any) {
  currentCate.value = item.value;
  currentIndex.value = index;
}
</script>

<template>
  <div class="part">
    <div class="container">
      <VerticalTab
        class="switch-tab"
        :curIndex="currentIndex"
        :list="blogCate"
        @change="(val:any, item:any) => changeTab(val, item)"
      />
      <template v-if="filterBlogList.length">
        <div class="card-container">
          <div
            data-aos="fade-up"
            class="card"
            :class="i == 0 && 'first'"
            v-for="(c, i) in filterBlogList"
            :key="i"
            @click="goto(`/blog/${c.postId}`)"
            :data-aos-delay="200 + i * 100"
          >
            <div class="post-box">
              <img :src="c.post" alt="post" />
            </div>
            <div class="tag" v-if="i === 0">NEW</div>
            <div class="content">{{ c.title }}</div>
            <div class="footer">
              {{ formatDate(c.date) }}
            </div>
          </div>
        </div>
      </template>
      <img v-else data-aos="fade-up" :src="Empty" alt="Empty" class="empty" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.part {
  padding-top: 100px;
  padding-bottom: 50px;
  .switch-tab {
    margin-bottom: 60px;
  }
  .card-container {
    display: flex;
    flex-wrap: wrap;
    min-height: 120px;
    .card {
      width: 387px;
      height: 427px;
      background: #ffffff;
      border-radius: 12px;
      border: 1px solid #e8e8ea;
      padding: 15px;
      margin-bottom: 35px;
      margin-right: 10px;
      overflow: hidden;
      position: relative;
      cursor: pointer;

      &.first {
        flex-basis: 100%;
        height: 450px;
        overflow: hidden;
        border-radius: 12px;
        padding: 0;
        img {
          transition: all 0.25s ease;
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          position: absolute;
        }
        .content {
          width: 720px;
          font-weight: 600;
          font-size: 36px;
          color: #ffffff;
          line-height: 40px;
          position: absolute;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          left: 30px;
          bottom: 80px;
        }
        .footer {
          font-size: 16px;
          color: #ffffff;
          position: absolute;
          left: 40px;
          bottom: 30px;
          margin: 0;
        }
      }
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        .post-box img {
          transform: scale(1.2);
        }
      }
      .post-box {
        width: 100%;
        height: 236px;
        overflow: hidden;
        padding: 0;
        border-radius: 12px;
        img {
          transition: all 0.25s ease;
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }
      }
      .tag {
        font-size: 14px;
        color: #ffffff;
        position: absolute;
        left: 30px;
        bottom: 180px;
        background: var(--color-primary);
        padding: 5px 12px;
        border-radius: 10px;
      }
      .content {
        margin-top: 19px;
        font-weight: bold;
        font-size: 24px;
        color: #333333;
        line-height: 28px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
      .footer {
        position: absolute;
        bottom: 15px;
        left: 24px;
        right: 24px;
        font-size: 16px;
        color: #6c6f77;
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
