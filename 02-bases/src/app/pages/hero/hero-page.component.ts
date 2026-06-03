import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";


@Component({
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.css'],
  imports: [UpperCasePipe],
})

export class HeroPageComponent {

  //Señales mutables
  name = signal('Ironman');
  age = signal(45);

  //Señales computadas, Se actualizan solas
  //cunado name o age cambian, heroDescription se actualiza automaticamente
  heroDescription = computed(() => `${this.name()} - ${this.age()}`);
  capitalizedName = computed(() => this.name().toUpperCase());

  // getHeroDescription() {
  //   return `${this.name} - ${this.age} años`
  // }

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
