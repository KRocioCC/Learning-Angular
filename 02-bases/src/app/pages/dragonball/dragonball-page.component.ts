import { Component, computed, signal } from '@angular/core';
// import { NgClass } from "@angular/common";

interface Character {
  id:number;
  name: string;
  power: number;
}
@Component({
  templateUrl: './dragonball-page.component.html',
  // imports: [NgClass],
})
export class DragonballPageComponent {

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9001},
    // {id: 2, name: 'Vegeta', power: 8000},
    // {id: 3, name: 'Gohan', power: 3000},
  ]);

  powerClasses = computed(() => {
    return {
      'text-danger': true,
    }
  });

  addCharacter(): void {
    if( this.power() <= 0 || !this.name() || !this.name() ){
      return;
    }
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    }
    //queremos actualizar el valor de la señal
    this.characters.update((list) => [...list, newCharacter]);
    this.resetFields();
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }
}
