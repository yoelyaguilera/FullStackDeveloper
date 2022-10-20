import { Component, OnInit } from '@angular/core';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Pokeapi Angular';
  nextPage:string  = "";
  prevPage:string  = "";
  pokemons: any [] = [];
  constructor(private pokemonService:PokemonService){}
  ngOnInit(){
    this.getPokemon()
  }
  changeTitle(){
    this.title = "Pokeapi Cambiado"
  }
  getPrevPage(){
    if(this.prevPage!=""){
      this.getPokemon(this.prevPage)
    }else{
      console.log("no hay pagina anterior");
    }
  }
  getPokemon(url:string = "https://pokeapi.co/api/v2/pokemon/"){
    this.pokemonService.getPokemonPage(url).subscribe((page:any)=>{
      console.log({page})
      this.nextPage = page.next?page.next: "";
      this.prevPage = page.previous?page.previus: "";
      this.pokemons = page.results;
    })
  }
  getNextPage(){
    this.getPokemon(this.nextPage)
  }
}

// ng generate service services/pokemon
// ng generate component pages/pokemon-detail
// npm install bootstrap jquery @popperjs/core