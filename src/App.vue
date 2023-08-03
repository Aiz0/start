<script setup lang="ts">
import HomeView from './components/HomeView.vue'
import FooterView from './components/FooterView.vue'
</script>

<template>
    <main>
        <HomeView />
    </main>
    <FooterView />
</template>

<style scoped lang="scss">
main {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

footer {
    flex: 0;
}
</style>
