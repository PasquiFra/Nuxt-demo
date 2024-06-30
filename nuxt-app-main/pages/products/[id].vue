<script setup>
definePageMeta({
    layout: "custom",
});

</script>

<template>
    <div>
        event id: {{ $route.params.id }}
    </div>
    <ul>
        <li>
            <NuxtLink to="/">go back to Home</NuxtLink>
        </li>
    </ul>
</template>