import { MovieRatingService } from './services/movie-rating.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
 /* movieRatings: any;
  constructor(private MovieRatingService:MovieRatingService){}
    ngOnInit(){
      this.showAllMovieRating();
    }
    showAllMovieRating(){
      this.MovieRatingService.getMovieRating().subscribe((movieRatings)=>{
        this.movieRatings = movieRatings;
        let obj = JSON.stringify(this.movieRatings);

        console.log(obj);

      });
    }*/
}
