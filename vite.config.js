import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import macro from 'vite-plugin-babel-macros';

export default defineConfig({
  plugins: [macro(), react()],
  base: '/',
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },
  server: {
    host: 'localhost',
    port: 3000,
    open: true,
  },
  css: {
    devSourcemap: true, // 개발자 도구에 소스맵 생성 설정
  },
});
