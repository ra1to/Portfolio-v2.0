import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';

export default defineConfig({
  plugins: [
    react(),       // 最速ビルド (SWC)
    tailwindcss(), // 次世代Tailwind (v4)
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 実務で必須のパス設定
    },
  },
});