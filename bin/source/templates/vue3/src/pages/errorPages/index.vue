<script setup lang="ts">
defineOptions({
  name: "ErrorPage",
});
const router = useRouter();
</script>

<template>
  <div class="error-page">
    <p>We're sorry, something is not right, page not found!</p>
    <button class="btn-back" @click="router.back()">Back !</button>
  </div>
</template>

<style lang="scss" scoped>
.error-page {
  height: calc(100vh - 460px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 33px;
  flex-direction: column;
  .btn-back {
    padding: 5px 40px;
    background-color: var(--color-primary);
    color: white;
    border-radius: 10px;
    margin-top: 20px;
    cursor: var(--font-color-light);
    cursor: pointer;
  }
}
</style>
