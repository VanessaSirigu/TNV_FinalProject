import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieApiInterface } from '../models/apiMovie.model';

@Injectable({
  providedIn: 'root'
})
export class LatestMovieService {

  private baseURL = 'https://api.themoviedb.org/3/movie/'
  private apiKey = '7b18cdb21655956f46b6cd26e3654eaf'

  constructor( private http : HttpClient) { }

  getData () {
    return this.http.get<MovieApiInterface>(this.baseURL+"latest?api_key="+this.apiKey+"&language=en-US&page=1");
  }

  getEntry( id ) {
    return this.http.get<MovieApiInterface>(this.baseURL + "/" + id)
  }
}
