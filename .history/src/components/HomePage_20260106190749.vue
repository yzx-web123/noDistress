<template>
  <div class="app-container">
    <Navbar />
    <div class="content-wrapper">
      <Index />
      <div class="love-heart-wrapper">
        <LoveHeartPage />
      </div>
    </div>
    <div class="carousel-wrapper">
      <Carousel />
    </div>
    <MusicPlayer />
  </div>
</template>

<script setup>
import Index from "./index.vue";
import Carousel from "./Carousel.vue";
import LoveHeartPage from "./LoveHeartPage.vue";
import MusicPlayer from "./MusicPlayer.vue";
import Navbar from "./Navbar.vue";
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  padding-top: 100px;
  padding-bottom: 150px; /* 增加底部内边距，确保轮播图不会遮挡爱心图的详细信息 */
  box-sizing: border-box;
}

.content-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  overflow: visible;
  margin-bottom: 120px; /* 给爱心图组件添加底部间距，确保详细信息框不会被轮播图遮挡 */
}

.love-heart-wrapper {
  flex: 1;
  width: 100%;
  max-width: 1000px;
  margin-top: -20px;
}

.carousel-wrapper {
  width: 90%;
  max-width: 800px;
  margin: 0 auto 20px;
  position: relative;
  z-index: 1; /* 确保轮播图位于爱心图详细信息下方 */
}
/* Hero Section */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
  padding: 0 20px;
}

.hero-content {
  text-align: center;
  z-index: 2;
  max-width: 800px;
}

.hero-title {
  font-size: 4rem;
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 20px;
  text-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  animation: fadeInUp 1s ease;
}

.hero-subtitle {
  font-size: 1.8rem;
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 40px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  opacity: 0.9;
  animation: fadeInUp 1s ease 0.2s both;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.hero-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  animation: fadeInUp 1s ease 0.4s both;
}

.btn-primary,
.btn-secondary,
.btn-cta {
  display: inline-block;
  padding: 15px 30px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.btn-primary {
  background-color: #f1c40f;
  color: #000000;
  box-shadow: 0 4px 15px rgba(241, 196, 15, 0.4);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 7px 20px rgba(241, 196, 15, 0.6);
}

.btn-secondary {
  background-color: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
}

.btn-secondary:hover {
  background-color: #ffffff;
  color: #667eea;
  transform: translateY(-3px);
  box-shadow: 0 7px 20px rgba(255, 255, 255, 0.3);
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.floating-elements {
  position: relative;
  width: 100%;
  height: 100%;
}

.element {
  position: absolute;
  font-size: 8rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.05);
  animation: float 20s infinite ease-in-out;
}

.element-1 {
  top: 15%;
  left: 10%;
  animation-delay: 0s;
}

.element-2 {
  top: 60%;
  right: 15%;
  animation-delay: 5s;
}

.element-3 {
  bottom: 20%;
  left: 20%;
  animation-delay: 10s;
}

.element-4 {
  top: 30%;
  right: 30%;
  animation-delay: 15s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-30px) rotate(90deg);
  }
  50% {
    transform: translateY(0px) rotate(180deg);
  }
  75% {
    transform: translateY(30px) rotate(270deg);
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

/* Features Section */
.features-section {
  padding: 100px 0;
  background-color: #ffffff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  text-align: center;
  font-size: 3rem;
  font-weight: 900;
  color: #333;
  margin-bottom: 60px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.feature-item {
  text-align: center;
  padding: 30px;
  border-radius: 10px;
  background-color: #f8f9fa;
  transition: all 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.feature-item h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
}

.feature-item p {
  color: #666;
  line-height: 1.6;
}

/* About Section */
.about-section {
  padding: 100px 0;
  background-color: #f8f9fa;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.about-text h2 {
  font-size: 2.5rem;
  font-weight: 900;
  color: #333;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.about-text p {
  color: #666;
  line-height: 1.8;
  margin-bottom: 20px;
  text-align: justify;
}

.about-image {
  position: relative;
}

.image-placeholder {
  width: 100%;
  height: 400px;
  border-radius: 10px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.image-content {
  text-align: center;
  color: #ffffff;
}

.image-content .icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.image-content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.image-content p {
  opacity: 0.9;
}

/* CTA Section */
.cta-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  text-align: center;
  color: #ffffff;
}

.cta-section h2 {
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.cta-section p {
  font-size: 1.3rem;
  margin-bottom: 40px;
  opacity: 0.9;
}

.btn-cta {
  background-color: #f1c40f;
  color: #000000;
  box-shadow: 0 4px 15px rgba(241, 196, 15, 0.4);
  font-size: 1.2rem;
  padding: 18px 40px;
}

.btn-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 7px 20px rgba(241, 196, 15, 0.6);
}

/* Footer */
.footer {
  padding: 50px 0;
  background-color: #2c3e50;
  color: #ffffff;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.footer-logo {
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #f1c40f;
}

.footer-links {
  display: flex;
  gap: 30px;
}

.footer-links a {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
  font-weight: 500;
}

.footer-links a:hover {
  color: #f1c40f;
}

.footer-copyright {
  margin-top: 20px;
  opacity: 0.7;
  font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.3rem;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .section-title {
    font-size: 2rem;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .cta-section h2 {
    font-size: 2rem;
  }

  .cta-section p {
    font-size: 1.1rem;
  }

  .footer-links {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .btn-primary,
  .btn-secondary,
  .btn-cta {
    padding: 12px 25px;
    font-size: 1rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .image-placeholder {
    height: 300px;
  }

  .cta-section h2 {
    font-size: 1.8rem;
  }
}
</style>
