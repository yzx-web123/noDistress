<template>
  <div class="tree-container">
    <div class="tree-header">
      <h1 class="tree-title">燕云十六声</h1>
      <p class="tree-subtitle">-2026 我们江湖再见-</p>
    </div>
    <div class="tree-content">
      <div
        v-for="(item, index) in imageItems"
        :key="index"
        class="tree-item"
        :style="getItemStyle(index)"
        @mouseenter="showDetail(index)"
        @mouseleave="hideDetail"
      >
        <img :src="item.image" :alt="item.title" class="tree-item-img" />
        <div class="tree-item-detail" v-if="activeIndex === index">
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
  "1.jpg",
  "2.png",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.png",
  "7.jpg",
  "8.png",
  "9.jpg",
  "10.png",
];

// 图片详细信息
const imageDetails = [
  { title: "角色1", description: "这是角色1的详细信息" },
  { title: "角色2", description: "这是角色2的详细信息" },
  { title: "角色3", description: "这是角色3的详细信息" },
  { title: "角色4", description: "这是角色4的详细信息" },
  { title: "角色5", description: "这是角色5的详细信息" },
  { title: "角色6", description: "这是角色6的详细信息" },
  { title: "角色7", description: "这是角色7的详细信息" },
  { title: "角色8", description: "这是角色8的详细信息" },
  { title: "角色9", description: "这是角色9的详细信息" },
  { title: "角色10", description: "这是角色10的详细信息" },
];

// 生成 61 个图片项，重复使用现有的图片资源
const imageItems = ref([]);
for (let i = 0; i < 60; i++) {
  imageItems.value.push({
    image: `/images/${images[i % images.length]}`,
    title: imageDetails[i % imageDetails.length].title,
    description: imageDetails[i % imageDetails.length].description,
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

// 获取每个图片项的样式（倒过来的爱心布局）
const getItemStyle = (index) => {
  // 倒过来的爱心形状坐标（基于 61 个点的分布）
  const positions = [
    // 底部中心（爱心底部尖部）
    { x: 50, y: 95 },
    // 第一层分支
    { x: 40, y: 85 },
    { x: 60, y: 85 },
    // 第二层分支
    { x: 30, y: 75 },
    { x: 45, y: 75 },
    { x: 55, y: 75 },
    { x: 70, y: 75 },
    // 第三层分支
    { x: 25, y: 65 },
    { x: 35, y: 65 },
    { x: 45, y: 65 },
    { x: 50, y: 65 },
    { x: 55, y: 65 },
    { x: 65, y: 65 },
    { x: 75, y: 65 },
    // 第四层分支 - 左侧
    { x: 18, y: 55 },
    { x: 28, y: 55 },
    { x: 38, y: 55 },
    // 第四层分支 - 右侧
    { x: 62, y: 55 },
    { x: 72, y: 55 },
    { x: 82, y: 55 },
    // 第五层分支 - 左侧
    { x: 15, y: 45 },
    { x: 25, y: 45 },
    { x: 35, y: 45 },
    { x: 40, y: 45 },
    // 第五层分支 - 右侧
    { x: 60, y: 45 },
    { x: 65, y: 45 },
    { x: 75, y: 45 },
    { x: 85, y: 45 },
    // 第六层分支 - 左侧
    { x: 12, y: 35 },
    { x: 22, y: 35 },
    { x: 30, y: 35 },
    { x: 38, y: 35 },
    { x: 42, y: 35 },
    // 第六层分支 - 右侧
    { x: 58, y: 35 },
    { x: 62, y: 35 },
    { x: 70, y: 35 },
    { x: 78, y: 35 },
    { x: 88, y: 35 },
    // 第七层分支 - 左侧
    { x: 10, y: 25 },
    { x: 20, y: 25 },
    { x: 28, y: 25 },
    { x: 35, y: 25 },
    { x: 40, y: 25 },
    { x: 43, y: 25 },
    // 第七层分支 - 右侧
    { x: 57, y: 25 },
    { x: 60, y: 25 },
    { x: 65, y: 25 },
    { x: 72, y: 25 },
    { x: 80, y: 25 },
    { x: 90, y: 25 },
    // 第八层分支 - 顶部左侧
    { x: 15, y: 15 },
    { x: 25, y: 15 },
    { x: 32, y: 15 },
    { x: 38, y: 15 },
    { x: 42, y: 15 },
    // 第八层分支 - 顶部右侧
    { x: 58, y: 15 },
    { x: 62, y: 15 },
    { x: 68, y: 15 },
    { x: 75, y: 15 },
    { x: 85, y: 15 },
    // 第九层分支 - 最顶部（爱心的两个顶部尖部）
    { x: 20, y: 5 },
    { x: 30, y: 5 },
    { x: 38, y: 5 },
    { x: 45, y: 5 },
    { x: 50, y: 5 },
    { x: 55, y: 5 },
    { x: 62, y: 5 },
    { x: 70, y: 5 },
    { x: 80, y: 5 },
  ];

  if (index < positions.length) {
    const pos = positions[index];
    return {
      left: `${pos.x}%`,
      top: `${pos.y}%`,
    };
  }
  return {};
};
</script>

<style scoped>
.tree-container {
  width: 100%;
  height: 600px; /* 明确设置高度，确保爱心图组件可见 */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: transparent;
  overflow: visible; /* 确保内容不被裁剪 */
  position: relative;
}

.tree-header {
  text-align: center;
  padding: 40px 20px 20px;
  position: relative;
  z-index: 10;
}

.tree-title {
  font-size: 4rem;
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 10px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  animation: fadeInDown 1s ease;
}

.tree-subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  color: #ffffff;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  opacity: 0.9;
  animation: fadeInUp 1s ease;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.tree-content {
  position: relative;
  width: 100%;
  height: 500px; /* 明确设置内容区域高度 */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
}

.tree-item {
  position: absolute;
  width: 70px;
  height: 70px;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
  cursor: pointer;
  z-index: 5;
}

.tree-item:hover {
  transform: translate(-50%, -50%) scale(1.3);
  z-index: 100;
}

.tree-item-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.tree-item:hover .tree-item-img {
  border-color: #f1c40f;
  box-shadow: 0 6px 25px rgba(241, 196, 15, 0.5);
}

.tree-item-detail {
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
  animation: fadeInUp 0.3s ease;
  z-index: 1000; /* 确保详细信息框显示在最上层 */
}

.tree-item-detail h3 {
  margin: 0 0 10px 0;
  font-size: 1.2rem;
  color: #f1c40f;
}

.tree-item-detail p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.4;
  opacity: 0.9;
}

/* 树枝效果 - 更自然的树干和树枝 */
.tree-content::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 100%;
  background: linear-gradient(180deg, #8b4513 0%, #654321 50%, #8b4513 100%);
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.tree-content::after {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  height: 100%;
  background-image: radial-gradient(
      circle at 50% 10%,
      rgba(139, 69, 19, 0.3) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 50% 40%,
      rgba(139, 69, 19, 0.2) 0%,
      transparent 60%
    ),
    radial-gradient(
      circle at 50% 70%,
      rgba(139, 69, 19, 0.1) 0%,
      transparent 70%
    );
  pointer-events: none;
}

/* 添加树枝分支效果 */
.tree-content .branch {
  position: absolute;
  background: linear-gradient(90deg, #8b4513 0%, #654321 100%);
  border-radius: 3px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
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

/* 响应式设计 */
@media (max-width: 768px) {
  .tree-title {
    font-size: 2.5rem;
  }

  .tree-subtitle {
    font-size: 1rem;
  }

  .tree-item {
    width: 40px;
    height: 40px;
  }

  .tree-item-detail {
    width: 150px;
    bottom: -100px;
    padding: 12px;
  }

  .tree-item-detail h3 {
    font-size: 1rem;
  }

  .tree-item-detail p {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .tree-title {
    font-size: 2rem;
  }

  .tree-subtitle {
    font-size: 0.9rem;
  }

  .tree-item {
    width: 30px;
    height: 30px;
  }

  .tree-item-detail {
    width: 120px;
    bottom: -90px;
    padding: 10px;
  }

  .tree-item-detail h3 {
    font-size: 0.9rem;
  }

  .tree-item-detail p {
    font-size: 0.7rem;
  }
}
</style>
