interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

//
interface TaxCalculationOptions { 
    tax: number;
    products: Product[];
}


//funcion para calcular el impuesto de los productos
//sin desestructurar
// function taxCalculation({options}: {options: TaxCalculationOptions}): number[] {
//     let total = 0;
//     options.products.forEach(product => {
//         total += product.price;
//     })
//     return [total, total * options.tax];
//}

//con desestructuración
//function taxCalculation({tax, products}: TaxCalculationOptions): number[] {
function taxCalculation(options: TaxCalculationOptions): [number, number] {
    const {tax, products} = options;

    let total = 0;
    products.forEach(({price}) => {
        total += price;
    })
    return [total, total * tax];
}



//carrito que compra un telefono y una tablet
const shoppingCart = [phone, tablet];
const tax = 0.15;



// SIN DESESTRUCTURAR
// const result = taxCalculation({
//     options: {
//         products: shoppingCart,
//         tax,
//     }
// });
// console.log('Total:', result[0]);
// console.log('Tax:', result[1]);

//DESESTRUCTURANDO
const [total, taxAmount] = taxCalculation({
        products: shoppingCart,
        tax,
});
console.log('Total:', total);
console.log('Tax:', taxAmount);



export {};