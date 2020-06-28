import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root' //esta sentencia es una forma automatica de importar servicios
})
export class SpotifyService {

  constructor(private httpclient:HttpClient) { }
  
  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAsOb_T6x0AMRjwRxckan9MoX75WlwP_GtoUDyIKT2iNLXKv1oeig6jmQ6-9thdGtrq0OIrlUFb9BMjGcA'
    });
    return this.httpclient.get(url,{headers});
  }

  getNewReleases(){
    return this.getQuery('https://api.spotify.com/v1/browse/new-releases?limit=20');
    return this.httpclient.get('https://api.spotify.com/v1/browse/new-releases',{headers})
                          .pipe(map((data)=>{
                            return data['albums'].items;
                          }));
  }
  getArtista(termino:string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAsOb_T6x0AMRjwRxckan9MoX75WlwP_GtoUDyIKT2iNLXKv1oeig6jmQ6-9thdGtrq0OIrlUFb9BMjGcA'
    });
    return this.httpclient.get(`https://api.spotify.com/v1/search?query=${termino}&type=artist&offset=5&limit=10`,{headers})
                          .pipe(map(data=>data['artists'].items));

  }


}
