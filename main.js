import { SZEMELYLISTA } from "./adat.js";
import {
  listaKiir,
  listaOsszeallit,
  cardOsszeallit,
  tablazatOsszeallit,
} from "./fuggvenyek.js";

console.log(SZEMELYLISTA);
// console.log(`${SZEMELYLISTA[1].nev}: ${SZEMELYLISTA[1].tel}`);
listaKiir(SZEMELYLISTA);

/* HTML elemek elérése - DOM elérése */
// const LISTAELEM = document.getElementById("lista");
const LISTAELEM = document.querySelector("#lista");
const cardContainer = document.querySelector("#cardContainer");
const tablazat = document.querySelector("#tablazat");
console.log(LISTAELEM);
LISTAELEM.innerHTML = "<h3>Címlista</h3>";

LISTAELEM.innerHTML += listaOsszeallit(SZEMELYLISTA);

cardContainer.innerHTML = cardOsszeallit(SZEMELYLISTA);
tablazat.innerHTML = tablazatOsszeallit(SZEMELYLISTA);
