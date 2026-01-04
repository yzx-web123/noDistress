/*
 * @Author: yzx-web123 1184699248@qq.com
 * @Date: 2026-01-04 22:26:02
 * @LastEditors: yzx-web123 1184699248@qq.com
 * @LastEditTime: 2026-01-05 01:11:01
 * @FilePath: \vite-project\vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./", // 将基础路径设置为相对路径
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    minify: "esbuild",
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      external: [], // 不允许任何外部依赖
      output: {
        entryFileNames: "assets/[name].[hash].js",
        chunkFileNames: "assets/[name].[hash].js",
        assetFileNames: "assets/[name].[hash].[ext]",
        manualChunks: undefined, // 禁用代码分割
      },
    },
  },
  optimizeDeps: {
    include: ["vue", "vue-router"], // 强制预优化这些依赖
  },
});
