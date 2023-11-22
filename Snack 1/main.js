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

const { nome, peso, img } = biciLeggera;

const cardBody = document.querySelector('.card-body');

const template = `
  <h4 id="img_name" class="card-title">${nome}</h4>
  <p id="img_weight" class="card-text">Peso: ${peso} kg</p>
`;

cardBody.innerHTML = template;

const bikeImg = document.getElementById('img_bike');
bikeImg.src = `img/${img}`;
bikeImg.alt = nome;