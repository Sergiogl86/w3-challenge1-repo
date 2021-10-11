import Personajes from "./personajes.js";

class Rey extends Personajes {
  añosDeDeinado;
  constructor(nombre, familia, edad, añosDeDeinado) {
    super(nombre, familia, edad);
    this.añosDeDeinado = añosDeDeinado;
  }

  comunica() {
    return super.comunica() + "Vais a morir todos";
  }
}

export default Rey;
