import Personajes from "./personajes.js";
import Atributos from "./Atributos.js";

class Escudero extends Personajes {
  personajeAlQueSirve;
  gradoDePelotismo;
  constructor(nombre, familia, edad, personajeAlQueSirve, gradoDePelotismo) {
    super(nombre, familia, edad);
    this.personajeAlQueSirve = personajeAlQueSirve;
    this.gradoDePelotismo = gradoDePelotismo;
    let atributosEscudero = new Atributos(
      this.personajeComponente,
      "Personaje al que sirve",
      personajeAlQueSirve
    );
    atributosEscudero = new Atributos(
      this.personajeComponente,
      "Grado de pelotismo",
      gradoDePelotismo
    );
  }

  comunica() {
    return super.comunica() + "Soy un loser";
  }
}

export default Escudero;
