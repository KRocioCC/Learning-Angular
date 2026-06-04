import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent {
  counter = 10;
  //usamos signal para crear un contador reactivo
  counterSignal = signal(10);

  constructor(){
    setInterval(() => {
      //this.increaseByOne(1);
      //console.log('Tick');
    }, 1000);
  }

  increaseByOne(value: number) {
    this.counter += value;
    this.counterSignal.update((current) => current + value);
  }

  reset() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
