import Personajes from "./personajes.js";
import Atributos from "./Atributos.js";

class Rey extends Personajes {
  anosDeDeinado;
  constructor(nombre, familia, edad, anosDeDeinado) {
    super(nombre, familia, edad);
    this.anosDeDeinado = anosDeDeinado;
    debugger;
    let atributosRey = new Atributos(
      this.personajeComponente,
      "Años de reinado",
      anosDeDeinado
    );
  }

  comunica() {
    return super.comunica() + "Vais a morir todos";
  }
}

export default Rey;
