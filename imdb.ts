import { Movie } from "./movie";

export class Imdb{
    
    public peliculas:Movie[];
    
    public constructor(peliculas:Movie[]){
        this.peliculas = peliculas;
    }

}