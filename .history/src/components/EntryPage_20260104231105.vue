<template>
  <div class="entry-container">
    <div class="entry-content">
      <h1 class="entry-title">燕云十六声</h1>
      <p class="entry-subtitle">WHERE WINDS MEET</p>
      <button class="entry-button" @click="enterBaYe">进入百业</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// 轮播图图片列表
const carouselImages = [
  "../../assets/../images/1.jpg",
];

// 预加载图片函数
const preloadImages = () => {
  carouselImages.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

const enterBaYe = () => {
  // 立即跳转，图片预加载在后台进行
  router.push("/ba-ye");
};

onMounted(() => {
  // 页面加载时的动画效果
  const title = document.querySelector(".entry-title");
  if (title) {
    title.classList.add("animate");
  }

  // 页面加载完成后开始预加载图片
  setTimeout(() => {
    preloadImages();
  }, 1000);
});
</script>

<style scoped>
.entry-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-45deg, #1a1a1a, #2d2d2d, #1a1a1a, #000000);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
  overflow: hidden;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.entry-content {
  text-align: center;
  padding: 40px;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.entry-content:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.4);
}

.entry-title {
  font-size: 6rem;
  font-weight: 900;
  background: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease;
}

.entry-title.animate {
  opacity: 1;
  transform: translateY(0);
}

.entry-subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 40px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.8;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease 0.2s;
}

.entry-content:hover .entry-subtitle {
  opacity: 1;
  transform: translateY(0);
}

.entry-button {
  padding: 18px 50px;
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 154, 158, 0.3);
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease 0.4s;
}

.entry-content:hover .entry-button {
  opacity: 1;
  transform: translateY(0);
}

.entry-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(255, 154, 158, 0.5);
}

.entry-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 10px rgba(255, 154, 158, 0.3);
}

/* 添加一些装饰元素 */
.entry-content::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(255, 154, 158, 0.1) 0%,
    transparent 70%
  );
  animation: pulse 4s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .entry-title {
    font-size: 3rem;
  }

  .entry-subtitle {
    font-size: 1rem;
  }

  .entry-button {
    padding: 15px 40px;
    font-size: 1rem;
  }

  .entry-content {
    padding: 30px;
  }
}

@media (max-width: 480px) {
  .entry-title {
    font-size: 2rem;
  }

  .entry-subtitle {
    font-size: 0.8rem;
  }

  .entry-button {
    padding: 12px 30px;
    font-size: 0.9rem;
  }

  .entry-content {
    padding: 20px;
  }
}
</style>
