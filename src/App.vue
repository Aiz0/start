<script setup lang="ts">
import HomeView from './components/HomeView.vue';
import FooterView from './components/FooterView.vue';
</script>

<template>
  <main>
      <HomeView/>
  </main>
  <FooterView/>
</template>

<style scoped lang=scss>
main {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
