import { Component, OnInit } from '@angular/core';
import { MoviesApiService } from '../../services/moviesapi.service';
import { MovieApiInterface, ResultInterface } from '../../models/apiMovie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-api',
  templateUrl: './movies-api.component.html',
  styleUrls: ['./movies-api.component.css']
})
export class MoviesApiComponent implements OnInit {

  movies : MovieApiInterface;
  results : ResultInterface[];

  constructor(private apiService:MoviesApiService, private router:Router) { }

  ngOnInit(): void {
    this.getMovieListOnComponent();
  }

  getMovieListOnComponent(){
    this.apiService.getMovieList().subscribe(
      response => {
        //se è andato tutto bene, allora:
        console.log("ho ottenuto i dati!")
        this.movies = response;
        console.log("i dati ottenuti sono: ", this.movies);
        this.results= this.movies.results;
        console.log("results: ", this.results)
        //console.log("I dati stringify: " + JSON.stringify(this.movies))
      },
      error => console.log(error)
    )
  }
  goToDetails(id){
    this.router.navigateByUrl('/detailMovieApi/'+id);
    console.log("id",id)
  }

}
