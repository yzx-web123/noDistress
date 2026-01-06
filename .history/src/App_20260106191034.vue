<script setup>
import { RouterView } from "vue-router";
import MusicPlayer from "./components/MusicPlayer.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

// 入口页面不需要显示音乐播放器
const showMusicPlayer = computed(() => route.path !== "/");
</script>

<template>
  <router-view />
  <MusicPlayer v-if="showMusicPlayer" />
</template>

<style scoped></style>
