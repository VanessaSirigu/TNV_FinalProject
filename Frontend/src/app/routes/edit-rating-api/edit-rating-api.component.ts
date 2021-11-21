import { MovieRatingInterface } from 'src/app/models/movieRating.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieRatingService } from '../../services/movie-rating.service';
import { DataInterface } from '../../models/movieRating.model';
import { UsersManagerApiservice } from '../../services/usersManagerApi.service';
import { UserInterface } from '../../models/apiUsers.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-rating-api',
  templateUrl: './edit-rating-api.component.html',
  styleUrls: ['./edit-rating-api.component.css']
})
export class EditRatingApiComponent implements OnInit {

  constructor(private route: ActivatedRoute,
   private movieRatingService:MovieRatingService,
   private router: Router,
   private usersApiService:UsersManagerApiservice,
   ) { }

   movieRating:MovieRatingInterface;
   data: DataInterface[];
   result:DataInterface;
   id:number;
   movie_rating:number;

   ratings = ['1','2','3','4','5'];
   userName:string;
   logUser:boolean;
   userLog:UserInterface;
   userId:number;
   rating:DataInterface

   movieRate:MovieRatingInterface
   movieRated:DataInterface[];
   lenght:number;
   bool:boolean;
   ids:number
   changedSuccessfully : boolean;
   deleteSuccessfully : boolean;

  ngOnInit(): void {
    this.id = this.route.snapshot.params ['id'];
    this.userName = localStorage.getItem('username');
    this.verifyLog();
    this.getUser();
  }

  verifyLog() {
    this.logUser = false;
    if (localStorage.getItem('username')) {
    this.logUser = true;
    }
  }

  getUser(){
    this.usersApiService.getUserByUsername(this.userName).subscribe((res:any)=>{
      this.userLog=res;
      this.userId=this.userLog.id;
      this.getMovieRated()
    })
  }

  getMovieRated(){
    this.movieRatingService.getMovieRatingsByUserIdAndMovieId(this.id,this.userId).subscribe((res:any)=>{
      this.movieRate= res
      this.movieRated=this.movieRate.data
      this.ids=this.movieRated[0].id
      this.movie_rating=this.movieRated[0].movie_rating
      this.lenght=this.movieRated.length
      this.bool=true
      if(this.lenght==0){
      this.bool=false
      }
    })
  }

  onSubmit(form : NgForm){
    this.changedSuccessfully = false;
    this.rating = form.form.value;
    this.movieRatingService.editMovieRating(this.rating).subscribe(response => {
            this.changedSuccessfully = true;
            window.location.reload();
    },
    (err) => {
      console.log("error")
    }
    )
  }

  delete(){
    this.changedSuccessfully = false;
    this.movieRatingService.deleteMovieRating(this.movieRated[0].id)
    .subscribe(data => {
      this.deleteSuccessfully = true;
      window.location.reload();
    }, (err) => {
      console.log(err);
    });
  }

}
