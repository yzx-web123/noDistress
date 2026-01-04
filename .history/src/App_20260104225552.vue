<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="page-transition" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped>
.page-transition-enter-active,
.page-transition-leave-active {
  transition: all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.page-transition-enter-from {
  opacity: 0;
  transform: translateX(30px) scale(0.95);
}

.page-transition-enter-to {
  opacity: 1;
  transform: translateX(0) scale(1);
}

.page-transition-leave-from {
  opacity: 1;
  transform: translateX(0) scale(1);
}

.page-transition-leave-to {
  opacity: 0;
  transform: translateX(-30px) scale(0.95);
}
</style>
