import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'; 

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    base: '/vue-vet-app/',
    alias: {
      '@': path.resolve(__dirname, './src'), // '@'를 'src' 폴더로 설정
    },
  },
})
