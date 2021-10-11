import Personajes from "./personajes.js";

class Luchador extends Personajes {
  armaQueUsa;
  destreza;

  constructor(nombre, familia, edad, armaQueUsa, destreza) {
    super(nombre, familia, edad);
    this.armaQueUsa = armaQueUsa;
    this.destreza = destreza;
  }

  comunica() {
    return super.comunica() + "Primero pego y luego pregunto";
  }
}

export default Luchador;
