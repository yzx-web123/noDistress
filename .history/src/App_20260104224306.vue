<script setup>
import Index from "./components/index.vue";
import Carousel from "./components/Carousel.vue";
</script>

<template>
  <div class="app-container">
    <div class="content-wrapper">
      <Index />
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
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding-top: 50px;
  padding-bottom: 20px;
  box-sizing: border-box;
}

.content-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.carousel-wrapper {
  width: 90%;
  max-width: 800px;
  margin: 0 auto 20px;
}
</style>
