import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/characters.interface';

function loadFromLocalStorage(): Character[] {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];

}

//el Injectable convierte mi clase en un servicio
@Injectable({
  providedIn: 'root'
})
//aca sera el lugar centralizado de la data de la app,
// el servicio se encargara de manejar toda la logica
//  relacionada con los personajes y su poder
export class DragonballService {

  characters = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  addCharacter(character: Character) {
    this.characters.update(
      (list) => [...list, character]
    );

  }

}
