import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { MovieRatingService } from '../../services/movie-rating.service';
import { CommentsApiService } from '../../services/comments-api.service';
import { MoviesApiService } from '../../services/moviesapi.service';
import { UsersManagerApiservice } from '../../services/usersManagerApi.service';
import { DataInterface, MovieRatingInterface } from '../../models/movieRating.model';
import { ResultInterface } from '../../models/apiMovie.model';
import { OneTvShowInterface } from '../../models/apiTvSeries';
import { TvSeriesApiService } from '../../services/tv-series-api.service';

@Component({
  selector: 'app-my-dash-component',
  templateUrl: './my-dash-component.component.html',
  styleUrls: ['./my-dash-component.component.css']
})
export class MyDashComponentComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router,
    private ratingService: MovieRatingService, private commentService: CommentsApiService,
    private movieService: MoviesApiService, private userService: UsersManagerApiservice,
    private seriesApiService: TvSeriesApiService) { }

  //variabili
  userId: number;
  movieRating: MovieRatingInterface;
  data: DataInterface[];
  titles: string[] = [];
  overview: string[] = [];
  movie: ResultInterface;
  oneSeries: OneTvShowInterface;

  /*Vengono cercati in tutti i db i rating e i commenti relativi
  all'utente loggato in base al suo id*/
  ngOnInit(): void {
    this.checkLog();
    this.getEntryRatingService();
  }

  //Mostra i movies della web API
  getEntriesMovieApi(id) {
    this.movieService.getMovieByMovieId(id).subscribe((response) => {
      this.movie = response;
      this.titles.push(this.movie.title)
      this.overview.push(this.movie.overview)
      })
  }

  //Mostra i rating memorizzati dal BE Laravel - db localhost:8000
  getEntryRatingService() {
    this.userId = Number.parseInt(localStorage.getItem('userId'))
    this.ratingService.getMovieRatingsByUserId(this.userId).subscribe((res: any) => {
      this.movieRating = res;
      this.data = this.movieRating.data;
      for (let i = 0; i < this.data.length; i++) {
        this.getEntriesMovieApi(this.data[i].movie_id)
        this.getEntryTvList(this.data[i].movie_id)
      }
    })
  }

  goToDetails(id) {
    this.router.navigateByUrl('/detailMovieApi/'+ id);
  }

  checkLog() {
  if (!localStorage.getItem('username')) {
    this.router.navigateByUrl('/login')
  }
}

getEntryTvList(id){
  this.seriesApiService.getSerieTvBySerieId(id).subscribe( (res: any ) => {
    this.oneSeries = res;
    this.titles.push(this.oneSeries.name)
  })
}

}
