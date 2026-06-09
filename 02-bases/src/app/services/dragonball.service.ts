import { Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/characters.interface';


//el Injectable convierte mi clase en un servicio
@Injectable({
  providedIn: 'root'
})
//aca sera el lugar centralizado de la data de la app,
// el servicio se encargara de manejar toda la logica
//  relacionada con los personajes y su poder
export class DragonballService {

    characters = signal<Character[]>([
    {id: 2, name: 'Vegeta', power: 8000},
    {id: 3, name: 'Gohan', power: 3000},
  ]);


  addCharacter(character: Character) {
    this.characters.update(
      (list) => [...list, character]
    );

  }

}
