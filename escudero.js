import Personajes from "./personajes.js";

class Escudero extends Personajes {
  personajeAlQueSirve;
  gradoDePelotismo;
  constructor(nombre, familia, edad, personajeAlQueSirve, gradoDePelotismo) {
    super(nombre, familia, edad);
    this.personajeAlQueSirve = personajeAlQueSirve;
    this.gradoDePelotismo = gradoDePelotismo;
  }

  comunica() {
    return super.comunica() + "Soy un loser";
  }
}

export default Escudero;
