import { DataInterface } from 'src/app/models/movieRating.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieRatingInterface,  } from '../models/movieRating.model';
import { Data } from '@angular/router';





@Injectable({
  providedIn: 'root'
})
export class MovieRatingService {

  api:string= 'http://127.0.0.1:8000';


  constructor(private http: HttpClient) { }


  getMovieRating(){
    return this.http.get<MovieRatingInterface>(this.api + '/api/movie_ratings/' );
  }

  getMovieRatingsByMovieId(id){
    return this.http.get<any>(this.api + '/api/movie_ratings/movie_id/'+id);
    //api/movie_ratings/movie_id/{movieId}
  }
  getMovieRatingsByUserId(id){
    return this.http.get<any>(this.api+ '/api/movie_ratings/user_id/'+id);

  }
  getMovieRatingsByMovieRating(id){
    return this.http.get<any>(this.api+ 'api/movie_ratings/'+id);

  }
  getMovieRatingsByUserIdAndMovieId(movie_id,user_id){
    return this.http.get<MovieRatingInterface>(this.api+'/api/movie_ratings/movie_id/'+movie_id +'/user_id/'+ user_id);
  }

  addMovieRating = (data: DataInterface) => {
    return this.http.post<DataInterface>(this.api + '/api/movie_ratings/', {
      "movie_rating": data.movie_rating,
      "movie_id": data.movie_id,
      "user_id" : data.user_id

    });
  };

  deleteMovieRating(id){
    return this.http.delete(this.api + '/api/movie_ratings/'+ id);
  }

  deleteMovieRatingByMovieId(id){
    return this.http.delete(this.api + '/api/movie_ratings/'+ id);
  }

  /*editMovieRating = (data: DataInterface) => {
    return this.http.put(this.api + '/api/movie_ratings/'+data.id,{
      "movie_rating": data.movie_rating,
      "movie_id": data.movie_id,
      "user_id" : data.user_id
    });
  };*/
  editMovieRatings = (data: DataInterface) => {
    return this.http.put(this.api + '/api/movie_ratings/'+data.movie_id,{
      "movie_rating": data.movie_rating,
      "movie_id": data.movie_id,
      "user_id" : data.user_id
    });
  };

  editMovieRating(id:number ,data:DataInterface){
    return this.http.put<DataInterface>(this.api +'/api/movie_ratings/',data,{ responseType: 'text' as 'json'}
    );
  }
}
