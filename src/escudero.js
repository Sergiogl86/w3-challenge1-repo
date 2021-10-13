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
    const botonComunica = this.personajeComponente.getElementsByClassName(
      "character__action btn"
    );

    botonComunica[0].addEventListener("click", () => this.comunica());
  }

  comunica() {
    const comunicado = document.querySelector(".comunications");
    comunicado.className += " on";
    const comunicadoFrase = comunicado.querySelector(".comunications__text");
    comunicadoFrase.innerHTML = `${super.comunica() + "Soy un loser"}`;
    const establecerImagen = comunicado.getElementsByTagName("img")[0];
    establecerImagen.src = `img/${this.nombre.toLowerCase()}.jpg`;
    const desaparece = setTimeout(() => {
      const timer = document.querySelector(".comunications");
      timer.className = "comunications";
    }, 2000);
  }
}

export default Escudero;
