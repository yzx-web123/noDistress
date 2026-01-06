<template>
  <div class="join-us-container">
    <Navbar />
    <div class="content-wrapper">
      <div class="page-header">
        <h1 class="page-title">加入我们</h1>
        <p class="page-subtitle">成为燕云十六声的一员</p>
      </div>
      <div class="join-content">
        <div class="join-intro">
          <h2>燕云十六声是什么？</h2>
          <p>燕云十六声是一个充满活力和创意的江湖团体，我们汇聚了来自各行各业的人才，共同追求梦想和挑战。我们注重团队协作、创新精神和个人成长，在这里，你可以找到志同道合的伙伴，一起创造美好的未来。</p>
          <h2>我们需要什么样的你？</h2>
          <ul>
            <li>对江湖文化和武侠精神有浓厚兴趣</li>
            <li>具备团队协作精神和良好的沟通能力</li>
            <li>有创新思维和解决问题的能力</li>
            <li>对自己的事业充满热情和责任感</li>
            <li>愿意不断学习和成长</li>
          </ul>
          <h2>加入我们的好处</h2>
          <ul>
            <li>与志同道合的伙伴一起成长</li>
            <li>参与各种有趣的活动和项目</li>
            <li>提升自己的技能和能力</li>
            <li>获得更多的发展机会</li>
            <li>享受团队协作的乐趣</li>
          </ul>
        </div>
        <div class="join-form">
          <h2>加入申请表</h2>
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="name">姓名</label>
              <input type="text" id="name" v-model="formData.name" required placeholder="请输入您的姓名" />
            </div>
            <div class="form-group">
              <label for="contact">联系方式</label>
              <input type="text" id="contact" v-model="formData.contact" required placeholder="请输入您的联系方式" />
            </div>
            <div class="form-group">
              <label for="profession">职业</label>
              <input type="text" id="profession" v-model="formData.profession" required placeholder="请输入您的职业" />
            </div>
            <div class="form-group">
              <label for="interest">兴趣爱好</label>
              <input type="text" id="interest" v-model="formData.interest" required placeholder="请输入您的兴趣爱好" />
            </div>
            <div class="form-group">
              <label for="reason">加入理由</label>
              <textarea id="reason" v-model="formData.reason" required rows="4" placeholder="请输入您加入我们的理由"></textarea>
            </div>
            <div class="form-group">
              <label for="expectation">期望与目标</label>
              <textarea id="expectation" v-model="formData.expectation" required rows="4" placeholder="请输入您的期望与目标"></textarea>
            </div>
            <button type="submit" class="submit-btn">提交申请</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "./Navbar.vue";
import { ref } from "vue";

// 表单数据
const formData = ref({
  name: "",
  contact: "",
  profession: "",
  interest: "",
  reason: "",
  expectation: "",
});

// 处理表单提交
const handleSubmit = () => {
  // 这里可以添加表单验证和提交逻辑
  console.log("表单数据：", formData.value);
  // 模拟提交成功
  alert("申请已提交，我们会尽快与您联系！");
  // 重置表单
  formData.value = {
    name: "",
    contact: "",
    profession: "",
    interest: "",
    reason: "",
    expectation: "",
  };
};
</script>

<style scoped>
.join-us-container {
  width: 100vw;
  min-height: 100vh;
  padding-top: 80px; /* 给导航栏留出空间 */
  padding-bottom: 50px;
  box-sizing: border-box;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-header {
  text-align: center;
  padding: 40px 20px;
  position: relative;
  z-index: 1;
}

.page-title {
  font-size: 3.5rem;
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 15px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  animation: fadeInDown 1s ease;
}

.page-subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  color: #ffffff;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  opacity: 0.9;
  animation: fadeInUp 1s ease;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.join-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  padding: 20px 0;
  position: relative;
  z-index: 1;
}

.join-intro {
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.join-intro h2 {
  font-size: 1.8rem;
  color: #f1c40f;
  margin-bottom: 15px;
}

.join-intro p {
  font-size: 1rem;
  line-height: 1.6;
  color: #ffffff;
  opacity: 0.9;
  margin-bottom: 20px;
}

.join-intro ul {
  list-style-type: disc;
  padding-left: 25px;
  margin-bottom: 20px;
}

.join-intro li {
  font-size: 1rem;
  line-height: 1.6;
  color: #ffffff;
  opacity: 0.9;
  margin-bottom: 10px;
}

.join-form {
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.join-form h2 {
  font-size: 1.8rem;
  color: #f1c40f;
  margin-bottom: 25px;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 1rem;
  color: #ffffff;
  margin-bottom: 8px;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #f1c40f;
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 0 3px rgba(241, 196, 15, 0.2);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.submit-btn {
  width: 100%;
  padding: 15px;
  background-color: #f1c40f;
  color: #000000;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.submit-btn:hover {
  background-color: #f39c12;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(241, 196, 15, 0.3);
}

/* 动画 */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
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

/* 响应式设计 */
@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }

  .page-subtitle {
    font-size: 1.2rem;
  }

  .join-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .join-intro,
  .join-form {
    padding: 20px;
  }

  .join-intro h2,
  .join-form h2 {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 2rem;
  }

  .page-subtitle {
    font-size: 1rem;
  }

  .join-intro,
  .join-form {
    padding: 15px;
  }

  .join-intro h2,
  .join-form h2 {
    font-size: 1.3rem;
  }

  .form-group input,
  .form-group textarea {
    padding: 10px;
    font-size: 0.9rem;
  }

  .submit-btn {
    padding: 12px;
    font-size: 1rem;
  }
}
</style>
