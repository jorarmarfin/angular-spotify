import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {
Artistas: any[]=[];
  constructor(private spotify:SpotifyService) { }

  ngOnInit(): void {
  }
  buscar(termino:string){
    this.spotify.getArtista(termino)   
                .subscribe((data:any)=>{
                  this.Artistas = data.artists.items
                });
  }

}
