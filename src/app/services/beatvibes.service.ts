import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISongModel } from 'models/songmodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeatvibesService {
  private url : string = "http://localhost/beat-vibes/";
  constructor(private http : HttpClient) { } 

  getAllSong() : Observable<ISongModel[]>{
    const httpHeader = {
      headers : new HttpHeaders()
      .set('Content-Type','application/json')
    } 

    return this.http.get<ISongModel[]>(this.url+'api/retrieve.php', httpHeader);
  }
}
