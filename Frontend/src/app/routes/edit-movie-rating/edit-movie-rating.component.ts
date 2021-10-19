import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieRatingService } from '../../services/movie-rating.service';
import { MovieRatingInterface, DataInterface } from '../../models/movieRating.model';

@Component({
  selector: 'app-edit-movie-rating',
  templateUrl: './edit-movie-rating.component.html',
  styleUrls: ['./edit-movie-rating.component.css']
})
export class EditMovieRatingComponent implements OnInit {

  constructor(private route: ActivatedRoute, private movieRatingService:MovieRatingService, private router: Router) { }

  movieRating:MovieRatingInterface;
  data: DataInterface[];
  id:number;
  rating:number;
  ratings = ['1','2','3','4','5'];

  ngOnInit(): void {
    const id = this.route.snapshot.params ['id'];
    this.fetchEntry(id);
  }

  fetchEntry(id){
    this.movieRatingService.getMovieRatingsByMovieId(id).subscribe( (res:any) =>{
      console.log("id ",id);
      this.movieRating = res;
      console.log("this movieRating ",this.movieRating);
      this.data=this.movieRating.data;
      console.log("this data", this.data);

    })
  }
  /*fetchEntry(){
    this.movieRatingService.getMovieRatingsByUserId(this.id).subscribe(
      responce =>{
      this.movieRating = responce;
      console.log("i dati ottenuti sono ", this.movieRating);
      this.data= this.movieRating.data;
      console.log("data: ",this.data )
    },
    error => console.log(error)
    )
  }*/

  /*onSubmit(id){
    console.log("onSubmit",this.data);
    this.movieRatingService.editMovieRating(this.data).subscribe(responce =>{
      console.log(responce);
      this.router.navigate(['/movieRating'])
    }), err => {
      console.log(err);
    }
    this.router.navigate(['/movieRating'])
  }*/
  onSubmit(){
    console.log("this movieRating.data",this.movieRating.data[0])
    this.movieRatingService.editMovieRatings(this.movieRating.data[0]).subscribe (response => {
      this.router.navigate(['/movieRating'])
    }),
    err => {console.log(err);}
    this.router.navigate(['/movieRating'])
  }


}
