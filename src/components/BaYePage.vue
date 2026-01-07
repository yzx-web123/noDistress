<!--
 * @Author: yzx-web123 1184699248@qq.com
 * @Date: 2026-01-04 22:49:56
 * @LastEditors: yzx-web123 1184699248@qq.com
 * @LastEditTime: 2026-01-06 22:32:33
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
          v-for="(member, index) in currentMembers"
          :key="index"
          class="photo-item"
          @click="showPhotoDetails(index)"
        >
          <img :src="member.src" :alt="member.title" class="photo-img" />
          <div class="photo-overlay">
            <h3>{{ member.gameId }}</h3>
            <p>{{ member.description }}</p>
          </div>
        </div>
      </div>

      <!-- 分页控件 -->
      <div v-if="totalPages > 1" class="pagination">
        <button
          class="pagination-btn"
          :disabled="currentPage === 1"
          @click="previousPage"
        >
          上一页
        </button>

        <div class="pagination-numbers">
          <button
            v-for="page in totalPages"
            :key="page"
            class="pagination-number"
            :class="{ active: page === currentPage }"
            @click="goToPage(page)"
          >
            {{ page }}
          </button>
        </div>

        <button
          class="pagination-btn"
          :disabled="currentPage === totalPages"
          @click="nextPage"
        >
          下一页
        </button>
      </div>
    </div>
    <!-- 照片详情弹窗 -->
    <div class="modal" v-if="selectedPhoto" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h2>{{ selectedPhoto.gameId }}</h2>
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
import { ref, computed } from "vue";
import { baYeMembers } from "../data/baYeMembers";

// 选中的照片
const selectedPhoto = ref(null);

// 分页参数
const currentPage = ref(1);
const itemsPerPage = 12;

// 计算当前页的成员
const currentMembers = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return baYeMembers.slice(startIndex, endIndex);
});

// 计算总页数
const totalPages = computed(() => {
  return Math.ceil(baYeMembers.length / itemsPerPage);
});

// 显示成员详情
const showPhotoDetails = (index) => {
  const actualIndex = (currentPage.value - 1) * itemsPerPage + index;
  selectedPhoto.value = baYeMembers[actualIndex];
};

// 关闭模态框
const closeModal = () => {
  selectedPhoto.value = null;
};

// 上一页
const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

// 下一页
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

// 跳转到指定页
const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
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

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-header {
  text-align: center;
  padding: 40px 20px;
  position: relative;
  z-index: 1;
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

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  padding: 20px 0;
  position: relative;
  z-index: 1;
}

.photo-item {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

.photo-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
}

.photo-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: all 0.3s ease;
}

.photo-item:hover .photo-img {
  transform: scale(1.1);
}

.photo-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
  color: white;
  padding: 20px;
  transform: translateY(100%);
  transition: all 0.3s ease;
}

.photo-item:hover .photo-overlay {
  transform: translateY(0);
}

.photo-overlay h3 {
  margin: 0 0 10px 0;
  font-size: 1.2rem;
  color: #f1c40f;
}

.photo-overlay p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.4;
  opacity: 0.9;
}

/* 模态框样式 */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  animation: fadeIn 0.3s ease;
}

.modal-content {
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 15px;
  padding: 20px;
  max-width: 800px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: slideInUp 0.3s ease;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.modal-header h2 {
  font-size: 1.8rem;
  color: #f1c40f;
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  color: #ffffff;
  font-size: 2rem;
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.3s ease;
}

.close-btn:hover {
  opacity: 1;
  color: #f1c40f;
  transform: scale(1.1);
}

.modal-img {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.modal-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #ffffff;
  opacity: 0.9;
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

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideInUp {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }

  .page-subtitle {
    font-size: 1.2rem;
  }

  .photo-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
  }

  .photo-img {
    height: 160px;
  }

  .modal-content {
    width: 95%;
    padding: 15px;
  }

  .modal-img {
    max-height: 300px;
  }

  .modal-header h2 {
    font-size: 1.5rem;
  }
}

/* 分页控件样式 */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 40px;
  padding: 20px;
  position: relative;
  z-index: 1;
}

.pagination-btn {
  background-color: rgba(241, 196, 15, 0.1);
  border: 1px solid rgba(241, 196, 15, 0.3);
  color: #f1c40f;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.pagination-btn:hover:not(:disabled) {
  background-color: rgba(241, 196, 15, 0.2);
  border-color: rgba(241, 196, 15, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(241, 196, 15, 0.2);
}

.pagination-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-numbers {
  display: flex;
  gap: 8px;
}

.pagination-number {
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(241, 196, 15, 0.2);
  color: #ffffff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pagination-number:hover:not(.active) {
  background-color: rgba(241, 196, 15, 0.1);
  border-color: rgba(241, 196, 15, 0.4);
  color: #f1c40f;
  transform: translateY(-2px);
}

.pagination-number.active {
  background-color: rgba(241, 196, 15, 0.3);
  border-color: rgba(241, 196, 15, 0.6);
  color: #f1c40f;
  font-weight: bold;
}

@media (max-width: 768px) {
  .pagination {
    gap: 8px;
    padding: 15px;
  }

  .pagination-btn {
    padding: 8px 15px;
    font-size: 0.9rem;
  }

  .pagination-number {
    width: 35px;
    height: 35px;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 2rem;
  }

  .page-subtitle {
    font-size: 1rem;
  }

  .photo-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
  }

  .photo-img {
    height: 120px;
  }

  .modal-content {
    width: 98%;
    padding: 10px;
  }

  .modal-img {
    max-height: 200px;
  }

  .modal-header h2 {
    font-size: 1.3rem;
  }

  .pagination {
    gap: 5px;
    padding: 10px;
  }

  .pagination-btn {
    padding: 6px 12px;
    font-size: 0.8rem;
  }

  .pagination-number {
    width: 30px;
    height: 30px;
    font-size: 0.8rem;
  }
}
</style>
