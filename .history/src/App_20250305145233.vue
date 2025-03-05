<script setup>
import { onMounted } from 'vue';
import { initClarity } from './utils/clarity';
import HelloWorld from './components/HelloWorld.vue'

onMounted(() => {
  initClarity('qjbu1xbzq7');
  console.log(window.clarity, 'window.clarity')
});
</script>

<template>
  <div class="app-container">
    <nav>
      <div class="nav-container">
        <router-link class="nav-item" to="/">
          <i class="fas fa-home"></i>
          <span>首页</span>
        </router-link>
        <router-link class="nav-item" to="/about">
          <i class="fas fa-info-circle"></i>
          <span>关于我们</span>
        </router-link>
        <router-link class="nav-item" to="/contact">
          <i class="fas fa-envelope"></i>
          <span>联系我们</span>
        </router-link>
      </div>
    </nav>

    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style>
/* 重置默认样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  background-color: #f5f7fa;
  color: #2c3e50;
  line-height: 1.6;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 导航栏样式 */
nav {
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 20px 30px;
  text-decoration: none;
  color: #666;
  font-size: 16px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-item i {
  margin-right: 8px;
  font-size: 18px;
}

.nav-item:hover {
  color: #3498db;
  background-color: #f8f9fa;
}

.nav-item.router-link-active {
  color: #3498db;
}

.nav-item.router-link-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #3498db;
}

/* 主内容区域 */
.main-content {
  flex: 1;
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

/* 页面切换动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .nav-container {
    padding: 0 10px;
  }

  .nav-item {
    padding: 15px;
    font-size: 14px;
  }

  .main-content {
    padding: 20px 15px;
  }
}
</style>
