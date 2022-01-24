import {Professional} from "./professional";

export class Movie{

    public title:string;
    public releaseYear:number;
    public actors:Professional[];
    public nacionality:string;
    public director: string;
    public writer:string;
    public language:string;
    public plataform:string;
    public isMCU:boolean;
    public mainCharacterName:string;
    public producer:string;
    public distributor:string;
    public genre:string;

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
        `Personaje principal: ${this.mainCharacterName}\n` +
        `Productor: ${this.producer}\n` +
        `Distribuidor: ${this.distributor}\n` +
        `Genero: ${this.genre}\n`;
    }
}