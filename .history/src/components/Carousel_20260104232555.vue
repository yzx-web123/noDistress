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
          :src="item.thumb"
          :data-src="item.image"
          :alt="item.alt"
          class="carousel-image"
          :class="{ active: activeIndex === index }"
          loading="lazy"
          @load="onImageLoad"
          @error="onImageError"
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
const imagesLoaded = ref(0);
const totalImages = ref(0);
const loading = ref(true);

const onItemMouseEnter = (index) => {
  activeIndex.value = index;
};

const onItemMouseLeave = (index) => {
  activeIndex.value = -1;
};

// 图片加载成功事件
const onImageLoad = () => {
  imagesLoaded.value++;
  if (imagesLoaded.value === totalImages.value) {
    loading.value = false;
  }
};

// 图片加载失败事件
const onImageError = (event) => {
  imagesLoaded.value++;
  event.target.src =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23f0f0f0' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='24' fill='%23999'%3EError%3C/text%3E%3C/svg%3E";
  if (imagesLoaded.value === totalImages.value) {
    loading.value = false;
  }
};

// 优化图片加载策略，使用更小尺寸和更快速的图片资源
const carouselImages = ref([
  {
    image: "../../public/images/1.jpg",
    thumb:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23f0f0f0' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='16' fill='%23999'%3E1%3C/text%3E%3C/svg%3E",
    alt: "Image 1",
  },
  {
    image:
      "../../public/images/2.png",
    thumb:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23f0f0f0' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='16' fill='%23999'%3E2%3C/text%3E%3C/svg%3E",
    alt: "Image 2",
  },
  {
    image:
      "../../public/images/1.jpg",
    thumb:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23f0f0f0' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='16' fill='%23999'%3E3%3C/text%3E%3C/svg%3E",
    alt: "Image 3",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&auto=format&q=90",
    thumb:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23f0f0f0' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='16' fill='%23999'%3E4%3C/text%3E%3C/svg%3E",
    alt: "Image 4",
  },
  {
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&auto=format&q=90",
    thumb:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23f0f0f0' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='16' fill='%23999'%3E5%3C/text%3E%3C/svg%3E",
    alt: "Image 5",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&auto=format&q=90",
    thumb:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23f0f0f0' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='16' fill='%23999'%3E6%3C/text%3E%3C/svg%3E",
    alt: "Image 6",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=100&h=100&fit=crop&auto=format&q=90",
    thumb:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23f0f0f0' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='16' fill='%23999'%3E7%3C/text%3E%3C/svg%3E",
    alt: "Image 7",
  },
  {
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=100&h=100&fit=crop&auto=format&q=90",
    thumb:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23f0f0f0' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='16' fill='%23999'%3E8%3C/text%3E%3C/svg%3E",
    alt: "Image 8",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&auto=format&q=90",
    thumb:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23f0f0f0' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='16' fill='%23999'%3E9%3C/text%3E%3C/svg%3E",
    alt: "Image 9",
  },
  {
    image:
      "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=100&h=100&fit=crop&auto=format&q=90",
    thumb:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23f0f0f0' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='16' fill='%23999'%3E10%3C/text%3E%3C/svg%3E",
    alt: "Image 10",
  },
]);

const extendedImages = computed(() => {
  return [...carouselImages.value, ...carouselImages.value];
});

// 图片懒加载函数
const lazyLoadImages = () => {
  const images = document.querySelectorAll(".carousel-image");

  images.forEach((img) => {
    if (img.dataset.src && img.src !== img.dataset.src) {
      const rect = img.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // 当图片进入视口或即将进入视口时加载
      if (rect.top < viewportHeight + 200 && rect.bottom > -200) {
        img.src = img.dataset.src;
        img.dataset.src = ""; // 加载后清除data-src属性
      }
    }
  });
};

const startCarousel = () => {
  const animate = () => {
    if (carouselWrapper.value) {
      scrollPosition += 0.5;
      const singleLoopWidth = carouselWrapper.value.scrollWidth / 2;

      if (scrollPosition >= singleLoopWidth) {
        scrollPosition = 0;
      }

      carouselWrapper.value.style.transform = `translateX(-${scrollPosition}px)`;

      // 每次动画更新时检查需要加载的图片
      lazyLoadImages();
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
  // 等待DOM更新后再初始化轮播和懒加载
  nextTick(() => {
    startCarousel();
    lazyLoadImages(); // 初始加载可见区域的图片
  });
});

onBeforeUnmount(() => {
  stopCarousel();
});
</script>

<style scoped>
.carousel-container {
  width: 100%;
  height: 100px;
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
  width: 100px;
  height: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
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
