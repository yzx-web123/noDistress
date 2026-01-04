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
    image: "../../public/images/1.jpg",
    alt: "Image 1",
  },
  {
    image: "../../public/images/2.png",
    alt: "Image 2",
  },
  {
    image: "../../public/images/3.jpg",
    alt: "Image 3",
  },
  {
    image: "../../public/images/4.jpg",
    alt: "Image 4",
  },
  {
    image: "../../public/images/5.jpg",
    alt: "Image 5",
  },
  {
    image: "../../public/images/6.png",
    alt: "Image 6",
  },
  {
    image: "../../public/images/7.jpg",
    alt: "Image 7",
  },
  {
    image: "../../public/images/8.png",
    alt: "Image 8",
  },
  {
    image: "../../public/images/9.jpg",
    alt: "Image 9",
  },
  {
    image: "../../public/images/10.png",
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
</style>
