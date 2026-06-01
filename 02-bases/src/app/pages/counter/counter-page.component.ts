import { Component } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent {
  counter = 10;

  increaseByOne(value: number) {
    this.counter += value;
  }

  reset() {
    this.counter = 0;
  }
}
