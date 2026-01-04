<template>
  <div class="love-heart-container">
    <div class="love-heart">
      <div
        v-for="(item, index) in imageItems"
        :key="index"
        class="love-heart-item"
        :style="getItemStyle(index)"
        @mouseenter="showDetail(index)"
        @mouseleave="hideDetail"
      >
        <img :src="item.image" :alt="item.title" class="love-heart-img" />
        <div class="love-heart-detail" v-if="activeIndex === index">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 图片资源
const images = [
  "1.jpg", "2.png", "3.jpg", "4.jpg", "5.jpg", "6.png", "7.jpg", "8.png", "9.jpg", "10.png"
];

// 图片详细信息
const imageDetails = [
  { title: "图片1", description: "这是第一张图片的详细信息" },
  { title: "图片2", description: "这是第二张图片的详细信息" },
  { title: "图片3", description: "这是第三张图片的详细信息" },
  { title: "图片4", description: "这是第四张图片的详细信息" },
  { title: "图片5", description: "这是第五张图片的详细信息" },
  { title: "图片6", description: "这是第六张图片的详细信息" },
  { title: "图片7", description: "这是第七张图片的详细信息" },
  { title: "图片8", description: "这是第八张图片的详细信息" },
  { title: "图片9", description: "这是第九张图片的详细信息" },
  { title: "图片10", description: "这是第十张图片的详细信息" }
];

// 生成 61 个图片项，重复使用现有的图片资源
const imageItems = ref([]);
for (let i = 0; i < 61; i++) {
  imageItems.value.push({
    image: `/images/${images[i % images.length]}`,
    title: imageDetails[i % imageDetails.length].title,
    description: imageDetails[i % imageDetails.length].description
  });
}

// 激活的索引
const activeIndex = ref(-1);

// 显示详细信息
const showDetail = (index) => {
  activeIndex.value = index;
};

// 隐藏详细信息
const hideDetail = () => {
  activeIndex.value = -1;
};

// 获取每个图片项的样式
const getItemStyle = (index) => {
  // 爱心图的坐标（基于 61 个点的爱心形状）
  const positions = [
    { x: 50, y: 10 },
    { x: 45, y: 15 }, { x: 55, y: 15 },
    { x: 40, y: 20 }, { x: 50, y: 20 }, { x: 60, y: 20 },
    { x: 35, y: 25 }, { x: 45, y: 25 }, { x: 55, y: 25 }, { x: 65, y: 25 },
    { x: 30, y: 30 }, { x: 40, y: 30 }, { x: 50, y: 30 }, { x: 60, y: 30 }, { x: 70, y: 30 },
    { x: 25, y: 35 }, { x: 35, y: 35 }, { x: 45, y: 35 }, { x: 55, y: 35 }, { x: 65, y: 35 }, { x: 75, y: 35 },
    { x: 20, y: 40 }, { x: 30, y: 40 }, { x: 40, y: 40 }, { x: 50, y: 40 }, { x: 60, y: 40 }, { x: 70, y: 40 }, { x: 80, y: 40 },
    { x: 15, y: 45 }, { x: 25, y: 45 }, { x: 35, y: 45 }, { x: 45, y: 45 }, { x: 55, y: 45 }, { x: 65, y: 45 }, { x: 75, y: 45 }, { x: 85, y: 45 },
    { x: 10, y: 50 }, { x: 20, y: 50 }, { x: 30, y: 50 }, { x: 40, y: 50 }, { x: 50, y: 50 }, { x: 60, y: 50 }, { x: 70, y: 50 }, { x: 80, y: 50 }, { x: 90, y: 50 },
    { x: 15, y: 55 }, { x: 25, y: 55 }, { x: 35, y: 55 }, { x: 45, y: 55 }, { x: 55, y: 55 }, { x: 65, y: 55 }, { x: 75, y: 55 }, { x: 85, y: 55 },
    { x: 20, y: 60 }, { x: 30, y: 60 }, { x: 40, y: 60 }, { x: 50, y: 60 }, { x: 60, y: 60 }, { x: 70, y: 60 }, { x: 80, y: 60 },
    { x: 25, y: 65 }, { x: 35, y: 65 }, { x: 45, y: 65 }, { x: 55, y: 65 }, { x: 65, y: 65 }, { x: 75, y: 65 },
    { x: 30, y: 70 }, { x: 40, y: 70 }, { x: 50, y: 70 }, { x: 60, y: 70 }, { x: 70, y: 70 },
    { x: 35, y: 75 }, { x: 45, y: 75 }, { x: 55, y: 75 }, { x: 65, y: 75 },
    { x: 40, y: 80 }, { x: 50, y: 80 }, { x: 60, y: 80 },
    { x: 45, y: 85 }, { x: 55, y: 85 },
    { x: 50, y: 90 }
  ];

  if (index < positions.length) {
    const pos = positions[index];
    return {
      left: `${pos.x}%`,
      top: `${pos.y}%`
    };
  }
  return {};
};
</script>

<style scoped>
.love-heart-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
}

.love-heart {
  position: relative;
  width: 500px;
  height: 500px;
  max-width: 90vw;
  max-height: 90vh;
}

.love-heart-item {
  position: absolute;
  width: 60px;
  height: 60px;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
  cursor: pointer;
}

.love-heart-item:hover {
  transform: translate(-50%, -50%) scale(1.5);
  z-index: 100;
}

.love-heart-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.love-heart-detail {
  position: absolute;
  bottom: -120px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 10px;
  color: white;
  text-align: center;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.love-heart-detail h3 {
  margin: 0 0 10px 0;
  font-size: 1.2rem;
  color: #ff9a9e;
}

.love-heart-detail p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.4;
  opacity: 0.9;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .love-heart-item {
    width: 40px;
    height: 40px;
  }

  .love-heart-detail {
    width: 150px;
    bottom: -100px;
    padding: 12px;
  }

  .love-heart-detail h3 {
    font-size: 1rem;
  }

  .love-heart-detail p {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .love-heart-item {
    width: 30px;
    height: 30px;
  }

  .love-heart-detail {
    width: 120px;
    bottom: -90px;
    padding: 10px;
  }

  .love-heart-detail h3 {
    font-size: 0.9rem;
  }

  .love-heart-detail p {
    font-size: 0.7rem;
  }
}
</style>
