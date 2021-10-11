import Rey from "./rey.js";
import Asesor from "./asesor.js";
import Escudero from "./escudero.js";
import Luchador from "./luchador.js";

/*
2. Una vez hecha toda la estructura, crea a Joffrey Baratheon (rey), Jaime Lannister (luchador), a Daenerys Targaryen (luchadora), a Tyrion Lannister (asesor de Daenerys) y a Bronn (escudero de Jaime).
3. Crea un array con todos los personajes.
4. Haz una función que tenga como entrada dicho array y devuelva un array con los mensajes que comunican los luchadores.
5. Imprime por consola el nombre de la serie a la que pertenecen los personajes.
6. Recorre el array de mensajes e imprímelos por consola.
7. Mata a Jaime y a Tyrion y comprueba que están muertos.

*/

let itm = document.getElementsByClassName("character col");
itm[0].style.display = "none";

const joffreyBaratheon = new Rey("Joffrey", "Lannister", 14, 1);
const jaimeLannister = new Luchador("Jaime", "Lannister", 43, "Espada", 10);
const daenerysTargaryen = new Luchador(
  "Daenerys",
  "Targaryen",
  17,
  "Dragones",
  10
);
const tyrionLannister = new Asesor("Tyrion", "Lannister", 39, "Daenerys");
const bronn = new Escudero("Bronn", "Ninguna", "40", "Jaime Lannister", "10");

/*let itm = document.getElementsByClassName("character col");

let cln = itm[0].cloneNode(true);

const bloqueFichas = document.getElementsByClassName(
  "characters-list row list-unstyled"
);
bloqueFichas[0].appendChild(cln);*/

/*document
  .getElementsByClassName("characters-list row list-unstyled")
  .appendChild(cln);*/

/*const jaimeLannister = new Luchador(
  "Jaime Lannister",
  "Lannister",
  43,
  "Espada",
  10
);
const daenerysTargaryen = new Luchador(
  "Daenerys Targaryen",
  "Targaryen",
  17,
  "Dragones",
  10
);
const tyrionLannister = new Asesor(
  "Tyrion Lannister",
  "Lannister",
  39,
  "Daenerys"
);
const bronn = new Escudero("Bronn", "Ninguna", "40", "Jaime Lannister", "10");

const listaPersonajes = [
  joffreyBaratheon,
  jaimeLannister,
  daenerysTargaryen,
  tyrionLannister,
  bronn,
];

console.log(listaPersonajes);*/
