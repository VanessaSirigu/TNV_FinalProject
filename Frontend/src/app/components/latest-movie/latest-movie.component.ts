import { Component, OnInit } from '@angular/core';
import { LatestMovieService } from '../../services/latest-movie.service';
import { MovieApiInterface, ResultInterface } from '../../models/apiMovie.model';

@Component({
  selector: 'app-latest-movie',
  templateUrl: './latest-movie.component.html',
  styleUrls: ['./latest-movie.component.css']
})
export class LatestMovieComponent implements OnInit {

  constructor(private latestMovie : LatestMovieService) { }

  latestMovies : MovieApiInterface;
  movies : ResultInterface [];
  movie : ResultInterface

  ngOnInit(): void {
    this.showLatestMovies();
  }

  showLatestMovies(){
    this.latestMovie.getData().subscribe (
      responce =>{
      this.latestMovies = responce;
      this.movies = this.latestMovies.results;
      console.log("i dati ottenuti sono: ");
    },
    error => console.log(error)
    )
  }

}
