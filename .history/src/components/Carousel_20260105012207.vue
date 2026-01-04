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
          :src="item.image"
          :alt="item.alt"
          class="carousel-image"
          :class="{ active: activeIndex === index }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";

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

const carouselImages = ref([
  {
    image: "/images/1.jpg",
    alt: "Image 1",
  },
  {
    image: "/images/2.png",
    alt: "Image 2",
  },
  {
    image: "/images/3.jpg",
    alt: "Image 3",
  },
  {
    image: "/images/4.jpg",
    alt: "Image 4",
  },
  {
    image: "/images/5.jpg",
    alt: "Image 5",
  },
  {
    image: "/images/6.png",
    alt: "Image 6",
  },
  {
    image: "/images/7.jpg",
    alt: "Image 7",
  },
  {
    image: "/images/8.png",
    alt: "Image 8",
  },
  {
    image: "/images/9.jpg",
    alt: "Image 9",
  },
  {
    image: "/images/10.png",
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

/* 响应式设计 */
@media (max-width: 768px) {
  .carousel-container {
    height: 80px;
  }

  .carousel-item {
    width: 80px;
    margin: 0 8px;
  }
}

@media (max-width: 576px) {
  .carousel-container {
    height: 70px;
  }

  .carousel-item {
    width: 70px;
    margin: 0 6px;
  }
}

@media (max-width: 480px) {
  .carousel-container {
    height: 60px;
  }

  .carousel-item {
    width: 60px;
    margin: 0 5px;
  }
}
</style>
