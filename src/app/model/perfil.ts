export class Perfil {
    id: Number;
    nombreApellido: string;
    profesion: string;
    lugar: string;
    fotoBanner: string;
    fotoPerfil: string;
    acercaDe: string;
    redFb: String; 
    redTw: String; 
    redIg: String; 
    redGit : String;
    

    constructor(id: Number,
                nombreApellido: string,
                profesion: string,
                lugar: string,
                fotoBanner: string,
                fotoPerfil: string,
                acercaDe: string,
                redFb: String,
                redTw: String,
                redIg: String,
                redGit : String) {
        this.nombreApellido = nombreApellido;
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