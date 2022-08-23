export class Experiencia {
    id: Number;
    trabajo: String;
    imagen: String;
    puesto: String;
    fechaInicio: String;
    fechaFinal: String;

    constructor(
                trabajo: String,
                imagen: String,
                puesto: String,
                fechaInicio: String,
                fechaFinal: String
               ) {
        this.trabajo = trabajo;
        this.imagen = imagen;
        this.puesto = puesto;
        this.fechaInicio = fechaInicio;
        this.fechaFinal = fechaFinal;
    }
}
