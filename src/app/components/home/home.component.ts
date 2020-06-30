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
  error:boolean = false;
  errormessage:string = '';

  constructor(private httpclient:HttpClient,private spotify:SpotifyService) { 
    this.loading = true;
    this.error = false;
    this.httpclient.get('https://restcountries.eu/rest/v2/lang/es')
                   .subscribe((resp:any)=>{
      this.paises = resp;
                   });
      this.spotify.getNewReleases()
                  .subscribe((data:any)=>{
                    this.nuevasCanciones = data;
                    this.loading = false;
                  },(errorservicio)=>{
                    this.error = true;
                    this.loading = false;
                    this.errormessage = errorservicio.error.error.message;
                    console.log(errorservicio);
                  })
  }

  ngOnInit(): void {
  }

}
