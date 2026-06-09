import { Component, signal } from '@angular/core';
import { CharacterList } from "../components/dragonball/character-list/character-list";
import { CharacterAdd } from "../components/dragonball/character-add/character-add";

interface Character {
  id:number;
  name: string;
  power: number;
}
@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterList, CharacterAdd],
})
export class DragonballSuperPageComponent {

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    {id: 2, name: 'Vegeta', power: 8000},
    {id: 3, name: 'Gohan', power: 3000},
  ]);


  addCharacter(character: Character) {
    this.characters.update(
      (list) => [...list, character]
    );

  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }
}
