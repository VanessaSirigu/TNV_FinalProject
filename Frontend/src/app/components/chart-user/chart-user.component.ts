import { Chart } from 'chart.js';
import { MovieRatingInterface } from './../../models/movieRating.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieRatingService } from '../../services/movie-rating.service';
import { UsersManagerApiservice } from '../../services/usersManagerApi.service';
import { DataInterface } from '../../models/movieRating.model';
import { UserInterface } from '../../models/apiUsers.model';

@Component({
  selector: 'app-chart-user',
  templateUrl: './chart-user.component.html',
  styleUrls: ['./chart-user.component.css']
})
export class ChartUserComponent implements OnInit {
  @ViewChild("myCanvas", { static: true }) elemento: ElementRef

  constructor(
    private route: ActivatedRoute,
    private movieRatingService: MovieRatingService,
    private usersApiService: UsersManagerApiservice,

  ) { }

  id: number;
  username: string;
  movieRatings: MovieRatingInterface;
  results: DataInterface[];
  result: DataInterface;
  rating: number[];
  media: number;

  userLog: UserInterface;
  userId: number;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.username = localStorage.getItem('username');
    this.getUser()
  }

  getUser() {
    this.usersApiService.getUserByUsername(this.username).subscribe((res: any) => {
      this.userLog = res;
      this.userId = this.userLog.id;
      this.fetchEntry()
    })

  }
  fetchEntry() {
    this.movieRatingService.getMovieRatingsByUserId(this.userId).subscribe((res: any) => {
      this.movieRatings = res;
      this.results = this.movieRatings.data;
      this.rating = this.results.map(a => a.movie_rating);
      this.getMedia(this.rating);
      this.getChart()
    })
  }
  getMedia(movieRating: any[]) {
    var somma = 0;
    for (let i = 0; i < movieRating.length; i++) {
      somma += movieRating[i];
    }
    this.media = somma / movieRating.length;

  }
  getChart() {
    new Chart(this.elemento.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['1', '2'],
        datasets: [
          {
            data: [this.media, 5 - this.media],
            borderWidth: 0,
            borderColor: 'green',
            backgroundColor: [
              'rgb(240, 197, 116)',
              'rgb(240, 197, 116, 0.2)'
            ],
          },
          {
            data: []
          }
        ]
      },
      options: {
        legend: {
          display: false
        }
      }
    })
  }


}
