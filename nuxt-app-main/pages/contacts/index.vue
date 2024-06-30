<script setup>

    const {$pageTitle} = useNuxtApp()

</script>

<template>
    <h1>{{ $pageTitle("contatti") }}</h1>
    <ul>
        <li>
            <NuxtLink to="/">go back to Home</NuxtLink>
        </li>
    </ul>
</template>