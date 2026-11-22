import path from 'node:path';

import solid from '@solidjs/vite-plugin';
import { defineConfig } from 'vite';

import { livePreview } from '../../tools/live-preview.ts';

export default defineConfig({
  plugins: [solid(), livePreview()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
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
