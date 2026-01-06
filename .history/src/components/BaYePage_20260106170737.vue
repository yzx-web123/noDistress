<!--
 * @Author: yzx-web123 1184699248@qq.com
 * @Date: 2026-01-04 22:49:56
 * @LastEditors: yzx-web123 1184699248@qq.com
 * @LastEditTime: 2026-01-05 00:23:24
 * @FilePath: \vite-project\src\components\BaYePage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="ba-ye-page">
    <Navbar />
    <div class="content-wrapper">
      <div class="page-header">
        <h1 class="page-title">百业成员</h1>
        <p class="page-subtitle">记录我们的美好时光</p>
      </div>
      <div class="photo-grid">
        <div
          v-for="(photo, index) in photos"
          :key="index"
          class="photo-item"
          @click="showPhotoDetails(index)"
        >
          <img :src="photo.src" :alt="photo.title" class="photo-img" />
          <div class="photo-overlay">
            <h3>{{ photo.title }}</h3>
            <p>{{ photo.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 照片详情弹窗 -->
    <div class="modal" v-if="selectedPhoto" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h2>{{ selectedPhoto.title }}</h2>
          <button class="close-btn" @click="closeModal">&times;</button>
        </div>
        <div class="modal-body">
          <img
            :src="selectedPhoto.src"
            :alt="selectedPhoto.title"
            class="modal-img"
          />
          <p class="modal-description">{{ selectedPhoto.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "./Navbar.vue";
import { ref } from "vue";

// 照片数据
const photos = ref([
  {
    id: 1,
    src: "./images/1.jpg",
    title: "江湖聚会",
    description: "燕云十六声成员首次相聚",
  },
  {
    id: 2,
    src: "./images/2.png",
    title: "武艺切磋",
    description: "各门派武艺交流",
  },
  {
    id: 3,
    src: "./images/3.jpg",
    title: "山川美景",
    description: "游历山川，欣赏美景",
  },
  {
    id: 4,
    src: "./images/4.jpg",
    title: "英雄气概",
    description: "展现江湖英雄气概",
  },
  {
    id: 5,
    src: "./images/5.jpg",
    title: "侠义心肠",
    description: "弘扬侠义精神",
  },
  {
    id: 6,
    src: "./images/6.png",
    title: "剑法精通",
    description: "剑侠展示精妙剑法",
  },
  {
    id: 7,
    src: "./images/7.jpg",
    title: "刀法无双",
    description: "刀客展现强大刀法",
  },
  {
    id: 8,
    src: "./images/8.png",
    title: "暗器专家",
    description: "暗器高手展示技艺",
  },
  {
    id: 9,
    src: "./images/9.jpg",
    title: "轻功卓越",
    description: "轻功大师展示轻功",
  },
  {
    id: 10,
    src: "./images/10.png",
    title: "内力深厚",
    description: "内功高手展示内力",
  },
]);

// 选中的照片
const selectedPhoto = ref(null);

// 显示照片详情
const showPhotoDetails = (index) => {
  selectedPhoto.value = photos.value[index];
};

// 关闭模态框
const closeModal = () => {
  selectedPhoto.value = null;
};
</script>

<style scoped>
.ba-ye-page {
  width: 100vw;
  min-height: 100vh;
  padding-top: 80px; /* 给导航栏留出空间 */
  padding-bottom: 50px;
  box-sizing: border-box;
  background-color: #000000;
}

.page-header {
  position: absolute;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 100;
  color: #ffffff;
}

.page-title {
  font-size: 3.5rem;
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 15px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  animation: fadeInDown 1s ease;
}

.page-subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  color: #ffffff;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  opacity: 0.9;
  animation: fadeInUp 1s ease;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

/* 动画 */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
