<!--
 * @Author: yzx-web123 1184699248@qq.com
 * @Date: 2026-01-04 22:49:56
 * @LastEditors: yzx-web123 1184699248@qq.com
 * @LastEditTime: 2026-01-05 00:23:24
 * @FilePath: \vite-project\src\components\BaYePage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import Index from "./index.vue";
import Carousel from "./Carousel.vue";
import LoveHeartPage from "./LoveHeartPage.vue";
</script>

<template>
  <div class="app-container">
    <div class="content-wrapper">
      <Index />
      <div class="love-heart-wrapper">
        <LoveHeartPage />
      </div>
    </div>
    <div class="carousel-wrapper">
      <Carousel />
    </div>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  padding-top: 50px;
  padding-bottom: 150px; /* 增加底部内边距，确保轮播图不会遮挡爱心图的详细信息 */
  box-sizing: border-box;
}

.content-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  overflow: visible;
  margin-bottom: 120px; /* 给爱心图组件添加底部间距，确保详细信息框不会被轮播图遮挡 */
}

.love-heart-wrapper {
  flex: 1;
  width: 100%;
  max-width: 1000px;
  margin-top: -20px;
}

.carousel-wrapper {
  width: 90%;
  max-width: 800px;
  margin: 0 auto 20px;
  position: relative;
  z-index: 1; /* 确保轮播图位于爱心图详细信息下方 */
}
</style>
