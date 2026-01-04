<template>
  <div class="carousel-container">
    <div class="carousel-wrapper" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(item, index) in carouselImages" :key="index" class="carousel-item">
        <img :src="item.image" :alt="item.alt" class="carousel-image" />
        <div class="carousel-caption">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
    <div class="carousel-dots">
      <span 
        v-for="(item, index) in carouselImages" 
        :key="index" 
        class="dot" 
        :class="{ active: index === currentIndex }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const currentIndex = ref(0)
let intervalId = null

const carouselImages = ref([
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop',
    alt: 'Image 1',
    title: '第一张图片',
    description: '这是第一张轮播图片的描述'
  },
  {
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop',
    alt: 'Image 2',
    title: '第二张图片',
    description: '这是第二张轮播图片的描述'
  },
  {
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop',
    alt: 'Image 3',
    title: '第三张图片',
    description: '这是第三张轮播图片的描述'
  },
  {
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop',
    alt: 'Image 4',
    title: '第四张图片',
    description: '这是第四张轮播图片的描述'
  }
])

const goToSlide = (index) => {
  currentIndex.value = index
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % carouselImages.value.length
}

const startCarousel = () => {
  intervalId = setInterval(nextSlide, 3000)
}

const stopCarousel = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}

onMounted(() => {
  startCarousel()
})

onBeforeUnmount(() => {
  stopCarousel()
})
</script>

<style scoped>
.carousel-container {
  width: 100%;
  height: 300px;
  position: relative;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 8px;
}

.carousel-wrapper {
  display: flex;
  height: 100%;
  transition: transform 0.5s ease-in-out;
}

.carousel-item {
  min-width: 100%;
  height: 100%;
  position: relative;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
  padding: 20px;
  text-align: center;
}

.carousel-caption h3 {
  margin: 0 0 10px 0;
  font-size: 1.5rem;
}

.carousel-caption p {
  margin: 0;
  font-size: 1rem;
  opacity: 0.9;
}

.carousel-dots {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dot.active, .dot:hover {
  background-color: white;
}
</style>
