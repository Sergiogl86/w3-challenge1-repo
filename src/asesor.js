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
    const botonComunica = this.personajeComponente.getElementsByClassName(
      "character__action btn"
    );

    botonComunica[0].addEventListener("click", () => this.comunica());
  }

  comunica() {
    const comunicado = document.querySelector(".comunications");
    comunicado.className += " on";
    const comunicadoFrase = comunicado.querySelector(".comunications__text");
    comunicadoFrase.innerHTML = `${
      super.comunica() + "No sé por qué, pero creo que voy a morir pronto"
    }`;
    const establecerImagen = comunicado.getElementsByTagName("img")[0];
    establecerImagen.src = `img/${this.nombre.toLowerCase()}.jpg`;
    const desaparece = setTimeout(() => {
      const timer = document.querySelector(".comunications");
      timer.className = "comunications";
    }, 2000);
  }
}

export default Asesor;
