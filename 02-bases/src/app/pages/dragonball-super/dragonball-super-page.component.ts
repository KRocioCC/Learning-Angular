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

  addCharacter(): void {
    if( this.power() <= 0 || !this.name() || !this.name() ){
      return;
    }
    const newCharacter: Character = {
      id: 1000,
      name: this.name(),
      power: this.power(),
    }
    //queremos actualizar el valor de la señal
    // this.characters.update((list) => [...list, newCharacter]);
    console.log({newCharacter});
    this.resetFields();
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }
}
