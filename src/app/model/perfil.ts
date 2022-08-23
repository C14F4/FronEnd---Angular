export class Perfil {
    id: Number;
    nombre: String;
    profesion: String;
    lugar: String;
    fotoBanner: String;
    fotoPerfil: String;
    acercaDe: String;
    redFb: String; 
    redTw: String; 
    redIg: String; 
    redGit : String;
    

    constructor(id: Number,
                nombre: String,
                profesion: String,
                lugar: String,
                fotoBanner: String,
                fotoPerfil: String,
                acercaDe: String,
                redFb: String,
                redTw: String,
                redIg: String,
                redGit : String) {
        this.nombre = nombre;
        this.profesion = profesion;
        this.lugar = lugar;
        this.fotoBanner = fotoBanner;
        this.fotoPerfil = fotoPerfil;
        this.acercaDe = acercaDe;
        this.redFb = redFb;
        this.redTw = redTw;
        this.redIg = redIg;
        this.redGit = redGit;
    }
    
}