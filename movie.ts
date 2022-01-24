import {Professionals} from "./professionals";

export class Movie{

    private title:string;
    private releaseYear:number;
    private actors:Professionals[];
    private nacionality:string;
    private director: string;
    private writer:string;
    private language:string;
    private plataform:string;
    private isMCU:boolean;
    private mainCharacterName:string;
    private producer:string;
    private distributor:string;
    private genre:string;

    public constructor(title:string,releaseYear:number,nacionality:string,genre:string){
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }

    public toString():string{
        let actores ="";
        for(let actor in this.actors){
            actores += this.actors[actor].toString() + ", ";
        }
        return `Título: ${this.title}\n` +
        `Año publicado: ${this.releaseYear}\n` +
        `Actores: ${actores}\n` +
        `Nacionalidad: ${this.nacionality}\n` +
        `Director: ${this.director}\n` +
        `Guionista: ${this.writer}\n` +
        `Idioma: ${this.language}\n` +
        `Plataforma: ${this.plataform}\n` +
        `¿Es MCU?: ${this.isMCU}\n` +
        `Persoaje principal: ${this.mainCharacterName}\n` +
        `Productor: ${this.producer}\n` +
        `Distribuidor: ${this.distributor}\n` +
        `Genero: ${this.genre}\n`;
    }
}