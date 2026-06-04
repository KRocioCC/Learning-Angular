import { Component, Input, signal, WritableSignal } from '@angular/core';
import { Character } from '../../../../interfaces/characters.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.html',
})
export class CharacterAdd {
  name = signal('');
  power = signal(0);

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
