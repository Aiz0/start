<script setup lang="ts">
import AppList from "@/components/AppList.vue";
import PicturePreset from "@/components/PicturePreset.vue";
import mashiro from "@images/mashiro.png?preset=default"
</script>

<template>
<div class="main-window">
    <PicturePreset :src="mashiro"/>
    <div class="container">
        <h1>Welcome</h1>
        <AppList/>
    </div>
</div>
</template>

<style scoped lang="scss">
@use '@/styles/themes/theme';

.main-window {
    display: flex;
    margin: 30px;
    background-color: theme.$contrast;
    width: 910px;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12),
                0 1px 2px rgba(0,0,0,0.24);
}

.container {
    margin: 30px;
}

@media(max-width: 833px){
    Picture {
        display:none;
    }
}


</style>
    
