'use strict';

//Descomentar para ver formulario
/* const form = document.querySelector('.js-new-form');

form.classList.remove("collapsed"); */

const sectionList = document.querySelector(".js-list");

const kittenImage1 = 'https://dev.adalab.es/gato-siames.webp';
const kittenName1 = 'Anastacio';
const kittenDesc1 =
  ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenRace1 = 'Siamés';

const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
  <h3 class="card_title">Anastacio</h3>
  <h4 class="card_race">Siamés</h4>
  <p class="card_description">
            Porte elegante, su patrón de color tan característico y sus ojos
            de un azul intenso, pero su historia se remonta a Asía al menos
            hace 500 años, donde tuvo su origen muy posiblemente.
   </p>
</article>
</li>`;


const kittenTwo = `<li class="card">
    <img class="card_img" src ="https://dev.adalab.es/sphynx-gato.webp" alt = "sphynx-cat" />
    <h3 class="card_title">Fiona</h3>
    <h4 class="card_race">Sphynx</h4>
    <p class="card_description">
        Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
        hasta con pinta de alienígena han llegado a definir a esta raza
        gatuna que se caracteriza por la «ausencia» de pelo.
    </p>
</li > `;

const kittenThree = `<li class="card">
<article>
<img class="card_img" src="https://dev.adalab.es/maine-coon-cat.webp" alt="maine-coon-cat" />
<h3 class="card_title">Cielo</h3>
<h4 class="card_race">Maine Coon</h4>
<p class="card_description">
  Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
  bella mirada se ha convertido en una de sus señas de identidad.
  Sus ojos son grandes y las orejas resultan largas y en punta.
</p>
</article>
</li>`;

sectionList.innerHTML = kittenOne + kittenTwo + kittenThree;

//Ejercicios 2.2

//kittenOne:



const Anastacio = (`${kittenImage1} ${kittenName1} ${kittenDesc1} ${kittenRace1}`);

//KittenTwo:

const kittenImage2 = "https://dev.adalab.es/sphynx-gato.webp";
const kittenName2 = 'Fiona';
const kittenDesc2 =  'Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';
const kittenRace2 = 'Sphynx';

const Fiona = (`${kittenImage2} ${kittenName2} ${kittenDesc2} ${kittenRace2}`);

//kittenThree:

const kittenImage3 = "https://dev.adalab.es/maine-coon-cat.webp";
const kittenName3 = 'Cielo';
const kittenDesc3 = 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';
const kittenRace3 = 'Maine Coon';


const Cielo = (`${kittenImage3} ${kittenName3} ${kittenDesc3} ${kittenRace3}`);