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
      super.comunica() + "Primero pego y luego pregunto"
    }`;
    const establecerImagen = comunicado.getElementsByTagName("img")[0];
    establecerImagen.src = `img/${this.nombre.toLowerCase()}.jpg`;
    const desaparece = setTimeout(() => {
      const timer = document.querySelector(".comunications");
      timer.className = "comunications";
    }, 2000);
  }
}

export default Luchador;
