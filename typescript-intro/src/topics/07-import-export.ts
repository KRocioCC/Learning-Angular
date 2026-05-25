//para exponer una variable, función 
// o clase a otros archivos, se utiliza la palabra reservada
//  export

import { taxCalculation, type Product } from './06-function-destructuring';

//usamos la interfaz Product que se encuentra en el archivo 06-function-destructuring.ts
const shoppingCart: Product[] = [
    {
        description: 'Nokia A1',
        price: 150
    },
    {
        description: 'iPad Air',
        price: 250.0
    }

];

const [ total, tax ] =  taxCalculation({
    products: shoppingCart,
    tax: 0.15
});

console.log('Total:', total);
console.log('Tax:', tax);
