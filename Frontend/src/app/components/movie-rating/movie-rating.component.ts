
import { Component, OnInit } from '@angular/core';
import { MovieRatingService } from 'src/app/services/movie-rating.service';
import { MovieRatingInterface,DataInterface } from 'src/app/models/movieRating.model';


@Component({
  selector: 'app-movie-rating',
  templateUrl: './movie-rating.component.html',
  styleUrls: ['./movie-rating.component.css']
})
export class MovieRatingComponent implements OnInit {

  movieRatings: MovieRatingInterface;
  rating : DataInterface[];

  constructor(private MovieRatingService:MovieRatingService){}

  ngOnInit(){
      this.showAllMovieRating();
    }



    showAllMovieRating(){

      this.MovieRatingService.getMovieRating().subscribe(
        responce =>{
        console.log("ho ottenuto tutti i dati")
        this.movieRatings = responce;
        console.log("i dati ottenuti sono: ",this.movieRatings);
        this.rating= this.movieRatings.data;
        console.log("rating: ",this.rating)
       // let obj = JSON.stringify(this.movieRatings);

        //console.log(obj);

      },
      error => console.log(error)
      )
    }
}
