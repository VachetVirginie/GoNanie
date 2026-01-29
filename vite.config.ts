import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Go Nanie Go!',
        short_name: 'Go Nanie Go!',
        description: 'Séances douces et progressives (mobilité & équilibre).',
        lang: 'fr',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#F8FAFC',
        theme_color: '#2563EB',
        icons: [
          {
            src: '/icons/app-icon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any',
          },
          {
            src: '/icons/app-icon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'maskable',
          },
        ],
      },
      includeAssets: ['icons/app-icon.svg', 'manifest.webmanifest'],
      workbox: {
        navigateFallback: '/',
      },
    }),
  ],
  server: {
    port: 5173,
    strictPort: true,
  },
})
