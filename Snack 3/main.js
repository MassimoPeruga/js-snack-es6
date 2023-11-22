'use strict';

function filtraArray(array, a, b) {
    // Verifica che a sia più piccolo di b
    if (a >= b) {
        console.log("Il secondo numero deve essere maggiore del primo.");
        return;
    }

    // Filtra l'array usando filter
    const newArray = array.filter((element, index) => {
        // Restituisci true solo per gli elementi con posizione compresa tra a e b
        return index >= a && index <= b;
    });

    return newArray;
}

// Esempio d'uso
const inputArray = [1, 2, 3, 4, 5, 6, 7];
const numeroA = 2;
const numeroB = 5;

const risultato = filtraArray(inputArray, numeroA, numeroB);
console.log(risultato);  // Output desiderato: [3, 4, 5]
