import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root' //esta sentencia es una forma automatica de importar servicios
})
export class SpotifyService {

  constructor(private httpclient:HttpClient) { }

  getNerReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAsOb_T6x0AMRjwRxckan9MoX75WlwP_GtoUDyIKT2iNLXKv1oeig6jmQ6-9thdGtrq0OIrlUFb9BMjGcA'
    });
    //https://api.spotify.com/v1/browse/new-releases?limit=5
    return this.httpclient.get('https://api.spotify.com/v1/browse/new-releases',{headers});
  }
  getArtista(termino:string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAsOb_T6x0AMRjwRxckan9MoX75WlwP_GtoUDyIKT2iNLXKv1oeig6jmQ6-9thdGtrq0OIrlUFb9BMjGcA'
    });
    return this.httpclient.get(`https://api.spotify.com/v1/search?query=${termino}&type=artist&offset=5&limit=10`,{headers});

  }


}
