<template>
  <div class="join-us-page">
    <Navbar />
    <div class="join-us-container">
      <h1 class="join-us-title">加入我们</h1>
      <div class="join-us-content">
        <div class="join-us-text">
          <h2>欢迎加入百业成员社区</h2>
          <p>
            百业成员社区是一个汇聚各行业精英的平台，我们致力于促进跨行业交流、分享经验和资源，帮助每个成员实现个人和职业成长。
          </p>
          <h3>加入我们的理由：</h3>
          <ul>
            <li>与各行业专业人士建立联系</li>
            <li>获取最新行业动态和趋势</li>
            <li>参加线上线下交流活动</li>
            <li>共享资源和合作机会</li>
            <li>提升职业技能和个人品牌</li>
          </ul>
          <h3>会员权益：</h3>
          <ul>
            <li>免费参加社区线上活动</li>
            <li>优先报名线下交流会议</li>
            <li>访问社区资源库</li>
            <li>在社区平台展示个人或企业信息</li>
            <li>获得社区推荐机会</li>
          </ul>
        </div>
        <div class="join-us-form">
          <h2>申请加入</h2>
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="name">姓名 *</label>
              <input
                type="text"
                id="name"
                v-model="formData.name"
                required
                placeholder="请输入您的姓名"
              />
            </div>
            <div class="form-group">
              <label for="email">邮箱 *</label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                required
                placeholder="请输入您的邮箱"
              />
            </div>
            <div class="form-group">
              <label for="phone">电话 *</label>
              <input
                type="tel"
                id="phone"
                v-model="formData.phone"
                required
                placeholder="请输入您的手机号"
              />
            </div>
            <div class="form-group">
              <label for="company">公司</label>
              <input
                type="text"
                id="company"
                v-model="formData.company"
                placeholder="请输入您的公司名称"
              />
            </div>
            <div class="form-group">
              <label for="position">职位</label>
              <input
                type="text"
                id="position"
                v-model="formData.position"
                placeholder="请输入您的职位"
              />
            </div>
            <div class="form-group">
              <label for="industry">所属行业</label>
              <select id="industry" v-model="formData.industry">
                <option value="">请选择行业</option>
                <option value="tech">科技</option>
                <option value="finance">金融</option>
                <option value="education">教育</option>
                <option value="healthcare">医疗健康</option>
                <option value="retail">零售</option>
                <option value="manufacturing">制造</option>
                <option value="service">服务业</option>
                <option value="other">其他</option>
              </select>
            </div>
            <div class="form-group">
              <label for="bio">个人简介</label>
              <textarea
                id="bio"
                v-model="formData.bio"
                placeholder="请介绍一下您自己和您的专业领域"
              ></textarea>
            </div>
            <div class="form-group">
              <label for="reason">加入理由</label>
              <textarea
                id="reason"
                v-model="formData.reason"
                placeholder="请说明您为什么想加入百业成员社区"
              ></textarea>
            </div>
            <div class="form-group">
              <label for="agreement">
                <input
                  type="checkbox"
                  id="agreement"
                  v-model="formData.agreement"
                  required
                />
                我同意遵守社区规则和隐私政策
              </label>
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

const formData = ref({
  name: "",
  email: "",
  phone: "",
  company: "",
  position: "",
  industry: "",
  bio: "",
  reason: "",
  agreement: false,
});

const handleSubmit = () => {
  // 这里可以添加表单提交逻辑，比如发送到后端API
  console.log("表单数据：", formData.value);
  alert("申请已提交，我们会尽快与您联系！");
  // 重置表单
  formData.value = {
    name: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    industry: "",
    bio: "",
    reason: "",
    agreement: false,
  };
};
</script>

<style scoped>
.join-us-page {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 40px 0;
}

.join-us-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.join-us-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 40px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.join-us-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}

.join-us-text {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.join-us-text h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.join-us-text h3 {
  font-size: 1.2rem;
  font-weight: 500;
  color: #333;
  margin-top: 25px;
  margin-bottom: 15px;
}

.join-us-text p {
  line-height: 1.8;
  color: #666;
  margin-bottom: 15px;
  text-align: justify;
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
  color: #666;
}

.join-us-text li:before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: bold;
  font-size: 1.2rem;
}

.join-us-form {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.join-us-form h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 25px;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
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
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #2980b9;
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
