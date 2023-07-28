<script setup lang="ts">
import applist from '/applist.yaml'
</script>

<template>
<div class="list-container">
    <section v-for="section in applist"
            :key="section.title">
        <h2 class="section__title">{{ section.title }}</h2>
        <ul class="section__list">
            <li v-for="app in section.apps"
                :key="app.name"
                class="section__list-item">
                <a :href="app.url"
                    class="section__link">
                    {{ app.name }}
                </a>
            </li>
        </ul>
    </section>
</div>
</template>

<style scoped lang="scss">
@use '../styles/themes/theme';
.list-container {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
}

.section {
    &__title {
        color: theme.$text-alt2;
        font-size: 20px;
        margin: 0;
    }

    &__list {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    &__link {
        color: theme.$text;
        text-decoration: none;
        
        &:hover{
            color: theme.$text-alt2;
            transition: color 0.4s;
        }
    }
}

</style>
