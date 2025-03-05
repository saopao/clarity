<template>
  <div class="page-container">
    <h1 class="page-title">关于我们</h1>
    
    <div class="about-content">
      <div class="company-intro">
        <div class="company-image">
          <i class="fas fa-building"></i>
        </div>
        <div class="company-text">
          <h2>公司简介</h2>
          <p>我们是一家致力于创新和卓越的科技公司，成立于2020年。通过不断的技术创新和服务优化，我们为客户提供最优质的解决方案。</p>
        </div>
      </div>

      <div class="values-grid">
        <div class="value-card">
          <i class="fas fa-star"></i>
          <h3>创新精神</h3>
          <p>持续追求技术创新，引领行业发展</p>
        </div>
        <div class="value-card">
          <i class="fas fa-heart"></i>
          <h3>用户至上</h3>
          <p>以用户需求为中心，提供优质服务</p>
        </div>
        <div class="value-card">
          <i class="fas fa-handshake"></i>
          <h3>诚信合作</h3>
          <p>诚信经营，互利共赢</p>
        </div>
      </div>

      <div class="team-section">
        <h2>核心团队</h2>
        <div class="team-grid">
          <div class="team-member">
            <div class="member-avatar">
              <i class="fas fa-user-tie"></i>
            </div>
            <h3>张三</h3>
            <p>首席执行官</p>
          </div>
          <div class="team-member">
            <div class="member-avatar">
              <i class="fas fa-user-tie"></i>
            </div>
            <h3>李四</h3>
            <p>技术总监</p>
          </div>
          <div class="team-member">
            <div class="member-avatar">
              <i class="fas fa-user-tie"></i>
            </div>
            <h3>王五</h3>
            <p>产品经理</p>
          </div>
        </div>
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

.about-content {
  max-width: 1000px;
  margin: 0 auto;
}

.company-intro {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 60px;
  padding: 20px;
}

.company-image {
  flex-shrink: 0;
  width: 200px;
  height: 200px;
  background: #f8f9fa;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.company-image i {
  font-size: 80px;
  color: #3498db;
}

.company-text h2 {
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 1.8em;
}

.company-text p {
  color: #666;
  line-height: 1.8;
  font-size: 1.1em;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 60px;
}

.value-card {
  text-align: center;
  padding: 30px;
  border-radius: 10px;
  background: #f8f9fa;
  transition: transform 0.3s ease;
}

.value-card:hover {
  transform: translateY(-5px);
}

.value-card i {
  font-size: 2.5em;
  color: #3498db;
  margin-bottom: 20px;
}

.value-card h3 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.team-section {
  text-align: center;
}

.team-section h2 {
  color: #2c3e50;
  margin-bottom: 40px;
  font-size: 1.8em;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.team-member {
  text-align: center;
}

.member-avatar {
  width: 120px;
  height: 120px;
  background: #f8f9fa;
  border-radius: 60px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.member-avatar i {
  font-size: 40px;
  color: #3498db;
}

.team-member h3 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.team-member p {
  color: #666;
}

@media (max-width: 768px) {
  .page-container {
    padding: 20px;
  }

  .company-intro {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }

  .values-grid,
  .team-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style> 