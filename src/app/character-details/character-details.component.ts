import { Component } from '@angular/core';
import { Character } from '../models/character';
import { FetchAPIService } from '../service/fetch-api.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-character-details',
  imports: [NgIf],
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.css'
})
export class CharacterDetailsComponent {
  id: string | null = null
  character : Character | null = null;

  constructor(private fetchAPIService:  FetchAPIService){}

  ngOnInit(){
    
  }
}
