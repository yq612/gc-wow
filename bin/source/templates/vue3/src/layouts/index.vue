<script setup lang="ts">
import Navbar from "./Navbar/index.vue"
import Footer from "./Footer/index.vue"

defineOptions({
  name: "Layout",
});

</script>

<template>
  <div id="main-container">
    <Navbar />
    <router-view v-slot="{ Component }" class="router-container">
      <transition name="scale" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <Footer />
  </div>
</template>

<style scoped>
.router-container {
  transition: all 0.2s;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.3s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}
</style>
