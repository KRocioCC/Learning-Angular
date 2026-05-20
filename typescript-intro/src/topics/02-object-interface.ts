// Objetos en TypeScript

//arreglo de srings
const skills: string[] = ['Bash', 'Counter', 'Healing'];


//las interfaces nos ayudan a definir la forma de un objeto, es decir, que propiedades tiene y de que tipo son
// son para tipar objetos
interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown ?: string;  //opcional, undefined o string
}

//objeto que cumple con la interfaz Character
const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter', 'Healing'],
    hometown: 'Windfall Island'
}

strider.hometown = 'Windfall Island';

console.table(strider);
export {};