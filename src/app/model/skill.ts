export class Skill {
    id: Number;
    nombre: String;
    imagen: String;
    porcentaje: Number;

    constructor(
                nombre: String,
                imagen: String,
                porcentaje: Number
               ) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.porcentaje = porcentaje;
    }
}
