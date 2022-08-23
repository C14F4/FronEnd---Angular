export class Proyecto {
    id: Number;
    nombre: String;
    descripcion: String;
    imagen: String;
    linkGit: String;
    linkDemo: String;

    constructor(
                nombre: String,
                descripcion: String,
                imagen: String,
                linkGit: String,
                linkDemo: String
               ) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.linkGit = linkGit;
        this.linkDemo = linkDemo;
    }
}
