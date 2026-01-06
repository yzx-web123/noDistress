<template>
  <div class="join-us-page">
    <Navbar />
    <div class="join-us-container">
      <h1 class="join-us-title">加入我们</h1>
      <div class="join-us-content">
        <div class="join-us-text">
          <h2>欢迎加入百业江湖</h2>
          <p>
            百业江湖是一个汇聚各行业英雄豪杰的武林圣地，我们致力于弘扬侠义精神，促进各业交流，共同守护江湖和平与繁荣。
          </p>
          <h3>加入我们的理由：</h3>
          <ul>
            <li>与各行业高手切磋武艺</li>
            <li>获取江湖最新动态和武林秘籍</li>
            <li>参加武林大会和线下交流活动</li>
            <li>共享资源和合作机会</li>
            <li>提升武功修为和个人声望</li>
          </ul>
          <h3>江湖成员权益：</h3>
          <ul>
            <li>免费参加江湖线上活动</li>
            <li>优先报名武林大会</li>
            <li>访问江湖藏经阁</li>
            <li>在江湖榜展示个人或门派信息</li>
            <li>获得江湖盟主推荐机会</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "./Navbar.vue";
</script>

<style scoped>
.join-us-page {
  min-height: 100vh;
  background-color: #000000;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23000000"/><path d="M50 0 L100 50 L50 100 L0 50 Z" fill="%231a1a1a" opacity="0.3"/><path d="M0 0 L50 50 L0 100 Z" fill="%231a1a1a" opacity="0.2"/><path d="M100 0 L50 50 L100 100 Z" fill="%231a1a1a" opacity="0.2"/></svg>');
  padding-top: 80px; /* 给导航栏留出空间 */
  padding-bottom: 40px;
}

.join-us-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.join-us-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 900;
  color: #f1c40f;
  margin-bottom: 40px;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.join-us-content {
  max-width: 800px;
  margin: 0 auto;
}

.join-us-text {
  background-color: rgba(255, 255, 255, 0.05);
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(241, 196, 15, 0.2);
  backdrop-filter: blur(10px);
}

.join-us-text h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #f1c40f;
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.join-us-text h3 {
  font-size: 1.2rem;
  font-weight: 500;
  color: #f1c40f;
  margin-top: 25px;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.join-us-text p {
  line-height: 1.8;
  color: #ffffff;
  margin-bottom: 15px;
  text-align: justify;
  opacity: 0.9;
}

.join-us-text ul {
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 15px;
}

.join-us-text li {
  position: relative;
  padding-left: 25px;
  margin-bottom: 10px;
  color: #ffffff;
  opacity: 0.9;
}

.join-us-text li:before {
  content: "•";
  position: absolute;
  left: 0;
  color: #f1c40f;
  font-weight: bold;
  font-size: 1.2rem;
}

.join-us-form {
  background-color: rgba(255, 255, 255, 0.05);
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(241, 196, 15, 0.2);
  backdrop-filter: blur(10px);
}

.join-us-form h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #f1c40f;
  margin-bottom: 25px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #ffffff;
  opacity: 0.9;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid rgba(241, 196, 15, 0.3);
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #f1c40f;
  box-shadow: 0 0 0 3px rgba(241, 196, 15, 0.1);
  background-color: rgba(255, 255, 255, 0.15);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

.form-group input[type="checkbox"] {
  width: auto;
  margin-right: 8px;
  transform: scale(1.2);
}

.submit-btn {
  display: block;
  width: 100%;
  padding: 14px;
  background-color: #f1c40f;
  color: #000000;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  box-shadow: 0 4px 15px rgba(241, 196, 15, 0.3);
}

.submit-btn:hover {
  background-color: #f39c12;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(241, 196, 15, 0.4);
}

@media (max-width: 768px) {
  .join-us-content {
    grid-template-columns: 1fr;
  }

  .join-us-title {
    font-size: 2rem;
  }

  .join-us-text,
  .join-us-form {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .join-us-page {
    padding: 20px 0;
  }

  .join-us-container {
    padding: 0 15px;
  }

  .join-us-title {
    font-size: 1.8rem;
    margin-bottom: 30px;
  }
}
</style>
