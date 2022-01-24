import {Professional} from "./professional";
import {Movie} from "./movie";
import {Imdb} from "./imdb";

let persona1:Professional = new Professional("Julio", 40, "hombre", 70, 175, "castaño", 
"verde", "oriental", false, "español", 0, "actor");

let persona2:Professional  = new Professional("Jose", 41, "hombre", 109, 175, "gris", 
"marron", "latina", true, "español", 2, "actor");

let persona3:Professional  = new Professional("Javi", 30, "hombre", 115, 178, "negro", 
"marron", "latina", false, "español", 0, "actor");

let persona4:Professional  = new Professional("Oliver", 37, "hombre", 114, 162, "castaño", 
"verde", "latina", false, "español", 2, "actor");

let persona5:Professional  = new Professional("Jose", 35, "hombre", 130, 188, "castaño", 
"marron", "latina", false, "español", 15, "actor");

let persona6:Professional  = new Professional("Laura", 25, "mujer", 60, 170, "rosa", 
"gris", "latina", false, "español", 0, "actor");

let arrayActor1:Professional[] = [persona1,persona2,persona3];
let arrayActor2:Professional[] = [persona2,persona5,persona4];
let arrayActor3:Professional[] = [persona4,persona5,persona6];

let pelicula1:Movie = new Movie("Las cosas que cayeron solas",2017,"Francesa","Drama");
pelicula1.actors = arrayActor2;
pelicula1.director = "Berlanga";
pelicula1.writer = "Shen zumiko";
pelicula1.language = "Albano";
pelicula1.plataform = "youtube";
pelicula1.isMCU = false;
pelicula1.mainCharacterName = "Azoti";
pelicula1.producer ="Berlanga";
pelicula1.distributor = "Canal+";

let pelicula2:Movie = new Movie("Wakanda, ¿donde estas?",2020,"Americana","Documental");
pelicula2.actors = arrayActor3;
pelicula2.director = "Chihiro";
pelicula2.writer = "tokomoyo";
pelicula2.language = "Ingles";
pelicula2.plataform = "Disney+";
pelicula2.isMCU = true;
pelicula2.mainCharacterName = "ashata";
pelicula2.producer ="Marvel";
pelicula2.distributor = "Disney";

let pelicula3:Movie = new Movie("El robobo de la jojoya",1990,"Española","Comedia");
pelicula3.actors = arrayActor1;
pelicula3.director = "Jose Albeniz";
pelicula3.writer = "Jose Albeniz";
pelicula3.language = "Español";
pelicula3.plataform = "Tve";
pelicula3.isMCU = false;
pelicula3.mainCharacterName = "Josema Yuste";
pelicula3.producer ="RTVE";
pelicula3.distributor = "RTVE";

let peliculas:Movie[] = [pelicula1,pelicula2,pelicula3];

let imdb:Imdb = new Imdb(peliculas);

console.log(imdb);


