    
<script setup>
    const nuxt = useNuxtApp()
    const {greetings} = useUtils()
</script>


<template>
    <h1>{{greetings("welcome", "Francesco")}}</h1>
    <Counter/>
    <ul>
        <li>
            <NuxtLink to="/contacts">Contacts</NuxtLink>
        </li>
        <li>
            <NuxtLink to="/products">Products</NuxtLink>
        </li>
        <li>
            <NuxtLink to="/products/1">Product 1</NuxtLink>
        </li>
        <li>
            <NuxtLink to="/FAQ">FAQ's</NuxtLink>
        </li>
    </ul>
</template>