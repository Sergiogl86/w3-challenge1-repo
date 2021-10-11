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

const joffreyBaratheon = new Rey("Joffrey Baratheon");
const jaimeLannister = new Luchador("Jaime Lannister");
const daenerysTargaryen = new Luchador("Daenerys Targaryen");
const tyrionLannister = new Asesor(
  "Tyrion Lannister",
  "vacio",
  "vacio",
  "vacio",
  "Daenerys"
);
const bronn = new Escudero("Bronn", "vacio", "vacio", "vacio", "Jaime");

const listaPersonajes = [
  joffreyBaratheon,
  jaimeLannister,
  daenerysTargaryen,
  tyrionLannister,
  bronn,
];

console.log(listaPersonajes);

const comunicados = listaPersonajes
  .filter((listaPersonajes) => listaPersonajes instanceof Luchador)
  .map((listaPersonajes) => listaPersonajes.comunica());

console.log(comunicados);

for (let i = 0; i < listaPersonajes.length; i++) {
  console.log(listaPersonajes[i].comunica());
}

jaimeLannister.morir();
tyrionLannister.morir();

console.log(listaPersonajes);
