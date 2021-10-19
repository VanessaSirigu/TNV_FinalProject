
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieRatingService } from '../../services/movie-rating.service';
import { MovieRatingInterface, DataInterface } from '../../models/movieRating.model';

@Component({
  selector: 'app-rating-details',
  templateUrl: './rating-details.component.html',
  styleUrls: ['./rating-details.component.css']
})
export class RatingDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private movieRatingService :MovieRatingService,
    private router: Router) { }

    movieRating:MovieRatingInterface;
    datas: DataInterface[];
    data:DataInterface;
    id: number;


  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    console.log("this id: " ,this.id);
    this.fetchEntry();

  }
  fetchEntry(){
    this.movieRatingService.getMovieRatingsByMovieId(this.id).subscribe( (res: any ) => {
      this.data = res;
      console.log("data",this.data);
      //this.result=this.movies;
      //console.log("results",this.results);

    })
  }

}
  /*delete(){
    this.movieRatingService.deleteMovieRating(this.id)
    .subscribe(data => {
      this.router.navigate(['/movieRating']);
    }, (err) => {
      console.log(err);
      this.router.navigate(['/movieRating']);
    });


  }*/


