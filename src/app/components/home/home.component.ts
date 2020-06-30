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
  loading:boolean;

  constructor(private httpclient:HttpClient,private spotify:SpotifyService) { 
    this.loading = true;
    this.httpclient.get('https://restcountries.eu/rest/v2/lang/es')
                   .subscribe((resp:any)=>{
      this.paises = resp;
                   });
      this.spotify.getNewReleases()
                  .subscribe((data:any)=>{
                    this.nuevasCanciones = data;
                    this.loading = false;
                  })
  }

  ngOnInit(): void {
  }

}
