export interface Passenger {
    name: string;
    children?: string[];

}
const pasenger1: Passenger = {
    name: 'Fernando',
}
const pasenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia', 'Gabriel'],
}
const returnprintChildren = (passenger: Passenger): number => {
    // const howManyChildren = passenger.children?.length || 0;
    const howManyChildren = passenger.children?.length || 0;
    console.log(passenger.name,howManyChildren);
    return howManyChildren;
}
//este pasajero tiene hijos
returnprintChildren(pasenger2);