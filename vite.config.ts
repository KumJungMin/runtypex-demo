import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { vitePlugin as runtypex } from "runtypex";

export default defineConfig({
  plugins: [
    vue(),
    runtypex({
      removeInProd: false,
      docs: {
        include: "",
      },
    }),
  ]
})
