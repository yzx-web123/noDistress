<template>
  <div
    class="carousel-container"
    @mouseenter="stopCarousel"
    @mouseleave="startCarousel"
  >
    <div class="carousel-wrapper" ref="carouselWrapper">
      <div
        v-for="(item, index) in extendedImages"
        :key="index"
        class="carousel-item"
        @mouseenter="onItemMouseEnter(index)"
        @mouseleave="onItemMouseLeave(index)"
      >
        <img
          :src="item.thumb || item.image"
          :data-src="item.image"
          :alt="item.alt"
          class="carousel-image"
          :class="{ active: activeIndex === index }"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed, nextTick } from "vue";

let animationId = null;
let scrollPosition = 0;

const carouselWrapper = ref(null);
const activeIndex = ref(-1);

const onItemMouseEnter = (index) => {
  activeIndex.value = index;
};

const onItemMouseLeave = (index) => {
  activeIndex.value = -1;
};

// 添加占位缩略图以提高初始加载速度
const carouselImages = ref([
  {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    thumb:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23f0f0f0' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='24' fill='%23999'%3E1%3C/text%3E%3C/svg%3E",
    alt: "Image 1",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    thumb:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23f0f0f0' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='24' fill='%23999'%3E2%3C/text%3E%3C/svg%3E",
    alt: "Image 2",
  },
  {
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    thumb:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23f0f0f0' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='24' fill='%23999'%3E3%3C/text%3E%3C/svg%3E",
    alt: "Image 3",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    thumb:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23f0f0f0' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='24' fill='%23999'%3E4%3C/text%3E%3C/svg%3E",
    alt: "Image 4",
  },
  {
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    thumb:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23f0f0f0' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='24' fill='%23999'%3E5%3C/text%3E%3C/svg%3E",
    alt: "Image 5",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop",
    thumb:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23f0f0f0' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='24' fill='%23999'%3E6%3C/text%3E%3C/svg%3E",
    alt: "Image 6",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&h=200&fit=crop",
    thumb:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23f0f0f0' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='24' fill='%23999'%3E7%3C/text%3E%3C/svg%3E",
    alt: "Image 7",
  },
  {
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=200&h=200&fit=crop",
    thumb:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23f0f0f0' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='24' fill='%23999'%3E8%3C/text%3E%3C/svg%3E",
    alt: "Image 8",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
    thumb:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23f0f0f0' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='24' fill='%23999'%3E9%3C/text%3E%3C/svg%3E",
    alt: "Image 9",
  },
  {
    image:
      "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=200&h=200&fit=crop",
    thumb:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23f0f0f0' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='24' fill='%23999'%3E10%3C/text%3E%3C/svg%3E",
    alt: "Image 10",
  },
]);

const extendedImages = computed(() => {
  return [...carouselImages.value, ...carouselImages.value];
});

const startCarousel = () => {
  const animate = () => {
    if (carouselWrapper.value) {
      scrollPosition += 0.5;
      const singleLoopWidth = carouselWrapper.value.scrollWidth / 2;

      if (scrollPosition >= singleLoopWidth) {
        scrollPosition = 0;
      }

      carouselWrapper.value.style.transform = `translateX(-${scrollPosition}px)`;
    }
    animationId = requestAnimationFrame(animate);
  };

  animationId = requestAnimationFrame(animate);
};

const stopCarousel = () => {
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }
};

onMounted(() => {
  startCarousel();
});

onBeforeUnmount(() => {
  stopCarousel();
});
</script>

<style scoped>
.carousel-container {
  width: 100%;
  height: 150px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.carousel-wrapper {
  display: flex;
  height: 100%;
  will-change: transform;
}

.carousel-item {
  width: 150px;
  height: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 15px;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.carousel-image:hover,
.carousel-image.active {
  transform: scale(1.1);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
}
</style>
