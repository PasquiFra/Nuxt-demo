import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
    return {
        provide: {
            pageTitle: (name) => name === "contatti" ? "Contatti" : ''
        }
    }
})