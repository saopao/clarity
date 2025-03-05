<template>
  <div class="page-container">
    <h1 class="page-title">欢迎来到我们的网站哈哈x</h1>
    <div class="features-grid">
      <div class="feature-card">
        <i class="fas fa-rocket"></i>
        <h2>快速上手</h2>
        <p>简单易用的界面设计，让您快速找到所需信息。</p>
      </div>
      <div class="feature-card">
        <i class="fas fa-shield-alt"></i>
        <h2>安全可靠</h2>
        <p>采用最新的安全技术，保护您的数据安全。</p>
      </div>
      <div class="feature-card">
        <i class="fas fa-clock"></i>
        <h2>24/7支持</h2>
        <p>全天候客户支持，随时解答您的问题。</p>
      </div>
    </div>
  </div>
</template>

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

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.feature-card {
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #eee;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.feature-card i {
  font-size: 3em;
  color: #3498db;
  margin-bottom: 20px;
}

.feature-card h2 {
  color: #2c3e50;
  margin-bottom: 15px;
  font-size: 1.5em;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .page-container {
    padding: 20px;
  }

  .page-title {
    font-size: 2em;
    margin-bottom: 30px;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style> 