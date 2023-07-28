import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteYaml from '@modyfi/vite-plugin-yaml';
import imagePresets, { widthPreset } from 'vite-plugin-image-presets'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/start/',
  plugins: [
    vue(),
    ViteYaml(),
    imagePresets({
        default: widthPreset({
            widths: [200, 300],
            sizes: '(max-width: 980px) 200px, 300px',
            formats: {
               webp: {quality: 100 },
            },
        }),
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url)),
      '@images': resolve(__dirname, 'src/images')
    }
  }
})
