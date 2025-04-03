import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Character } from '../models/character';
import { NgIf } from '@angular/common';
import { FetchAPIService } from '../service/fetch-api.service';

@Component({
  selector: 'app-character-filter',
  imports: [NgIf, FormsModule],
  templateUrl: './character-filter.component.html',
  styleUrl: './character-filter.component.css'
})
export class CharacterFilterComponent {
  public characters : Character[] = [];
  houseFilter: string = '';

  constructor(private fetchAPIService: FetchAPIService){ }

  applyFilter(){
    if(this.houseFilter){
      this.fetchAPIService.getCharactersByHouse(this.houseFilter).subscribe(
        {
          next: (response: any) => {
            console.log(response);
            this.characters = response;
          },
          error: (error: any) => {
            console.error(`There was an error: ${error}`)
          },
        }
      )
    }
  }

}
