//DECORADORES: son una funcion 

function classDecorator<T extends { new(...args: any[]): {} }>(
    constructor: T
): T {
    return class extends constructor {
        newProperty = 'new property';
        hello = 'override';
    } as T;
}

@classDecorator
export class SuperClass {
    public myProperty: string = 'Abc123';

    print(){
        console.log('Hola mundo');
    }
}
console.log(SuperClass);

//instancia
const myClass = new SuperClass();
console.log(myClass);
