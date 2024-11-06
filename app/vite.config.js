import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import proxyOptions from './proxyOptions';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  server: {
		port: 8080,
		proxy: proxyOptions
	},
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
	build: {
		outDir: '../rukn_dashboard/public/app',
		emptyOutDir: true,
		target: 'es2015',
	},
})
