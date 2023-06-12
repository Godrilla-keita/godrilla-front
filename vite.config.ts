import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { checker } from 'vite-plugin-checker'

export default defineConfig({
  plugins: [
    checker({
      // https://maasaablog.com/development/frontend/vite/5116/
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts, vue}"',
      },
    }),
    vue(),
  ],
  resolve: {
    alias: {
      '@': `${__dirname}/src`,
    },
  },
  base: '/godrilla-front/',
})
