import Personajes from "./personajes.js";
import Atributos from "./Atributos.js";

class Luchador extends Personajes {
  armaQueUsa;
  destreza;

  constructor(nombre, familia, edad, armaQueUsa, destreza) {
    super(nombre, familia, edad);
    this.armaQueUsa = armaQueUsa;
    this.destreza = destreza;
    let atributosLuchador = new Atributos(
      this.personajeComponente,
      "Arma que usa",
      armaQueUsa
    );
    atributosLuchador = new Atributos(
      this.personajeComponente,
      "Destreza ",
      destreza
    );
  }

  comunica() {
    return super.comunica() + "Primero pego y luego pregunto";
  }
}

export default Luchador;
