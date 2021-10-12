import Personajes from "./personajes.js";
import Atributos from "./Atributos.js";

class Asesor extends Personajes {
  constructor(nombre, familia, edad, personajeAlQueAsesora) {
    super(nombre, familia, edad);
    this.personajeAlQueAsesora = personajeAlQueAsesora;
    let atributosAsesor = new Atributos(
      this.personajeComponente,
      "Personaje al que asesora",
      personajeAlQueAsesora
    );
  }

  comunica() {
    return super.comunica() + "No sé por qué, pero creo que voy a morir pronto";
  }
}

export default Asesor;
