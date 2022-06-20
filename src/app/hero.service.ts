import { Injectable } from '@angular/core';
 
 // rxjs
import { Observable, of } from 'rxjs';

// HERO imports
import { Hero } from './hero';
import { HEROES } from './mock-heroes'; 

// Services
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;  
  }
  
}
