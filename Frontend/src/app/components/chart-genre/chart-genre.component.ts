import { ActivatedRoute } from '@angular/router';
import { MovieRatingInterface } from 'src/app/models/movieRating.model';
import { Component, OnInit,ViewChild,ElementRef} from '@angular/core';
import { UserInterface } from '../../models/apiUsers.model';
import { DataInterface } from '../../models/movieRating.model';
import { MovieRatingService } from '../../services/movie-rating.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-genre',
  templateUrl: './chart-genre.component.html',
  styleUrls: ['./chart-genre.component.css']
})
export class ChartGenreComponent implements OnInit {
  @ViewChild("myCanvas",{ static: true}) elemento:ElementRef

  constructor (private movieRatingService : MovieRatingService,
    private route : ActivatedRoute) { }

  movieRatings: MovieRatingInterface;
  results: DataInterface[];
  rating: number[];
  movieRating: number;
  id:number;

  username: string;
  userLog: UserInterface;
  userId: number;

  colonna=0;
  stella1:number;
  stella2:number;
  stella3:number;
  stella4:number;
  stella5:number;

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
        this.gestioneArray();
        this.getChart();
      },
      error => console.log(error)
    )
  }

  gestioneArray(){
    this.stella1=0
    this.stella2=0
    this.stella3=0
    this.stella4=0
    this.stella5=0

    for (let i = 0; i < this.results.length; i++) {
       if(this.rating[i]==1){
         this.stella1+=1
       }
       if(this.rating[i]==2){
         this.stella2+=1;
       }
       if(this.rating[i]==3){
         this.stella3+=1;
       }
       if(this.rating[i]==4){
         this.stella4+=1;
       }
       if(this.rating[i]==5){
         this.stella5+=1;
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
              'rgb(240, 197, 116)',
            ],
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales:{
          xAxes: [{
            display: false,
          }],
          yAxes: [{
            ticks: {fontSize: 18, fontFamily: "DK Lemon Yellow Sun", fontColor: 'rgb(190, 238, 245, .8)'}}],
            gridLines:{
            offsetGridLines:false
          }
        }
      }
    })
  }

}
