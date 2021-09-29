import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Child_class } from './models/child_class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';
  hijo!: Child_class;

  poke: any;
  constructor(private http: HttpClient) {
    this.hijo = new Child_class(http);
    this.getMyPoke()
  }

  async getMyPoke(){
    let pokes = await this.hijo.bringPokes();
    
    this.getPokeByName("pidgeotto", pokes.results)
  }

  getPokeByName(name: string, pokes: any[]){
    let poke = pokes.find(p => p.name === name);
    this.poke = poke;
    console.log(poke);
  }


}
