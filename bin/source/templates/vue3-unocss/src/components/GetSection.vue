<template>
  <div class="get-section relative min-h-650 pb-100">
    <div rotate="3" class="dot absolute left-220 top-225 h-70px w-375px border-rd-10px bg-[#FFAF40]" />
    <div class="text relative w-790px pl-240 pt-220 text-48px text-[#FFFFFF] font-bold lh-76px">
      Don't hesitate. Get the financial support you need right away.
    </div>
    <BtnDownload :height="100" class="download ml-342 mt-75" />
  </div>
</template>

<style lang="less" scoped>
.get-section {
  background: url('@/assets/images/home/bg-4.webp') no-repeat center top / 1685px auto;
}
</style>

<style lang="less" scoped>
@media only screen and (max-width: 768px) {
  .get-section {
    background: var(--primary-color);
    margin: 80px;
    border-radius: 50px;
    overflow: hidden;
    margin-bottom: 220px;
    .dot {
      display: none;
    }
    .text {
      position: relative;
      font-size: 90px;
      width: auto;
      margin: 80px 0 20px 80px;
      padding: 0;
      line-height: 1.5;
    }
    .download {
      transform: scale(2);
      transform-origin: left;
      margin-left: 60px;
    }
  }
}
</style>
