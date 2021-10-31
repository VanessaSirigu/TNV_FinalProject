import { Component, OnInit } from '@angular/core';
import { ResultInterface } from '../../models/apiMovie.model';
import { MoviesApiService } from '../../services/moviesapi.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MovieRatingService } from '../../services/movie-rating.service';
import { DataInterface, MovieRatingInterface } from '../../models/movieRating.model';
import { UserInterface } from '../../models/apiUsers.model';
import { UsersManagerApiservice } from '../../services/usersManagerApi.service';

@Component({
  selector: 'app-add-rating-api',
  templateUrl: './add-rating-api.component.html',
  styleUrls: ['./add-rating-api.component.css']
})
export class AddRatingApiComponent implements OnInit {

  constructor(private movieRatingService: MovieRatingService,
    private route: ActivatedRoute,
    private moviesApiService: MoviesApiService,
    private usersApiService: UsersManagerApiservice) { }

  id: number;
  result: ResultInterface;
  ratedOptions = ['1', '2', '3', '4', '5'];
  rating: DataInterface;
  movie_rating = 3;
  userName: string;
  userLog: UserInterface;
  userId: number;
  logUser: boolean;

  movieRate: MovieRatingInterface
  movieRated: DataInterface[];
  lenght: number;
  bool: boolean;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.fetchEntry()
    this.userName = localStorage.getItem('username');
    this.verifyLog();
    this.getUser();

    this.userId = Number.parseInt(localStorage.getItem('userId'));
    console.log(this.userName);
    console.log(this.userId);
    console.log(this.id)
  }

  fetchEntry() {
    this.moviesApiService.getMovieByMovieId(this.id).subscribe((res: any) => {
      this.result = res;
    })
  }

  verifyLog() {
    this.logUser = false;
    if (localStorage.getItem('username')) {
      this.logUser = true;
    }
  }

  onSubmit(form: NgForm) {
    this.rating = form.form.value;
    this.movieRatingService.addMovieRating(this.rating).subscribe(response => {
      window.location.reload()
    },
      (err) => {
        console.log("error")
      }
    )

  }

  getUser() {
    this.usersApiService.getUserByUsername(this.userName).subscribe((res: any) => {
      this.userLog = res;
      this.userId = this.userLog.id;
      this.getMovieRated();
      console.log(this.userId)
    })
  }

  getMovieRated() {
    this.movieRatingService.getMovieRatingsByUserIdAndMovieId(this.id, this.userId).subscribe((res: any) => {
      this.movieRate = res
      this.movieRated = this.movieRate.data
      this.lenght = this.movieRated.length
      this.bool = true
      if (this.lenght == 0) {
        this.bool = false
      }
    })
  }

}
