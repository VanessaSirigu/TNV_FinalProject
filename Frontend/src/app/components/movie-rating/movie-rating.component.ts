import { Component, OnInit } from '@angular/core';
import { MovieRatingService } from 'src/app/services/movie-rating.service';
import { MovieRatingInterface,DataInterface} from 'src/app/models/movieRating.model';
import { Router } from '@angular/router';




@Component({
  selector: 'app-movie-rating',
  templateUrl: './movie-rating.component.html',
  styleUrls: ['./movie-rating.component.css']
})
export class MovieRatingComponent implements OnInit {

  movieRatings: MovieRatingInterface;
  data : DataInterface[];
  id:number;
  idMovieFilter :number;
  idUserFilter :number;





  constructor(private movieRatingService:MovieRatingService, private router:Router){}

  ngOnInit(){
      this.showAllMovieRating();
    }

    showAllMovieRating(){

      this.movieRatingService.getMovieRating().subscribe(
        responce =>{
        console.log("ho ottenuto tutti i dati")
        this.movieRatings = responce;
        console.log("i dati ottenuti sono: ",this.movieRatings);
        this.data= this.movieRatings.data;
        console.log("rating: ",this.movieRatings.data)
       // let obj = JSON.stringify(this.movieRatings);

        //console.log(obj);

      },
      error => console.log(error)
      )
    }

    goToDetails(id){
      this.router.navigateByUrl('/dettagli/' + id);


    }


}


