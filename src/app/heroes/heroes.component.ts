import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

// Variables
import { HEROES } from '../mock-heroes';
 
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  heroes = HEROES;
  selectedHero?: Hero;
  
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
