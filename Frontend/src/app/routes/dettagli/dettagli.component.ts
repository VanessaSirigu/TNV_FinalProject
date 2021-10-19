import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { MovieRatingService } from '../../services/movie-rating.service';
import { MovieRatingInterface, DataInterface } from '../../models/movieRating.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.css']
})
export class DettagliComponent implements OnInit {

  constructor(private route:ActivatedRoute, private movieRatingService: MovieRatingService,
    private router: Router) { }

    movieRating:MovieRatingInterface;
    id: number;
    data:DataInterface[];



  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.fetchEntry()
  }


  fetchEntry(){
    this.movieRatingService.getMovieRatingsByMovieId(this.id).subscribe( (res: any ) => {
      this.movieRating = res;
      console.log("movieRating",this.movieRating);
      this.data=this.movieRating.data;
      console.log("data",this.data);

    })
  }

  delete(){
    this.movieRatingService.deleteMovieRating(this.id)
    .subscribe(data => {
      this.router.navigate(['/movieRating']);
    }, (err) => {
      console.log(err);
      this.router.navigate(['/movieRating']);
    });
    //this.router.navigate(['/dashboard']);

  }



}
