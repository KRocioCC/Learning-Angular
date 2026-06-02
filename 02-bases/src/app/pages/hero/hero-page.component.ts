import { Component, signal } from "@angular/core";


@Component({
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.css']
})

export class HeroPageComponent{

  //son señales
  name = signal('Ironman')
  age = signal(45);

  getHeroDescription() {
    return `${this.name} - ${this.age} años`
  }

  changeHero(): void {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  changeAge(): void {
    this.age.set(70);
  }

  resetForm(): void {
    this.name.set('Ironman');
    this.age.set(45);
  }



}
