<script setup>
import faqs from '../../assets/faqs.js';
import {ref} from 'vue';
console.log(faqs)

const activeQuestion = ref(null);

const setActiveQuestion = (index) => {
    activeQuestion.value = index
}

</script>

<template>
    <h1 class="text-center">FAQ's</h1>
    <h5 class="ps-3">Qua puoi trovare una lista delle domande e dubbi più frequenti, semplicemente clicca su quello che stai cercando.</h5>
    <section id="faqs-section">
        <div id="faqs-body">
            <div id="faqs-questions" class="w-100">
                <ul>
                    <li v-for="(faq, index) in faqs" :key="`question-${index}`">
                        <a href="#" @click="setActiveQuestion(index)">{{ faq.question }}</a>
                    </li>
                </ul>
            </div>
            <div id="faqs-answers">
                <ul>
                <!-- Lista di tutte le risposte
                    <li v-for="{answer, index} in faqs":key="`answer-${index}`">{{ answer }}</li>
                -->
                    <li>{{ activeQuestion !== null ? faqs[activeQuestion].answer : "Seleziona una domanda" }}</li>
                </ul> 
            </div>
        </div>
        <div class="ps-3">
            Non hai trovato nulla? <NuxtLink to="/contacts"><strong>Contattaci</strong></NuxtLink>
        </div>
    </section>
    <footer class="mt-3">
        <ul>
            <li>
                <NuxtLink to="/">go back to Home</NuxtLink>
            </li>
        </ul>
    </footer>
</template>

<style lang="scss" scoped>
#faqs-body {
    display: flex;
    border: 1px solid black ;
    margin: 1rem;

    #faqs-questions{
        flex-basis: calc(100% / 3);
        border-right: 1px solid black ;
        padding: 1rem;
        overflow: scroll;
        max-height: 75vh;

        li {
            margin-top: 1rem;
            &:last-child {
                margin-bottom: 1rem;
            }
        }
    }
    #faqs-answers{
        padding: 1rem;
        flex-basis: calc(100% / 3 * 2);
        li {
            list-style-type: none;
        }
    }
}
</style>