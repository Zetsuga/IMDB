import {Movie} from "./movie";
import { Professional } from "./professional"

let persona1:Professional  = new Professional("Jose", 41, "hombre", 109, 175, "gris", 
"marron", "latina", true, "español", 2, "actor");

let persona2:Professional  = new Professional("Oliver", 37, "hombre", 114, 162, "castaño", 
"verde", "latina", false, "español", 2, "actor");

let persona3:Professional  = new Professional("Jose", 35, "hombre", 130, 188, "castaño", 
"marron", "latina", false, "español", 15, "actor");

let arrayActor:Professional[] = [persona1,persona2,persona3];


let pelicula1:Movie = new Movie("Las cosas que cayeron solas",2017,"Francesa","Drama");
pelicula1.actors = arrayActor;
pelicula1.director = "Berlanga";
pelicula1.writer = "Shen zumiko";
pelicula1.language = "Albano";
pelicula1.plataform = "youtube";
pelicula1.isMCU = false;
pelicula1.mainCharacterName = "Azoti";
pelicula1.producer ="Berlanga";
pelicula1.distributor = "Canal+";


console.log(pelicula1.toString());
