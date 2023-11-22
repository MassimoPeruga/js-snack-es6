'use strict';

const biciclette = [
    { nome: 'BMX', peso: 7, img: 'bmx.jpg' },
    { nome: 'Mountain bike', peso: 8, img: 'mountain.jpg' },
    { nome: 'Bici da corsa', peso: 6, img: 'race.jpg' },
];

let biciLeggera = biciclette[0];

for (const bici of biciclette) {
    if (bici.peso < biciLeggera.peso) {
        biciLeggera = bici;
    }
}

const bikeImg = document.getElementById('img_bike');
const bikeName = document.getElementById('img_name');
const bikeWeight = document.getElementById('img_weight');

bikeName.textContent = `${biciLeggera.nome}`;
bikeWeight.textContent = `Peso: ${biciLeggera.peso} kg`;

bikeImg.src = `img/${biciLeggera.img}`;
bikeImg.alt = `${biciLeggera.nome}`;