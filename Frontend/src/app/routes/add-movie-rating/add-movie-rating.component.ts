import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieRatingService } from 'src/app/services/movie-rating.service';
import { MovieRatingInterface, DataInterface } from 'src/app/models/movieRating.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-movie-rating',
  templateUrl: './add-movie-rating.component.html',
  styleUrls: ['./add-movie-rating.component.css']
})
export class AddMovieRatingComponent implements OnInit {

  constructor(private MovieRatingService:MovieRatingService, private router:Router) { }

  ngOnInit(): void {
  }

  ratedOptions = ['1', '2','3','4','5']
  rating:DataInterface;

  onSubmit(form : NgForm){
    this.rating = form.form.value;
    console.log(form)
    console.log(this.rating);

    this.MovieRatingService.addMovieRating(this.rating).subscribe(response => {
      console.log(response);
      this.router.navigate(['/movieRating']);
    },
    (err) => {
      //fai qualcosa
    }
    )
  }

}







