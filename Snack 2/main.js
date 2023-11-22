'use strict';

// Funzione per generare numeri casuali compresi tra min e max
function generaNumeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Array di oggetti di squadre NBA
const squadreNBA = [
    { nome: "Lakers", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Warriors", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Bucks", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Celtics", puntiFatti: 0, falliSubiti: 0 },
];

// Aggiorna i valori di punti fatti e falli subiti con numeri casuali
squadreNBA.forEach(squadra => {
    squadra.puntiFatti = generaNumeroCasuale(80, 120);
    squadra.falliSubiti = generaNumeroCasuale(10, 30);
});

// Creazione di un nuovo array con destrutturazione
const nuovoArray = squadreNBA.map(({ nome, falliSubiti }) => ({ nome, falliSubiti }));

// Stampare tutto in console
console.log("Squadre NBA con statistiche casuali:");
squadreNBA.forEach(squadra => {
    console.log(`Nome: ${squadra.nome}, Punti Fatti: ${squadra.puntiFatti}, Falli Subiti: ${squadra.falliSubiti}`);
});

console.log(`
Nuovo array con nomi e falli subiti:`);
nuovoArray.forEach(squadra => {
    console.log(`Nome: ${squadra.nome}, Falli Subiti: ${squadra.falliSubiti}`);
});
