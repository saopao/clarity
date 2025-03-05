<template>
  <div class="page-container">
    <h1 class="page-title">联系我们</h1>
    
    <div class="contact-content">
      <div class="contact-info">
        <div class="info-card">
          <i class="fas fa-map-marker-alt"></i>
          <h3>公司地址</h3>
          <p>北京市朝阳区科技园A座100号</p>
        </div>
        <div class="info-card">
          <i class="fas fa-phone-alt"></i>
          <h3>联系电话</h3>
          <p>400-123-4567</p>
          <p>010-12345678</p>
        </div>
        <div class="info-card">
          <i class="fas fa-envelope"></i>
          <h3>电子邮箱</h3>
          <p>contact@example.com</p>
          <p>support@example.com</p>
        </div>
      </div>

      <div class="contact-form">
        <h2>在线留言</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">姓名</label>
            <input type="text" id="name" v-model="form.name" required>
          </div>
          <div class="form-group">
            <label for="email">邮箱</label>
            <input type="email" id="email" v-model="form.email" required>
          </div>
          <div class="form-group">
            <label for="message">留言内容</label>
            <textarea id="message" v-model="form.message" rows="5" required></textarea>
          </div>
          <button type="submit" class="submit-btn">提交留言</button>
        </form>
      </div>

      <div class="business-hours">
        <h2>营业时间</h2>
        <div class="hours-grid">
          <div class="hours-item">
            <span>周一至周五</span>
            <span>9:00 - 18:00</span>
          </div>
          <div class="hours-item">
            <span>周六</span>
            <span>10:00 - 16:00</span>
          </div>
          <div class="hours-item">
            <span>周日</span>
            <span>休息</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const submitForm = () => {
  // 这里添加表单提交逻辑
  console.log('表单提交:', form)
  alert('感谢您的留言，我们会尽快回复！')
}
</script>

<style scoped>
.page-container {
  background: #fff;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
}

.page-title {
  text-align: center;
  color: #2c3e50;
  font-size: 2.5em;
  margin-bottom: 50px;
  font-weight: 600;
}

.contact-content {
  max-width: 1000px;
  margin: 0 auto;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 60px;
}

.info-card {
  text-align: center;
  padding: 30px;
  background: #f8f9fa;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
}

.info-card i {
  font-size: 2.5em;
  color: #3498db;
  margin-bottom: 20px;
}

.info-card h3 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.info-card p {
  color: #666;
  line-height: 1.6;
}

.contact-form {
  background: #f8f9fa;
  padding: 40px;
  border-radius: 10px;
  margin-bottom: 60px;
}

.contact-form h2 {
  color: #2c3e50;
  margin-bottom: 30px;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #2c3e50;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
}

.form-group textarea {
  resize: vertical;
}

.submit-btn {
  background: #3498db;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background: #2980b9;
}

.business-hours {
  text-align: center;
}

.business-hours h2 {
  color: #2c3e50;
  margin-bottom: 30px;
}

.hours-grid {
  display: grid;
  gap: 15px;
  max-width: 400px;
  margin: 0 auto;
}

.hours-item {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 6px;
}

@media (max-width: 768px) {
  .page-container {
    padding: 20px;
  }

  .contact-info {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .contact-form {
    padding: 20px;
  }
}
</style> 