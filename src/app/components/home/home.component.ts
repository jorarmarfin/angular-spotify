import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  paises:any[]=[];
  nuevasCanciones: any[] = [];
  constructor(private httpclient:HttpClient,private spotify:SpotifyService) { 
    this.httpclient.get('https://restcountries.eu/rest/v2/lang/es')
                   .subscribe((resp:any)=>{
      this.paises = resp;
                   });
      this.spotify.getNerReleases()
                  .subscribe((data:any)=>{
                    this.nuevasCanciones = data.albums.items
          
                  })
  }

  ngOnInit(): void {
  }

}
