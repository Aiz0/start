<script setup lang="ts">
import Home from './components/Home.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <main>
      <Home/>
  </main>
  <Footer/>
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
