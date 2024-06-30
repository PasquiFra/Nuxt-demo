<script setup>
import { storeCounter } from '~/stores/counter';

// Utilizzo il counter importato dallo store globale
const counter = storeCounter()


const changeCounter = (operation) => {
    operation === "add" ? counter.count++ : counter.count--
}

</script>

<template>
    <div>
        <span :class="{'text-danger': counter.count < 0 }"><strong>Count: </strong>{{ counter.count }}</span>
    </div>
    <button class="btn btn-success m-2" role="button" @click="changeCounter('add')">Add unit</button>
    <button class="btn btn-danger m-2" role="button" @click="changeCounter('subtract')">Subtract unit</button>
</template>