<script setup lang="ts">
import applist from '../../applist.yaml'
</script>

<template>
<div>
    <div v-for="section in applist">
        {{ section.title }}
        <ul>
            <li v-for="app in section.apps">
                <a :href="app.url">
                    {{ app.name }}
                </a>
            </li>
        </ul>
    </div>
</div>
</template>
