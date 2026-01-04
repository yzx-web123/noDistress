<template>
  <div class="carousel-container">
    <div class="carousel-wrapper" ref="carouselWrapper">
      <div
        v-for="(item, index) in extendedImages"
        :key="index"
        class="carousel-item"
      >
        <img :src="item.image" :alt="item.alt" class="carousel-image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";

let animationId = null;
let scrollPosition = 0;

const carouselWrapper = ref(null);

const carouselImages = ref([
  {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    alt: "Image 1",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    alt: "Image 2",
  },
  {
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    alt: "Image 3",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    alt: "Image 4",
  },
  {
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    alt: "Image 5",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop",
    alt: "Image 6",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&h=200&fit=crop",
    alt: "Image 7",
  },
  {
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=200&h=200&fit=crop",
    alt: "Image 8",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
    alt: "Image 9",
  },
  {
    image:
      "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=200&h=200&fit=crop",
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
  background-color: rgba(0, 0, 0, 0.8);
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

.carousel-image:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
}
</style>
