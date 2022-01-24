import {Professional} from "./professional";
import {Movie} from "./movie";
import {Imdb} from "./imdb";

const prompt = require('prompt-sync')();

let title:string = prompt('Título de la pelicula: ');
let releaseYear:number = prompt('Año de publicación: ');
let persona2:Professional  = new Professional("Jose", 41, "hombre", 109, 175, "gris", 
"marron", "latina", true, "español", 2, "actor");
let actors:Professional[] = [persona2];
let nacionality:string = prompt('Nacionalidad: ');
let director: string = prompt('Director: ');
let writer:string = prompt('Escritor: ');
let language:string = prompt('Idioma: ');
let plataform:string = prompt('Plataforma: ');
let isMCU:boolean = prompt('¿Es del MCU?: ');
let mainCharacterName:string = prompt('Personaje Principal: ');
let producer:string = prompt('Productor: ');
let distributor:string = prompt('Distribuidor: ');
let genre:string = prompt('Genero: ');

let pelicula:Movie = new Movie(title,releaseYear,nacionality,genre);
pelicula.actors = actors;
pelicula.director = director;
pelicula.writer = writer;
pelicula.language = language;
pelicula.plataform = plataform;
pelicula.isMCU = isMCU;
pelicula.mainCharacterName = mainCharacterName;
pelicula.producer = producer;
pelicula.distributor = distributor;

let tempIMDB:Imdb = new Imdb([]);
tempIMDB = tempIMDB.obtenerInstanciaIMDB("imdbBBDD.json");

tempIMDB.peliculas.push(pelicula);

tempIMDB.escribirEnFicheroJson("imdbBBDD.json")