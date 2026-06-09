import { Component, Input, output, signal, WritableSignal } from '@angular/core';
import { Character } from '../../../../interfaces/characters.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.html',
})
export class CharacterAdd {
  name = signal('');
  power = signal(0);


  //evento que se dispara al agregar un nuevo personaje
  //el componente padre se suscribe a este evento para recibir el nuevo personaje
  newCharacter = output<Character>();

  addCharacter(): void {
    if( this.power() <= 0 || !this.name() || !this.name() ){
      return;
    }
    const newCharacter: Character = {
      id: Math.floor(Math.random() * 10000),
      name: this.name(),
      power: this.power(),
    }
    //queremos actualizar el valor de la señal
    // this.characters.update((list) => [...list, newCharacter]);

    //emitimos el nuevo personaje al componente padre
    this.newCharacter.emit(newCharacter);
    this.resetFields();
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }
}
