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
for (let i = 0; i < 61; i++) {
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

// 获取每个图片项的样式（树状布局）
const getItemStyle = (index) => {
  // 树状布局的坐标（基于 61 个点的分布）
  const positions = [
    // 顶部
    { x: 50, y: 8 },
    // 第一层
    { x: 35, y: 15 },
    { x: 65, y: 15 },
    // 第二层
    { x: 25, y: 22 },
    { x: 45, y: 22 },
    { x: 55, y: 22 },
    { x: 75, y: 22 },
    // 第三层
    { x: 18, y: 30 },
    { x: 32, y: 30 },
    { x: 42, y: 30 },
    { x: 50, y: 30 },
    { x: 58, y: 30 },
    { x: 68, y: 30 },
    { x: 82, y: 30 },
    // 第四层
    { x: 12, y: 38 },
    { x: 24, y: 38 },
    { x: 36, y: 38 },
    { x: 44, y: 38 },
    { x: 50, y: 38 },
    { x: 56, y: 38 },
    { x: 64, y: 38 },
    { x: 76, y: 38 },
    { x: 88, y: 38 },
    // 第五层
    { x: 8, y: 46 },
    { x: 20, y: 46 },
    { x: 30, y: 46 },
    { x: 38, y: 46 },
    { x: 46, y: 46 },
    { x: 50, y: 46 },
    { x: 54, y: 46 },
    { x: 62, y: 46 },
    { x: 70, y: 46 },
    { x: 80, y: 46 },
    { x: 92, y: 46 },
    // 第六层
    { x: 15, y: 54 },
    { x: 25, y: 54 },
    { x: 33, y: 54 },
    { x: 41, y: 54 },
    { x: 47, y: 54 },
    { x: 53, y: 54 },
    { x: 59, y: 54 },
    { x: 67, y: 54 },
    { x: 75, y: 54 },
    { x: 85, y: 54 },
    // 第七层
    { x: 20, y: 62 },
    { x: 28, y: 62 },
    { x: 36, y: 62 },
    { x: 43, y: 62 },
    { x: 49, y: 62 },
    { x: 55, y: 62 },
    { x: 61, y: 62 },
    { x: 68, y: 62 },
    { x: 76, y: 62 },
    { x: 84, y: 62 },
    // 第八层
    { x: 25, y: 70 },
    { x: 33, y: 70 },
    { x: 40, y: 70 },
    { x: 47, y: 70 },
    { x: 53, y: 70 },
    { x: 60, y: 70 },
    { x: 67, y: 70 },
    { x: 75, y: 70 },
    { x: 83, y: 70 },
    // 第九层
    { x: 30, y: 78 },
    { x: 37, y: 78 },
    { x: 44, y: 78 },
    { x: 50, y: 78 },
    { x: 56, y: 78 },
    { x: 63, y: 78 },
    { x: 70, y: 78 },
    { x: 78, y: 78 },
    // 第十层
    { x: 35, y: 86 },
    { x: 42, y: 86 },
    { x: 49, y: 86 },
    { x: 56, y: 86 },
    { x: 63, y: 86 },
    { x: 70, y: 86 },
    { x: 77, y: 86 },
    // 第十一层
    { x: 40, y: 94 },
    { x: 47, y: 94 },
    { x: 53, y: 94 },
    { x: 60, y: 94 },
    { x: 67, y: 94 },
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
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(180deg, #0a2a66 0%, #1a5276 50%, #1f618d 100%);
  overflow: hidden;
  position: relative;
}

.tree-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10c0-1.105.895-2 2-2h76c1.105 0 2 .895 2 2v76c0 1.105-.895 2-2 2H12c-1.105 0-2-.895-2-2V10z' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='0.5'/%3E%3Cpath d='M50 10c0-1.105.895-2 2-2h48c1.105 0 2 .895 2 2v48c0 1.105-.895 2-2 2H52c-1.105 0-2-.895-2-2V10z' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='0.5'/%3E%3C/svg%3E");
  opacity: 0.3;
  pointer-events: none;
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
  color: #aed6f1;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  opacity: 0.9;
  animation: fadeInUp 1s ease;
}

.tree-content {
  position: relative;
  width: 100%;
  height: calc(100vh - 150px);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.tree-item {
  position: absolute;
  width: 60px;
  height: 60px;
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

/* 树枝效果 */
.tree-content::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 10px;
  height: 100%;
  background: linear-gradient(180deg, #8b4513 0%, #654321 50%, #8b4513 100%);
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.tree-content::after {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 100%;
  background-image: radial-gradient(
      circle at 50% 20%,
      rgba(139, 69, 19, 0.3) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 50% 50%,
      rgba(139, 69, 19, 0.2) 0%,
      transparent 60%
    ),
    radial-gradient(
      circle at 50% 80%,
      rgba(139, 69, 19, 0.1) 0%,
      transparent 70%
    );
  pointer-events: none;
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
