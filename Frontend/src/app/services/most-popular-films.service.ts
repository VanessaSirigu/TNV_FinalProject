import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MovieApiInterface } from '../models/apiMovie.model';

@Injectable({
  providedIn: 'root'
})

export class MostPopularFilmsService {

  private baseURL = 'https://api.themoviedb.org/3/movie/'
  private apiKey = '7b18cdb21655956f46b6cd26e3654eaf'

  constructor( private http : HttpClient) { }

  getData () {
    return this.http.get<MovieApiInterface>(this.baseURL+"popular?api_key="+this.apiKey, { responseType : 'json'});
  }

}
