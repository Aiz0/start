<template>
    <footer>
        <a href="https://github.com/Aiz0/start">Github Repo</a>
    </footer>
</template>

<style scoped lang="scss">
@use '@/styles/themes';
footer {
    position: fixed;
    bottom: 0;
    font-size: 0.5em;

    a {
        color: themes.$text-alt;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
