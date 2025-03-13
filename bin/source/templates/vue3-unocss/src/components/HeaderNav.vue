<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { nextTick } from 'vue'
import { APP_NAME, menuList, SHOW_DOWNLOAD } from '@/config/index'
import type { MenuItem } from '@/config/index'

const route = useRoute()
const router = useRouter()

function isActive(path: string) {
  if (path === '/' && route.path === '/')
    return true
  return path !== '/' && route.path.startsWith(path)
}

async function handleNavigation(item: MenuItem) {
  const { path, selector } = item

  // 如果目标路由与当前路由不同，先进行路由跳转
  if (path && path !== route.path) {
    await router.push(path)
    // 如果需要滚动到指定位置，等待路由切换完成
    if (selector) {
      await nextTick()
      // 给页面渲染一些时间
      setTimeout(() => scrollToElement(selector), 100)
    }
    return
  }

  // 如果在同一页面且有选择器，直接滚动
  if (selector)
    scrollToElement(selector)
}

function scrollToElement(selector: string) {
  const element = document.querySelector(`#${selector}`)
  if (!element) {
    console.warn(`Element with id "${selector}" not found`)
    return
  }

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}
</script>

<template>
  <div class="header-nav fixed left-0 right-0 top-0 z-10 h-[var(--nav-bar-height)] flex items-center bg-white">
    <div class="area flex items-center justify-between">
      <div class="logo flex items-center">
        <img src="@/assets/images/common/logo.webp" alt="logo" class="mr-15 h-42 w-42">
        <span class="text-16px text-[var(--primary-color)] font-bold">{{ APP_NAME }}</span>
      </div>
      <div class="menu flex flex-1 items-center justify-center gap-90">
        <div
          v-for="item in menuList"
          :key="item.name"
          class="h-45 flex items-center"
        >
          <span
            class="font-500transition-colors cursor-pointer text-16px duration-300"
            :class="[
              isActive(item.path)
                ? 'text-[var(--primary-color)]'
                : 'text-[#333333] hover:text-[var(--primary-color)]',
            ]"
            @click="handleNavigation(item)"
          >{{ item.name }}</span>
        </div>
      </div>
      <BtnDownload v-if="SHOW_DOWNLOAD" class="download" />
    </div>
  </div>
</template>

<style lang="less" scoped>
@media only screen and (max-width: 768px) {
  .header-nav {
    height: auto;
    padding: 20px 80px;
  }
  .logo {
    img {
      height: 150px;
      width: 150px;
      margin-right: 40px;
    }
    span {
      font-size: 65px;
    }
  }
  .menu {
    display: none;
  }
  .download {
    transform: scale(3.4);
    transform-origin: right;
  }
}
</style>
