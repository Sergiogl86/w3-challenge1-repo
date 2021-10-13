class Personajes {
  nombre;
  familia;
  edad;
  estado;
  numeroPersonaje;
  serie = "Juego de Tronos";
  foto = "url";
  personajeComponente;
  constructor(nombre, familia, edad) {
    this.crearFicha();
    this.nombre = nombre;
    const characterName =
      this.personajeComponente.getElementsByClassName("character__name");
    this.familia = familia;
    characterName[0].innerHTML = nombre + " " + familia;
    this.edad = edad;
    const edadPersonaje = this.personajeComponente
      .getElementsByClassName("character__info")[0]
      .getElementsByClassName("list-unstyled")[0]
      .getElementsByTagName("li");
    edadPersonaje[0].innerHTML = `Edad: ${this.edad} años`;
    this.estado = "vivo";
    const estaVivo =
      this.personajeComponente.getElementsByClassName("fa-thumbs-down");
    estaVivo[0].style.display = "none";
    const establecerImagen = this.personajeComponente
      .getElementsByClassName("card character__card")[0]
      .getElementsByTagName("img")[0];
    establecerImagen.src = `img/${nombre.toLowerCase()}.jpg`;
    const posicionPersonaje =
      this.personajeComponente.getElementsByClassName("character col").length;
    this.numeroPersonaje = posicionPersonaje;
    const botonMuere = this.personajeComponente.getElementsByClassName(
      "character__action btn"
    );

    botonMuere[1].addEventListener("click", () => this.morir());
  }
  morir() {
    const cambioVida = () => (this.estado = "muerto");
    cambioVida();
    const estaMuerto =
      this.personajeComponente.querySelector(".fa-thumbs-down");
    estaMuerto.style.display = "inline-block";
    const estaVivo = this.personajeComponente.querySelector(".fa-thumbs-up");
    estaVivo.style.display = "none";
    const estaMuertoFoto = this.personajeComponente
      .getElementsByClassName("card character__card")[0]
      .getElementsByTagName("img")[0];
    estaMuertoFoto.style.transform = "rotate(180deg)";
  }
  comunica() {
    return `Soy ${this.nombre}: `;
  }
  crearFicha() {
    let ficha = document.createElement("li");
    ficha.className += "character col";
    ficha.innerHTML = `<div class="card character__card">
            <img
              src="img/no-one.jpg"
              alt="Nombre y familia del personaje"
              class="character__picture card-img-top"
            />
            <div class="card-body">
              <h2 class="character__name card-title h4">Nombre y familia</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: X años</li>
                  <li>
                    Estado:
                    <i class="fas fa-thumbs-down"></i>
                    <i class="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                  
                </ul>
                <div class="character__actions">
                  <button class="character__action btn">habla</button>
                  <button class="character__action btn">muere</button>
                </div>
              </div>
            </div>
            <i class="emoji"></i>
          </div>`;
    const bloqueFichas = document.getElementsByClassName(
      "characters-list row list-unstyled"
    );
    this.personajeComponente = ficha;
    bloqueFichas[0].append(ficha);
  }
}

export default Personajes;
