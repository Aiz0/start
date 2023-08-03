<script setup lang="ts">
import AppList from '@/components/AppList.vue'
import PicturePreset from '@/components/PicturePreset.vue'
import config from '/config.yaml'
import type { ImageAttrs } from 'vite-plugin-image-presets'
const images = import.meta.glob<ImageAttrs[]>('@images/**', {
    eager: true,
    as: 'preset=default', // use whatever preset you want
    import: 'default', // to simplify "unwrapping" the imports
})

// Get image to use from config file
const image = images['/src/assets/images/' + config.picture.path]
</script>

<template>
    <div class="main-window">
        <PicturePreset :src="image" />
        <div class="container">
            <h1>Welcome</h1>
            <AppList />
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '@/styles/themes';

.main-window {
    display: flex;
    width: 910px;
    margin: 30px;
    background-color: themes.$contrast;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.container {
    margin: 30px;
}

h1 {
    color: themes.$text-alt;
}

picture {
    width: 300px;
}

@media (max-width: 2000px) {
    Picture {
        width: 250px;
    }
}

@media (max-width: 980px) {
    Picture {
        width: 200px;
    }
}

@media (max-width: 833px) {
    Picture {
        display: none;
    }
}
</style>
