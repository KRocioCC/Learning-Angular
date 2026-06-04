import { Component, input } from '@angular/core';
import type { Character } from '../../../../interfaces/characters.interface';

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.html',
})
export class CharacterList {
  //lo que vamos a rcibir es una lista de personajes, por lo tanto el tipo de dato es un arreglo de personajes
  characters = input.required<Character[]>()
  listName = input.required<string>();

}
