'use strict';

//Descomentar para ver formulario
/* const form = document.querySelector('.js-new-form');

form.classList.remove("collapsed"); */

const sectionList = document.querySelector(".js-list");

//kittenOne
const kittenImage1 = 'https://dev.adalab.es/gato-siames.webp';
const kittenName1 = 'Anastacio';
const kittenDesc1 =
  ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
// const kittenRace1 = 'Siamés';
const kittenRace1 = ''; //Lo hemos dejado '' para que se vea el mensaje de que no se ha especificado la raza.

let html = '';

if (kittenRace1 === "") {
  html = `Uy que despiste, no sabemos su raza`;
} else {
  html = kittenRace1;
}

const kittenOne = `<li class="card">
<article>
  <img
    class="card_img" src=${kittenImage1}
  <h3 class="card_title">${kittenName1}</h3>
  <h4 class="card_race">${html}</h4>
  <p class="card_description">${kittenDesc1}</p>
</article>
</li>`;

//kittenTwo
const kittenImage2 = "https://dev.adalab.es/sphynx-gato.webp";
const kittenName2 = 'Fiona';
const kittenDesc2 =  'Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';
const kittenRace2 = 'Sphynx';

html = ''; //No se pone el let xq ya está definida arriba.

if (kittenRace2 === "") {
  html = `Uy que despiste, no sabemos su raza`;
} else {
  html = kittenRace2;
}

const kittenTwo = `<li class="card">
<article>
  <img
    class="card_img" src=${kittenImage2}
  <h3 class="card_title">${kittenName2}</h3>
  <h4 class="card_race">${html}</h4>
  <p class="card_description">${kittenDesc2}</p>
</article>
</li>`;

//kittenThree
const kittenImage3 = "https://dev.adalab.es/maine-coon-cat.webp";
const kittenName3 = 'Cielo';
const kittenDesc3 = 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';
const kittenRace3 = 'Maine Coon';

html = '';

if (kittenRace3 === "") {
  html = `Uy que despiste, no sabemos su raza`;
} else {
  html = kittenRace3;
}

const kittenThree = `<li class="card">
<article>
  <img
    class="card_img" src=${kittenImage3}
  <h3 class="card_title">${kittenName3}</h3>
  <h4 class="card_race">${html}</h4>
  <p class="card_description">${kittenDesc3}</p>
</article>
</li>`;

// sectionList.innerHTML = kittenOne + kittenTwo + kittenThree;


const input_search_desc = document.querySelector('.js_in_search_desc');
const descrSearchText = input_search_desc.value;

if( kittenDesc1.includes(descrSearchText) ) {
  sectionList.innerHTML += kittenOne;
  } 
if( kittenDesc2.includes(descrSearchText) ) {
sectionList.innerHTML += kittenTwo;
  }
if( kittenDesc3.includes(descrSearchText) ) {
    sectionList.innerHTML += kittenThree;
  }

  //Ejercicio 3:
  // La variable y la comprobación se hacen entre la descipción y la construcción del gato para que ya exista la const kittenrace1/2/3, pero no se  haya construido todavía el kittenOne/Two/Three.

//Ejercicio 2.4 Eventos:

const form = document.querySelector('.js-new-form');
const formLogo = document.querySelector('.js-nav');

formLogo.addEventListener('click', (event)=> {
  if (form.classList.contains('collapsed')) {
    form.classList.remove('collapsed');
  } else {
    form.classList.add('collapsed');
  }
})
