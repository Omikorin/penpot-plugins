import path from 'node:path';
import { defineConfig } from 'vite';
import livePreview from 'vite-live-preview';
import solid from 'vite-plugin-solid';

export default defineConfig({
  plugins: [
    solid(),
    livePreview({
      reload: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        plugin: 'src/plugin/index.ts',
        index: './index.html',
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
  preview: {
    port: 4400,
    cors: true,
  },
});
