import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { MovieRatingService } from '../../services/movie-rating.service';
import { CommentsApiService } from '../../services/comments-api.service';
import { MoviesApiService } from '../../services/moviesapi.service';
import { UsersManagerApiservice } from '../../services/usersManagerApi.service';
import { DataInterface, MovieRatingInterface } from '../../models/movieRating.model';
import { ResultInterface } from '../../models/apiMovie.model';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})

export class CommunityComponent implements OnInit {

    //variabili
    userId: number;
    movieRating: MovieRatingInterface;
    data: DataInterface [];
    titles: string[] = [];
    movie: ResultInterface;

    constructor(private dataService: DataService, private router: Router,
    private ratingService: MovieRatingService, private commentService: CommentsApiService,
    private movieService: MoviesApiService, private userService: UsersManagerApiservice) { }

   /*Vengono mostrati tutti i rating e i commenti della community*/
  ngOnInit(): void {
    this.getEntryRatingService();
    // this.getEntryCommentService();
  }

  //Mostra i movies della web API
  getEntriesMovieApi(id) {
    this.movieService.getMovieByMovieId(id).subscribe((response) => {
      this.movie = response;
      console.log(this.movie)
      this.titles.push(this.movie.title)
      })
  }

  //Mostra i rating memorizzati dal BE Laravel - db localhost:8000
  getEntryRatingService() {
    this.ratingService.getMovieRating().subscribe((res: any) => {
      this.movieRating = res;
      this.data = this.movieRating.data;
      console.log(this.data)
      for (let i = 0; i < this.data.length; i++) {
        this.getEntriesMovieApi(this.data[i].movie_id)
         }
    })
  }

  // //Mostra i commenti memorizzati dal BE Dotnet - db localhost:5000
  // getEntryCommentService() {
  //   this.commentService.getAllCommentsByMovieId(this.userId).subscribe((response: any) => {
  //     this.comment = response;
  //   })
  // }

  goToDetails(id) {
    this.router.navigateByUrl('/detailMovieApi/'+ id);
  }

}
