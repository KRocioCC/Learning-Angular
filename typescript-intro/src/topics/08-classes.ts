// Una clase es un molde para crear objetos con propiedades y métodos.
// COMO UN MOLDE para crear galletas: todas las galletas se hacen con el mismo molde,
// pero cada galleta puede tener chispas diferentes, aunque compartan la misma forma.

export class Person {
    public name: string;
    public address: string;

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }     
}

// COMPOSICION: Hero TIENE UNA Persona dentro
export class Hero {
    public person: Person;
    public alterEgo: string;
    public age: number; 

    constructor(alterEgo: string, age: number, realName: string, address: string, personInstance?: Person) {
        this.alterEgo = alterEgo;
        this.age = age;
        
        if (personInstance) {
            this.person = personInstance;
        } else {
            this.person = new Person(realName, address);
        }
    }
}

// persona normal 
const person = new Person('Peter Parker', 'Queens, NY');

// Un heroe 
const spiderman = new Hero('Spider-Man', 18, 'Peter Parker', 'Queens, NY', person);
console.log(spiderman);


// EJEMPLO USANDO HERENCIA 

// // Aplicando HERENCIA: Hero ES UNA Persona 
// export class HeroInheritance extends Person {
//     public alterEgo: string;
//     public age: number;

//     constructor(alterEgo: string, age: number, realName: string, address: string) {
//         super(realName, address);
//         
//         this.alterEgo = alterEgo;
//         this.age = age;
//     }
// }

// // Creando un hroe con herencia:
// const ironman = new HeroInheritance('Iron Man', 45, 'Tony Stark', 'New York');
// console.log(ironman); 
