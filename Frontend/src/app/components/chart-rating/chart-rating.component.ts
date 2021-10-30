import { Chart } from 'chart.js';
import { MovieRatingInterface } from 'src/app/models/movieRating.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataInterface } from '../../models/movieRating.model';
import { MovieRatingService } from '../../services/movie-rating.service';
import { UsersManagerApiservice } from '../../services/usersManagerApi.service';
import { UserInterface } from '../../models/apiUsers.model';

@Component({
  selector: 'app-chart-rating',
  templateUrl: './chart-rating.component.html',
  styleUrls: ['./chart-rating.component.css']
})
export class ChartRatingComponent implements OnInit {
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
  rating: number[];

  userLog: UserInterface;
  userId: number;

  colonna = 0;
  stella1: number;
  stella2: number;
  stella3: number;
  stella4: number;
  stella5: number;

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
      this.gestioneArray();
      this.getChart()
    })
  }

  gestioneArray() {
    this.stella1 = 0
    this.stella2 = 0
    this.stella3 = 0
    this.stella4 = 0
    this.stella5 = 0

    for (let i = 0; i < this.results.length; i++) {

      if (this.rating[i] == 1) {
        this.stella1 += 1
      }
      if (this.rating[i] == 2) {
        this.stella2 += 1;
      }
      if (this.rating[i] == 3) {
        this.stella3 += 1;
      }
      if (this.rating[i] == 4) {
        this.stella4 += 1;
      }
      if (this.rating[i] == 5) {
        this.stella5 += 1;
      }
    }
  }

  getChart() {
    new Chart(this.elemento.nativeElement, {
      type: 'horizontalBar',
      data: {
        labels: ['', '1', '2', '3', '4', '5'],
        datasets: [
          {
            data: [this.colonna, this.stella1, this.stella2, this.stella3, this.stella4, this.stella5],
            borderWidth: 0,
            borderColor: 'green',
            backgroundColor: [
              'rgb(240, 197, 116)',
              'rgb(240, 197, 116)',
              'rgb(240, 197, 116)',
              'rgb(240, 197, 116)',
              'rgb(240, 197, 116)',
              'rgb(240, 197, 116)'
            ],
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: false,
          }],
          yAxes: [{
            ticks: { fontSize: 18, fontFamily: "DK Lemon Yellow Sun", fontColor: 'rgb(190, 238, 245, .8)' }
          }],
          gridLines: {
            offsetGridLines: false
          },
        }
      }
    })
  }

}
