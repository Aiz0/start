import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteYaml from '@modyfi/vite-plugin-yaml'
import favicons from '@peterek/vite-plugin-favicons'
import imagePresets, { widthPreset } from 'vite-plugin-image-presets'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    plugins: [
        vue(),
        ViteYaml(),
        favicons('./src/assets/logo.png'),
        imagePresets({
            default: widthPreset({
                widths: [200, 250, 300],
                sizes: '(max-width: 980px) 200px, (max-width:2000) 250px 300',
                formats: {
                    webp: { near_lossless: true },
                },
                inferDimensions: true,
            }),
        }),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '@images': resolve(__dirname, 'src/assets/images'),
        },
    },
})
