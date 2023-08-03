<script setup lang="ts">
import config from '/config.yaml'
</script>
<template>
    <footer>
        <div class="container">
            <a href="https://github.com/Aiz0/start">Github Repo</a>

            <a :href="config.picture.credits.url"> Art by {{ config.picture.credits.artist }} </a>
        </div>
    </footer>
</template>

<style scoped lang="scss">
@use '@/styles/themes';
.container {
    display: flex;
    justify-content: space-between;
    margin: 2px 8px;
}
a {
    font-size: 0.5em;
    color: themes.$text-alt;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
}
</style>
