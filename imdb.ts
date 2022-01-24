import { Movie } from "./movie";

export class Imdb{
    
    public peliculas:Movie[];
    
    public constructor(peliculas:Movie[]){
        this.peliculas = peliculas;
    }

    public escribirEnFicheroJson(archivo:string):void{
        const fs = require('fs');
        fs.writeFileSync(archivo,JSON.stringify(this.peliculas));
    }

    public obtenerInstanciaIMDB(archivo:string){
        let rawdata = fs.readFileSync(archivo, 'utf8');
        let tempIMDB = JSON.parse(rawdata);

        let actor:Professional;
        let pelicula:Movie;
        let imdb2:Imdb;
        let arrayActor =[];

        for(let index in tempIMDB){
            if(index == "mobiles"){
                for(let indice in tempIMDB[index]){
                    let movil = tempLibrary[index][indice];
                    movilTemp = new Mobile(movil.name,movil.model,movil.trademark,
                        movil.sdSize,movil.color,movil.is5G,movil.cameraNumber,movil.price);
                    arrayMobileTemp.push(movilTemp);
                }
            }
            libreriaTemp = new MobileLibrary(tempLibrary[index].name,tempLibrary[index].location,arrayMobileTemp);
        }
    }
}