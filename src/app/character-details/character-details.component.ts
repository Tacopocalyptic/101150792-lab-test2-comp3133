import { Component } from '@angular/core';
import { Character } from '../models/character';
import { FetchAPIService } from '../service/fetch-api.service';
import { NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-details',
  imports: [NgIf],
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.css'
})
export class CharacterDetailsComponent {
  id: string | null = null
  character : Character | null = null;

  constructor(private fetchAPIService:  FetchAPIService, private route: ActivatedRoute){}

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id')
    console.log(this.id)
    if(this.id){
      this.fetchAPIService.getCharacter(this.id).subscribe(
        {
          next: (response: any) => {
            // console.log(response);
            this.character = response[0];
          },
          error: (error: any) => {
            console.error(`There was an error: ${error}`)
          },
        }
      )
    }
  }
}
