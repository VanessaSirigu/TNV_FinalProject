import { Component, OnInit } from '@angular/core';
import { MovieApiInterface, ResultInterface } from '../../models/apiMovie.model';
import { MoviesApiService } from '../../services/moviesapi.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MovieRatingService } from '../../services/movie-rating.service';
import { MovieRatingInterface, DataInterface } from '../../models/movieRating.model';

@Component({
  selector: 'app-add-rating-api',
  templateUrl: './add-rating-api.component.html',
  styleUrls: ['./add-rating-api.component.css']
})
export class AddRatingApiComponent implements OnInit {

  constructor(private movieRatingService:MovieRatingService, private router:Router,
     private route:ActivatedRoute,private moviesApiService:MoviesApiService) { }

  id:number;
  result:ResultInterface;
  ratedOptions = ['1', '2','3','4','5'];
  rating:DataInterface;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log("id rating",this.id);
    this.fetchEntry()
  }



  fetchEntry(){
    this.moviesApiService.getMarvelListByMovieId(this.id).subscribe( (res: any ) => {
      this.result = res;
      console.log("result",this.result);

    })
  }

  onSubmit(form : NgForm){
    this.rating = form.form.value;
    console.log("this.rating",this.rating)
    console.log(form)


    this.movieRatingService.addMovieRating(this.rating).subscribe(response => {
      console.log("rating",this.rating);
      console.log("responce",response);
      this.router.navigate(['/movieRating']);
    },
    (err) => {
      console.log("error")
    }
    )
  }



}
