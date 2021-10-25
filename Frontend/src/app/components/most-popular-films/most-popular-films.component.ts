import { Component, OnInit } from '@angular/core';
import { MostPopularFilmsService } from '../../services/most-popular-films.service';
import { MovieApiInterface, ResultInterface } from '../../models/apiMovie.model';

@Component({
  selector: 'app-most-popular-films',
  templateUrl: './most-popular-films.component.html',
  styleUrls: ['./most-popular-films.component.css']
})
export class MostPopularFilmsComponent implements OnInit {

  constructor(private popFilmService : MostPopularFilmsService) { }

  popMovies : MovieApiInterface;
  movies : ResultInterface [];

  ngOnInit() {
    this.showAllPopularMovies();
  }

  showAllPopularMovies(){
    this.popFilmService.getData().subscribe(
      responce =>{
      this.popMovies = responce;
      this.movies = this.popMovies.results;
      },
    error => console.log(error)
    )
  }

}
