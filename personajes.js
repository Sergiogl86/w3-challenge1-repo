class Personajes {
  nombre;
  familia;
  edad;
  estado;
  serie = "Juego de Tronos";
  constructor(nombre, familia, edad) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.estado = "vivo";
  }
  morir() {
    this.estado = "muerto";
  }
  comunica() {
    return `Soy ${this.nombre}: `;
  }
}

export default Personajes;
