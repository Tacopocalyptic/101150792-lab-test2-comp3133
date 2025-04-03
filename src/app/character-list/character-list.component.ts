import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FetchAPIService } from '../service/fetch-api.service';
import { Character } from '../models/character';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-character-list',
  imports: [NgIf, MatCardModule],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent {
  public characters : Character[] = [];

  constructor(private fetchAPIService: FetchAPIService) { }

  ngOnInit(){
    this.getCharacters();
  }

  getCharacters(){
    this.fetchAPIService.getCharacters().subscribe(
      {
        next: (response: any) => {
          // console.log(response);
          this.characters = response;
        },
        error: (error: any) => {
          console.error(`There was an error: ${error}`)
        },
      }
    )
  }
}
