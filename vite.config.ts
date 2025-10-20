import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { vitePlugin as runtypex } from "runtypex";

export default defineConfig({
  plugins: [vue(), runtypex({ removeInProd: false })],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@/domain': resolve(__dirname, 'src/domain'),
      '@/data': resolve(__dirname, 'src/data'),
      '@/presentation': resolve(__dirname, 'src/presentation'),
      '@/shared': resolve(__dirname, 'src/shared')
    }
  },
})
