import Personajes from "./personajes.js";
import Atributos from "./Atributos.js";

class Rey extends Personajes {
  anosDeDeinado;
  constructor(nombre, familia, edad, anosDeDeinado) {
    super(nombre, familia, edad);
    this.anosDeDeinado = anosDeDeinado;
    let atributosRey = new Atributos(
      this.personajeComponente,
      "Años de reinado",
      anosDeDeinado
    );
    const botonComunica = this.personajeComponente.getElementsByClassName(
      "character__action btn"
    );

    botonComunica[0].addEventListener("click", () => this.comunica());
  }

  comunica() {
    //return super.comunica() + "Vais a morir todos";
    //return super.comunica() + "Vais a morir todos";
    const comunicado = document.querySelector(".comunications");
    comunicado.className += " on";
    const comunicadoFrase = comunicado.querySelector(".comunications__text");
    comunicadoFrase.innerHTML = `${super.comunica() + "Vais a morir todos"}`;
    const establecerImagen = comunicado.getElementsByTagName("img")[0];
    establecerImagen.src = `img/${this.nombre.toLowerCase()}.jpg`;
    const desaparece = setTimeout(() => {
      const timer = document.querySelector(".comunications");
      timer.className = "comunications";
    }, 2000);
  }
}

export default Rey;
