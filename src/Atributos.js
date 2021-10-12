import Personajes from "./personajes.js";

class Atributos {
  personajeAtributos;
  constructor(personajeComponente, nombreAtributo, valorAtributo) {
    this.personajeAtributos = personajeComponente;
    debugger;
    this.crearAtributos(nombreAtributo, valorAtributo);
  }
  crearAtributos(nombreAtributo, valorAtributo) {
    const posicionAtributos = this.personajeAtributos
      .querySelector(".character__overlay")
      .querySelector(".list-unstyled");
    const atributos = document.createElement("li");
    atributos.innerHTML = `${nombreAtributo}: ${valorAtributo}`;
    posicionAtributos.append(atributos);
  }
}

export default Atributos;
