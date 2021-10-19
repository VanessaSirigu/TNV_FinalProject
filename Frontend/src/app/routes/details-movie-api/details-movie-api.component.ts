import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesApiService } from '../../services/moviesapi.service';
import { MovieApiInterface, ResultInterface } from '../../models/apiMovie.model';

@Component({
  selector: 'app-details-movie-api',
  templateUrl: './details-movie-api.component.html',
  styleUrls: ['./details-movie-api.component.css']
})
export class DetailsMovieApiComponent implements OnInit {

  constructor(private route:ActivatedRoute, private moviesApiService: MoviesApiService,
    private router:Router) { }

    movies:MovieApiInterface;
    results:ResultInterface[];
    result:ResultInterface;
    id:number;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log("this.id",this.id);
    this.fetchEntry()
  }

  fetchEntry(){
    this.moviesApiService.getMarvelListByMovieId(this.id).subscribe( (res: any ) => {
      this.result = res;
      console.log("movies",this.result);
      //this.result=this.movies;
      //console.log("results",this.results);

    })
  }

}
