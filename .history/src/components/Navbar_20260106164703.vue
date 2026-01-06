<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-brand">
        <router-link to="/ba-ye">燕云十六声</router-link>
      </div>
      <div class="navbar-menu">
        <router-link
          to="/ba-ye"
          class="navbar-item"
          :class="{ active: $route.path === '/ba-ye' }"
        >
          百业成员
        </router-link>
        <router-link
          to="/photo-wall"
          class="navbar-item"
          :class="{ active: $route.path === '/photo-wall' }"
        >
          照片墙
        </router-link>
        <router-link
          to="/join-us"
          class="navbar-item"
          :class="{ active: $route.path === '/join-us' }"
        >
          加入我们
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
// 导航栏组件
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1000;
  padding: 15px 0;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: 900;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.1em;
}

.navbar-brand a {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s ease;
}

.navbar-brand a:hover {
  color: #f1c40f;
  transform: translateY(-2px);
}

.navbar-menu {
  display: flex;
  gap: 30px;
}

.navbar-item {
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 8px 15px;
  border-radius: 5px;
  transition: all 0.3s ease;
  position: relative;
  letter-spacing: 0.05em;
}

.navbar-item:hover {
  color: #f1c40f;
  background-color: rgba(241, 196, 15, 0.1);
  transform: translateY(-2px);
}

.navbar-item.active {
  color: #f1c40f;
  background-color: rgba(241, 196, 15, 0.2);
}

.navbar-item.active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 2px;
  background-color: #f1c40f;
  border-radius: 1px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .navbar-container {
    flex-direction: column;
    gap: 10px;
  }

  .navbar-brand {
    font-size: 1.3rem;
  }

  .navbar-menu {
    gap: 15px;
  }

  .navbar-item {
    font-size: 0.9rem;
    padding: 6px 12px;
  }
}

@media (max-width: 480px) {
  .navbar-brand {
    font-size: 1.1rem;
  }

  .navbar-menu {
    gap: 10px;
  }

  .navbar-item {
    font-size: 0.8rem;
    padding: 5px 10px;
  }
}
</style>
