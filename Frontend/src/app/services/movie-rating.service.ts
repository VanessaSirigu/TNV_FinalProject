import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieRatingInterface } from '../models/movieRating.model';


@Injectable({
  providedIn: 'root'
})
export class MovieRatingService {

  api:string= 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }
  getMovieRating(){
    return this.http.get<MovieRatingInterface>(this.api + '/api/movie_ratings/' );
  }
}
