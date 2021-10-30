import { Component, OnInit } from '@angular/core';
import { MostPopularFilmsService } from '../../services/most-popular-films.service';
import { MovieApiInterface, ResultInterface } from '../../models/apiMovie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popular-page',
  templateUrl: './popular-page.component.html',
  styleUrls: ['./popular-page.component.css']
})
export class PopularPageComponent implements OnInit {

  constructor(private popFilmService : MostPopularFilmsService, private router : Router) { }

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
      console.log(this.movies);
      },
    error => console.log(error)
    )
  }

  goToDetails(id){
    this.router.navigateByUrl('/detailMovieApi/'+id);
  }

}
