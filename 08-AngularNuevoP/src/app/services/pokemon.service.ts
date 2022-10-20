import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  constructor (private httpClient:HttpClient) { }

  getPokemonPage(pageUrl:string ){
      return this.httpClient.get(pageUrl);
  }

}
