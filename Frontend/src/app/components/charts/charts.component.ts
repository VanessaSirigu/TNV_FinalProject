import { ActivatedRoute } from '@angular/router';
import { MovieRatingInterface } from 'src/app/models/movieRating.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserInterface } from '../../models/apiUsers.model';
import { DataInterface } from '../../models/movieRating.model';
import { MovieRatingService } from '../../services/movie-rating.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  @ViewChild("myCanvas", { static: true }) elemento: ElementRef

  constructor(private movieRatingService: MovieRatingService, private route: ActivatedRoute) { }

  movieRatings: MovieRatingInterface;
  results: DataInterface[];
  rating: number[];
  movieRating: number;
  media: number;
  id: number;

  username: string;
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
    this.showAllMovieRating();
  }

  showAllMovieRating() {
    this.movieRatingService.getMovieRatingsByMovieId(this.id).subscribe(
      responce => {
        this.movieRatings = responce;
        this.results = this.movieRatings.data;
        this.rating = this.results.map(a => a.movie_rating);
        this.getMedia(this.rating);
        this.getChart();
      },
      error => console.log(error)
    )
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
            borderColor: 'grey',
            backgroundColor: [
              'rgb(240, 197, 116)',
              'rgb(240, 197, 116, 0.2)'
            ],

          },
          {
            data: []
          },
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




