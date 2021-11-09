import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesApiService } from '../../services/moviesapi.service';
import { MovieApiInterface, ResultInterface } from '../../models/apiMovie.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details-movie-api',
  templateUrl: './details-movie-api.component.html',
  styleUrls: ['./details-movie-api.component.css']
})
export class DetailsMovieApiComponent implements OnInit {

  constructor(private route: ActivatedRoute, private moviesApiService: MoviesApiService,
    private router: Router, private location: Location) { }

  movies: MovieApiInterface;
  results: ResultInterface[];
  result: ResultInterface;
  id: number;
  userId : number;

  /**
   * Get movie id by url.
   * Get user id by localStorage, if it is null set userId variable as -1
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userId = Number.parseInt(localStorage.getItem('userId'));
    if (Number.isNaN(this.userId)){ this.userId = -1}
    this.fetchEntry()
  }

  /**
   * Get a movie by movieId.
   */
  fetchEntry() {
    this.moviesApiService.getMovieByMovieId(this.id).subscribe((res: any) => {
      this.result = res;
    })
  }

  goBack() {
    this.location.back();
  }

}
