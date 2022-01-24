import { Movie } from "./movie";
import { Professional } from "./professional";

export class Imdb{
    
    public fs = require('fs');
    public peliculas:Movie[];
    
    public constructor(peliculas:Movie[]){
        this.peliculas = peliculas;
    }
    public escribirEnFicheroJson(archivo:string):void{
        this.fs.writeFileSync(archivo,JSON.stringify(this.peliculas));
    }
    
    public obtenerInstanciaIMDB(archivo:string):Imdb{
        
        let rawdata = this.fs.readFileSync(archivo, 'utf8');
        let tempIMDB = JSON.parse(rawdata);
    
        let actor:Professional;
        let pelicula:Movie;
        let imdb2:Imdb;
        let arrayActor =[];
        let arrayPeliculas = [];
    
        for(let index in tempIMDB.peliculas){
            for(let indice in tempIMDB.peliculas[index].actors){
                let temp = tempIMDB.peliculas[index].actors[indice];
                actor = new Professional(temp.name,temp.age,temp.genre,temp.weight,temp.height,
                    temp.hairColor,temp.eyeColor,temp.race,temp.isRetired,temp.nationality,
                    temp.oscarsNumber,temp.professions);
                
                arrayActor.push(actor);
            }
            
            pelicula = new Movie(tempIMDB.peliculas[index].title,tempIMDB.peliculas[index].releaseYear,
                tempIMDB.peliculas[index].nacionality,tempIMDB.peliculas[index].genre);
            pelicula.actors = arrayActor;
            pelicula.director = tempIMDB.peliculas[index].director;
            pelicula.writer = tempIMDB.peliculas[index].writer;
            pelicula.language = tempIMDB.peliculas[index].language;
            pelicula.plataform = tempIMDB.peliculas[index].plataform;
            pelicula.isMCU = tempIMDB.peliculas[index].isMCU;
            pelicula.mainCharacterName = tempIMDB.peliculas[index].mainCharacterName;
            pelicula.producer = tempIMDB.peliculas[index].producer;
            pelicula.distributor = tempIMDB.peliculas[index].distributor;
            arrayPeliculas.push(pelicula);
        }
        imdb2 = new Imdb(arrayPeliculas);
        return imdb2;
    }
    
}