<script setup lang="ts">
import { headerMenu, MenuItem } from "~/config/menus/index";

const router = useRouter();
const route = useRoute();
const matchRoute = (path: string = "") => {
  const routerPath = route.path;
  const arr1 = routerPath.split("/");
  const arr2 = path.split("/");

  if (arr1.length === arr2.length) {
    return routerPath === path;
  } else {
    return routerPath.includes(path);
  }
};

function goto(item: MenuItem) {
  const { path, selector } = item;

  // 如果有 path，则先跳转路由
  if (path) {
    router.push(path);
  }

  // 如果有 selector，则滚动到指定位置
  if (selector) {
    nextTick(() => {
      setTimeout(() => {
        scrollToContact(selector);
      }, 500);
    });
  }
}

function scrollToContact(selector: string) {
  const element = document.querySelector(`#${selector}`);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<template>
  <div class="menu">
    <div
      v-for="(item, i) in headerMenu"
      :key="i"
      class="menu-item"
      @click="!item.children && goto(item)"
      :class="!item.selector && matchRoute(item.path) && 'active'"
    >
      {{ item.name }}
      <div class="submenu" v-if="item.children">
        <div
          class="submenu-item"
          v-for="(sub, j) in item.children"
          :key="j"
          :class="matchRoute(sub.path) && 'active'"
          @click="goto(sub)"
        >
          {{ sub.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu {
  display: flex;
  align-items: center;
  flex: 1;
  margin: 0 70px;
  .menu-item {
    position: relative;
    margin: 0 10px;
    cursor: pointer;
    padding: 18px 16px;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.535);
    border-radius: 16px;
    transition: all 0.2s ease;
    margin-bottom: 2px;
    &.active {
      background: var(--color-primary);
      color: white;
      &::before {
        opacity: 1;
      }
    }

    &:focus,
    &:hover {
      background: var(--color-primary);
      color: white;
    }
  }
  .submenu {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 55px;
    background: #ffffff;
    border-radius: 5px;
    text-align: center;
    width: 128px;
    opacity: 0;
    transition: all 0.2s ease;
    box-shadow: 0 5px 10px 1px #b6b6b6;
    visibility: hidden;
    .submenu-item {
      font-size: 14px;
      line-height: 22px;
      color: var(--color-primary);
      padding: 10px 0;
      transition: all 0.2s ease;
      border-radius: 5px;

      &.active,
      &:hover {
        color: white;
        background: var(--color-secondary);
      }
    }
  }
  .menu-item:hover {
    .submenu {
      visibility: visible;
      opacity: 1;
    }
  }
}
</style>
<style lang="scss" scoped>
/* 移动设备样式 */
@media only screen and (max-width: 768px) {
  .menu {
    display: none;
  }
}
</style>
