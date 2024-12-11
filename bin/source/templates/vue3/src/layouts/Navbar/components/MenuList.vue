<script setup lang="ts">
const router = useRouter();
const route = useRoute();
const matchRoute = (path: string = "") => {
  const route = useRoute();
  const routerPath = route.path;
  const arr1 = routerPath.split("/");
  const arr2 = path.split("/");

  if (arr1.length === arr2.length) {
    return routerPath === path;
  } else {
    return routerPath.includes(path);
  }
};

const menuLists: any[] = [
  {
    name: "Introduction",
    path: "/home",
  },
  { name: "Blogs", path: "/blog" },
];

function goto(item: any) {
  const { path, selector } = item;
  if (!selector) {
    router.push(path);
  } else {
    if (route.path.includes("/home")) {
      nextTick(() => {
        scrollToContact(selector);
      });
    } else {
      router.push(path);
      setTimeout(() => {
        nextTick(() => {
          scrollToContact(selector);
        });
      }, 500);
    }
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
      v-for="(item, i) in menuLists"
      :key="i"
      class="menu-item"
      @click="goto(item)"
      :class="!item.selector && matchRoute(item.path) && 'active'"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu {
  display: flex;
  padding: 18px 0;
  align-items: center;

  .menu-item {
    position: relative;
    margin: 0 10px;
    cursor: pointer;
    padding: 5px 16px;
    font-size: 16px;
    color: #333333;
    border-radius: 16px;
    transition: all 0.2s ease;
    &.active {
      background: var(--color-primary);
      color: white;
    }

    &:focus,
    &:hover {
      background: var(--color-primary);
      color: white;
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
