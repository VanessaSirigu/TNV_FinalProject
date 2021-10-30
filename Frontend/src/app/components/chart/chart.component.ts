import { Component, OnInit } from '@angular/core';
import { MovieRatingService } from '../../services/movie-rating.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieRatingInterface, DataInterface } from '../../models/movieRating.model';
import { UserInterface } from '../../models/apiUsers.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(
    private movieRatingService: MovieRatingService,
    private route:ActivatedRoute,
    private router : Router
  ) { }

  movieRatings: MovieRatingInterface;
  results: DataInterface[];
  rating: number[];
  movieRating: number;
  media: number;
  id:number;
  showChart: boolean;

  username: string;
  userLog: UserInterface;
  userId: number;

  ngOnInit(): void {
    this.showChart=false;
    this.id = this.route.snapshot.params['id'];
    this.showAllMovieRating();
  }

  //pieChartLabels = [];
  pieChartType = 'doughnut';
  datasets: [
    {
        fillColor: "rgba(220,220,220,0.5)",
        strokeColor: "rgba(220,220,220,0.8)",
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
    }
]

  showAllMovieRating() {
    this.movieRatingService.getMovieRatingsByMovieId(this.id).subscribe(
      responce => {
        this.movieRatings = responce;
        this.results = this.movieRatings.data;
        this.rating = this.results.map(a => a.movie_rating);
        this.getMedia(this.rating);
        this.gestioneArray();
      },
      error => console.log(error)
    )
  }

  getMedia(movieRating: any[]) {
    var somma = 0;
    this.showChart
    for (let i = 0; i < movieRating.length; i++) {
      somma += movieRating[i];
    }
    this.media = somma / movieRating.length;
    if (somma != null) {
      this.showChart = true;
    }
  }

  stella1:number;
  stella2:number;
  stella3:number;
  stella4:number;
  stella5:number;

  gestioneArray(){
    this.stella1=0
    this.stella2=0
    this.stella3=0
    this.stella4=0
    this.stella5=0

    for (let i = 0; i < this.results.length+1; i++) {
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

}
