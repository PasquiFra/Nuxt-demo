import { defineStore } from "pinia"

//dichiaro la funzione dello store "counter". Parametro 1: nome elemento, Parametro 2: oggetto di configurazione
export const storeCounter = defineStore("counter", {
    // dichiarazione dei "data" reattivi
    state: () => ({
        count: 0
    }),
    // dichiarazione dei "methods"
    actions: {

    },
    // dichiarazione delle "computed"
    getters: {

    }
})
