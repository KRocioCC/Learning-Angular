//FUNCIONES

//any es un tipo que puede ser cualquier cosa,
// no es tan recomendable usarlo, ya que pierde las ventajas de la tipificación de TypeScript.
function addNumber(a:number,b:number){
    return a + b;
}
const result = addNumber(1,2); 
console.log({result});
export {};

//FUNCIONES DE FLECHA
// las funciones de flecha son una forma más concisa de escribir funciones,
const addNumbersArrow = (a:number,b:number):number => {
    return a + b;
}
const resultArrow = addNumbersArrow(3,4);
console.log({resultArrow});

//FUNCIONES CON PARAMETROS OPCIONALES
// los parámetros opcionales se definen con el signo de interrogación ?, 
// lo que significa que el parámetro puede ser undefined o del tipo especificado.
function multiply(a:number, base:number, b?:number):number{
    return a * base * (b ?? 1);
}
const resultMultiply = multiply(5, 2, 3);
console.log({resultMultiply});


// CURANDO UN PERSONAJE CON FUNCIONES Y INTERFACES

//INTERFAZ PARA EL CHARACTER
interface Character {
    name: string;
    hp: number;
    showHp: () => void; //metodo 
}

//FUNCION PARA CURAR AL PERSONAJE
//curar significa modifica el personaje.
const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

//definimos el personaje
const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida de ${this.name}: ${this.hp}`);
    }
}

strider.showHp();
healCharacter(strider, 10);
strider.showHp();   

export {};