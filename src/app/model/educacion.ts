export class Educacion {
    id: Number;
    instituto: String;
    imagen: String;
    titulo: String;
    fechaInicio: String;
    fechaFinal: String;

    constructor(
                instituto: String,
                imagen: String,
                titulo: String,
                fechaInicio: String,
                fechaFinal: String
               ) {
        this.instituto = instituto;
        this.imagen = imagen;
        this.titulo = titulo;
        this.fechaInicio = fechaInicio;
        this.fechaFinal = fechaFinal;
    }
    
}
