import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieApiInterface } from '../models/apiMovie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

    private baseURL = 'https://api.themoviedb.org/';
    private apiKey = "1e6e5ef39021170bbc2343b6c8c353e8";

    constructor( private http : HttpClient) { }

    getMovieList(){
        return this.http.get<MovieApiInterface>(this.baseURL+"4/list/1?api_key="+this.apiKey);
    }
    getMovieByMovieId(id){
      return this.http.get<any>(this.baseURL+"3/movie/"+id+"?api_key="+this.apiKey);
    }

}
