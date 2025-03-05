import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0', // 这样就能通过 IP 访问了
    port: 3000,      // 指定端口，可选
    open: true,      // 自动打开浏览器，可选
  }
})
