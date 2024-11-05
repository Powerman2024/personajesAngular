import { Injectable } from '@angular/core';
import { Character } from './interfaces/character-interface';
import { v4 as uuid } from 'uuid';
import { LocalizedString } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public character: Character[] = [{
    id: uuid(),
    name: "Superman",
    power: 50000
  },{
    id: uuid(),
    name:"Spiderman",
    power:45000
  },
{
  id: uuid(),
  name:"Henry",
  power:10000
}];

  addCharacter(character: Character): void {

    const newCharacter: Character = {id: uuid(), ...character};

    this.character.push(newCharacter);

  }

  // onDeleteCharacter( index:number):void {

  //   if (index >= 0 && index < this.character.length){

  //     this.character.splice( index, 1);

  //     }
  //   }

    deleteCharacterById( id: string):void {

      this.character = this.character.filter(character => character.id !== id );
      }
}
