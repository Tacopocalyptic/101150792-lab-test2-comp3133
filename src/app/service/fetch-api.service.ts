import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchAPIService {
  private API_BASE_URL = "https://hp-api.onrender.com/api"

  constructor(private httpClient : HttpClient) { }

  public getCharacters(): Observable<any> {
    return this.httpClient.get(this.API_BASE_URL+"/characters")
  }
  
  public getCharactersByHouse(house: string): Observable<any> {
    return this.httpClient.get(this.API_BASE_URL+`/characters/house/${house}`)
  }

  public getCharacter(id: string): Observable<any> {
    return this.httpClient.get(this.API_BASE_URL+`/character/${id}`)
  }
}
