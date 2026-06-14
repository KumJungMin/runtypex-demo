import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { vitePlugin as runtypex } from "runtypex";

export default defineConfig({
  plugins: [
    vue(),
    runtypex({
      removeInProd: false,
      docs: {
        include: "src/features/**/*.mapper.ts",
        generatedFileName: ({ sourceFileBaseName }) =>
          sourceFileBaseName.replace(/\.mapper\.ts$/, ".generated.ts"),
      },
    }),
  ]
})
