class Professional 
{
    public name:string;
    public age:number;
    public genre:string;
    public weight:number;
    public height:number;
    public hairColor:string
    public eyeColor:string;
    public race:string;
    public isRetired:boolean;
    public nationality:string;
    public oscarsNumber:number;
    public profession:string;

    constructor( name:string , age:number , genre: string , weight: number , height:number , hairColor:string, eyeColor:string , race:string , isRetired:boolean , nationality:string , oscarsNumber:number , profession:string)
    {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight
        this.height = height
        this.hairColor = hairColor
        this.eyeColor = eyeColor
        this.race = race
        this.isRetired = isRetired
        this.nationality = nationality
        this.oscarsNumber = oscarsNumber
        this.profession = profession
    }

    toString()
    {
        return "Nombre: "+ this.name + "\n" +
                "Edad: " + this.age + "\n" +
                "Genero: " + this.genre + "\n" +
                "Peso:" + this.weight + "\n" +
                "Altura:" + this.height + "\n`"+
                "Color de pelo: " + this.hairColor + "\n" +
                "Color de ojos: " + this.eyeColor + "\n" +
                "Raza: " + this.race + "\n" +
                "¿Está retirado?: " + this.isRetired + "\n" +
                "Nacionalidad: " + this.nationality + "\n" +
                "Número de Oscars: " + this.oscarsNumber + "\n" +
                "Profesión: " + this.profession + "\n" 
    }
}

export {Professional}