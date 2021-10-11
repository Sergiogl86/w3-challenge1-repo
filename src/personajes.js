class Personajes {
  nombre;
  familia;
  edad;
  estado;
  serie = "Juego de Tronos";
  foto = "url";
  constructor(nombre, familia, edad) {
    this.crearFicha();
    this.nombre = nombre;
    const characterName = document.getElementsByClassName("character__name");
    this.familia = familia;
    characterName[0].innerHTML = nombre + " " + familia;
    this.edad = edad;
    const edadPersonaje = document
      .getElementsByClassName("character__info")[0]
      .getElementsByClassName("list-unstyled")[0]
      .getElementsByTagName("li");
    edadPersonaje[0].innerHTML = `Edad: ${edad} años`;
    this.estado = "vivo";
    const estaVivo = document.getElementsByClassName("fa-thumbs-down");
    estaVivo[0].style.display = "none";
    const establecerImagen = document
      .getElementsByClassName("card character__card")[0]
      .getElementsByTagName("img")[0];
    establecerImagen.src = `img/${nombre.toLowerCase()}.jpg`;
  }
  morir() {
    this.estado = "muerto";
  }
  comunica() {
    return `Soy ${this.nombre}: `;
  }
  crearFicha() {
    let itm = document.getElementsByClassName("character col");

    let cln = itm[0].cloneNode(true);

    const bloqueFichas = document.getElementsByClassName(
      "characters-list row list-unstyled"
    );
    bloqueFichas[0].appendChild(cln);
    itm = document.getElementsByClassName("character col");
    itm[0].style.display = "flex";
  }
}

export default Personajes;
