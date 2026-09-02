import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages 部署：将 base 改为你的仓库名，例如 '/company-website/'
// 如果部署到自定义域名或用户主页，保持 './' 或 '/'
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
