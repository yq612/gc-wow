<script setup lang="ts">
import ArrowRight from "~/assets/common/arrow-right-white.webp";

withDefaults(defineProps<{ routeName?: string }>(), {
  routeName: "",
});

const router = useRouter();

function goto(payload?: any) {
  if (!payload) return;
  router.push(payload);
}
</script>

<template>
  <div class="btn-more" @click="routeName && goto({ name: routeName })">
    Learn More
    <img :src="ArrowRight" alt="ArrowRight" class="arrow" />
  </div>
</template>

<style lang="scss" scoped>
.btn-more {
  width: 128px;
  height: 38px;
  cursor: pointer;
  background: #052520;
  border-radius: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: white;
  text-decoration: none;
  overflow: hidden;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 25px;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.307);
    transform: skew(45deg) translate3d(-100px, 0, 0);
  }
  &:hover::before {
    transition: ease-in-out 0.4s;
    transform: skew(45deg) translate3d(100px, 0, 0);
  }
  .arrow {
    width: 18px;
    margin-left: 5px;
  }
}
</style>

<style lang="scss" scoped>
/* 移动设备样式 */
@media only screen and (max-width: 768px) {
  .btn-more {
    width: 220px;
    height: 50px;
    font-size: 26px;
    &::before {
      display: none;
    }
  }
}
</style>
