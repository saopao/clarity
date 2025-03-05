import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/clarity/',
  server: {
    host: '0.0.0.0', // 这样就能通过 IP 访问了
    port: 3000,      // 指定端口，可选
    open: true,      // 自动打开浏览器，可选
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        404: resolve(__dirname, 'public/404.html')
      }
    }
  }
})
