'use strict';

//Descomentar para ver formulario
/* const form = document.querySelector('.js-new-form');

form.classList.remove("collapsed"); */

const sectionList = document.querySelector(".js-list");

// Ejercicio OBJETOS:


const kittenData_1 = {
  image: 'https://dev.adalab.es/gato-siames.webp',
  name: 'Anastacio',
  desc: 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
  race: 'Siamés',
};

const kittenData_2 = {
  image: 'https://dev.adalab.es/sphynx-gato.webp',
  name: 'Fiona',
  desc: 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.',
  race: 'Sphynx',
};

const kittenData_3 = {
  image: 'https://dev.adalab.es/maine-coon-cat.webp',
  name: 'Cielo',
  desc: ' Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.',
  race: 'Maine Coon',
};

function renderKitten(kittenData) {
  const html = `<li class="card">
  <article>
    <img
      class="card_img" src=${kittenData.image}
    <h3 class="card_title">${kittenData.name}</h3>
    <h4 class="card_race">${kittenData.race}</h4>
    <p class="card_description">${kittenData.desc}</p>
  </article>
</li>`;

  return html;
}

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
const kittenDesc2 = 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';
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

if (kittenDesc1.includes(descrSearchText)) {
  sectionList.innerHTML += kittenOne;
}
if (kittenDesc2.includes(descrSearchText)) {
  sectionList.innerHTML += kittenTwo;
}
if (kittenDesc3.includes(descrSearchText)) {
  sectionList.innerHTML += kittenThree;
}

//2.3 Condicionales:
//2. Listado:
// La variable y la comprobación se hacen entre la descipción y la construccrión del gato para que ya exista la const kittenrace1/2/3, pero no se  haya construido todavía el kittenOne/Two/Three.

//2.4 Eventos:
//1.Formulario: mostrar/ocultar:

// const form = document.querySelector('.js-new-form');
// const formLogo = document.querySelector('.js-nav');

// //creamos la variable formLogo porque es donde queremos que actúe el listener

// formLogo.addEventListener('click', (event) => {
//   if (form.classList.contains('collapsed')) {
//     form.classList.remove('collapsed');
//   } else {
//     form.classList.add('collapsed');
//   }
// })


//2.Formulario: adicionar nuevo gatito:

const btn = document.querySelector(".js-btn-add");

const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputRace = document.querySelector('.js-race')
const labelMessageError = document.querySelector('.js-label-error');

btn.addEventListener('click', addNewKitten);

function addNewKitten(event) {
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueRace = inputRace.value;

  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMessageError.innerHTML = '¡Uy! parece que has olvidado algo';
  } else {
    const kittenNew = `<li class="card">
<article>
  <img
    class="card_img" src=${valuePhoto}
  <h3 class="card_title">${valueName}</h3>
  <h4 class="card_race">${valueRace}</h4>
  <p class="card_description">${valueDesc}</p>
</article>
</li>`;
    sectionList.innerHTML += kittenNew;
  }
}

function renderKitten(url, desc, name, race) {
  const kittenNew = `<li class="card">
  <article>
    <img
      class="card_img" src=${valuePhoto}
    <h3 class="card_title">${valueName}</h3>
    <h4 class="card_race">${valueRace}</h4>
    <p class="card_description">${valueDesc}</p>
  </article>
  </li>`;

  return kittenNew;
}

//3.FORMULARIO: cancelar formulario:

// const cancelBtn = document.querySelector('.js-btn-cancel');

// cancelBtn.addEventListener('click' , (event) =>{
// console.log('es esto?');
// })

//He añadido la class js-btn-cancel

//2.5 Funciones: Ejercicio 1. Formularios: mostrar/ocultar

const newFormElement = document.querySelector('.js-nav')
const form = document.querySelector('.js-new-form');

function showNewCatForm() {
  form.classList.remove('collapsed');
}

function hideNewCatForm() {
  form.classList.add('collapsed');
}

newFormElement.addEventListener('click', handleClickNewCatForm);


function handleClickNewCatForm(event) {
  event.preventDefault();
  console.log('hola');
  if (form.classList.contains('collapsed')) {
    showNewCatForm(); //llama a la función

  } else {
    hideNewCatForm(); //Llama a la función
  }
}


