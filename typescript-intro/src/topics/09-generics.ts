

//funcion para procesar algun tipo de dato
//independiente de si recibe un numero, string, arreglo

// export function whatsMyType(argument: any) : any {
//     return argument;
// }

export function whatsMyType<T>(argument: T): T {
    return argument;
}

const IamString = whatsMyType<string>('hola mundo');
const IamNumber = whatsMyType<number>(123);
const IamArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);

console.log(IamString.split(' '));
console.log(IamNumber.toFixed(2));
console.log(IamArray.length);

