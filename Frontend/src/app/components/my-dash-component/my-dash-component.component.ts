import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { MovieData } from '../../models/data.model';
import { MovieRatingService } from '../../services/movie-rating.service';
import { CommentsApiService } from '../../services/comments-api.service';
import { MoviesApiService } from '../../services/moviesapi.service';

@Component({
  selector: 'app-my-dash-component',
  templateUrl: './my-dash-component.component.html',
  styleUrls: ['./my-dash-component.component.css']
})
export class MyDashComponentComponent implements OnInit {

  constructor(private dataService: DataService, private router : Router,
    private ratingService : MovieRatingService, private commentService : CommentsApiService,
    private movieService : MoviesApiService) { }

  ngOnInit(): void {
    this.getEntries();
    this.getEntriesMovieApi();
    this.getEntryRatingService();
    this.getEntryCommentService();
  }

  public movies: MovieData [];
  public movieApi: any;
  public rating: any;
  public comment: any;
  public id: number;

  moviesDataLoader=false;

  getEntries(){
    this.dataService.getData().subscribe( (response : any) => {
      this.movies = response;
    })
  }

  getEntriesMovieApi(){
  this.movieService.getMarvelList().subscribe( (response : any) => {
    this.movieApi = response;
  })
}

getEntryRatingService() {
  this.ratingService.getMovieRatingsByMovieId(this.id).subscribe( (response : any) => {
    this.rating = response;
  })
}

getEntryCommentService() {
  this.commentService.getAllCommentsByMovieId(this.id).subscribe( (response : any) => {
    this.comment = response;
  })
}

  goToDetails(id){
    this.router.navigateByUrl('/details/' + id);
  }

}
