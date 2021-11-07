import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { MovieRatingService } from '../../services/movie-rating.service';
import { CommentsApiService } from '../../services/comments-api.service';
import { MoviesApiService } from '../../services/moviesapi.service';
import { UsersManagerApiservice } from '../../services/usersManagerApi.service';
import { DataInterface, MovieRatingInterface } from '../../models/movieRating.model';
import { ResultInterface } from '../../models/apiMovie.model';
import { UserInterface } from '../../models/apiUsers.model';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})

export class CommunityComponent implements OnInit {

    //variabili
    userId: number;
    movieRatings: MovieRatingInterface;
    user: UserInterface;
    data: DataInterface;
    datas: DataInterface [];
    titles: string[] = [];
    userNames: string [] = [];
    ratings: number[] = [];
    movie: ResultInterface;
    userIds: number [] = [];
    movieIds: number [] = [];
    titleMap = new Map<number, string>();
    userMap = new Map<number, string>();
 
    constructor(private dataService: DataService, private router: Router,
    private ratingService: MovieRatingService, private commentService: CommentsApiService,
    private movieService: MoviesApiService, private userService: UsersManagerApiservice) { }

   /*Vengono mostrati tutti i rating e i commenti della community*/
  ngOnInit(): void {
    this.getEntryRatingService();
    // this.getEntryCommentService();
  }

    //Mostra i rating memorizzati dal BE Laravel - db localhost:8000
    getEntryRatingService() {
      this.ratingService.getMovieRating().subscribe((res: any) => {
        this.movieRatings = res;
        this.datas = this.movieRatings.data;
        this.userIds = this.datas.map(a => a.user_id)
        this.movieIds = this.datas.map(b => b.movie_id)
        this.ratings = this.datas.map(c => c.movie_rating)
        console.log(this.datas)
        console.log("this.userIds: ", this.userIds)
        console.log("this.movieIds: ", this.movieIds)
        console.log("this.ratings: ", this.ratings)
        this.getMovieTitles(this.movieIds);
           }
      )
    }
  
      //Richiama i movies corrispondenti all'id passato e ne estrae il titolo
      getMovieTitles(movieIds : number []) {
        var x = 0;
        for (let movieId of movieIds){
        this.movieService.getMovieByMovieId(movieId).subscribe((response) => {
          this.movie = response;
          this.titleMap.set(movieId, this.movie.title);
          x++;
          if (x == movieIds.length){
            for (let movieId of this.movieIds) {
              if ((this.titleMap.get(movieId))!= undefined){
              this.titles.push(this.titleMap.get(movieId))
              } // Get a movie title mapped with given movie ID and push it in a string array
            }
            console.log("Titles finali:", this.titles)
            this.getUsernames(this.userIds);
          }
        }, error => {
          this.titleMap.set(movieId, "(unknown movie)");
          x++;
          if (x == movieIds.length){
            for (let movieId of this.movieIds) {
              if ((this.titleMap.get(movieId))!= undefined){
              this.titles.push(this.titleMap.get(movieId))
              } // Get a movie title mapped with given movie ID and push it in a string array
            }
            console.log("Titles:", this.titles)
            this.getUsernames(this.userIds);
          }
        })
      }
    }

    //Richiama gli utenti corrispondenti all'id passato e ne estrae il nome
    getUsernames(userIds) {
      var x = 0; // Set counter variable
      for (let userId of this.userIds) {
        this.userService.getUserById(userId).subscribe((res: any) => {
          x++; // Increase counter
          this.user = res;
          if (this.user != null){
            this.userMap.set(userId, this.user.username);
          } else {
            this.userMap.set(userId, "(unknown user)");
          }
          if (x == this.userIds.length) {   // When for loop is at it lasts instance
            for (let userId of this.userIds) {
              if (this.userMap.get(userId) != undefined){
              this.userNames.push(this.userMap.get(userId)) // Get a username mapped with given user ID and push it in a string array
              } else {
                this.userNames.push("(unknown user)")
              }
            }
            console.log("Usernames: ", this.userNames)
          }
        })
        }
    }
  
  // //Mostra i commenti memorizzati dal BE Dotnet - db localhost:5000
  // getEntryCommentService() {
  //   this.commentService.getAllCommentsByMovieId(this.userId).subscribe((response: any) => {
  //     this.comment = response;
  //   })
  // }

  goToDetails(id) {
    this.router.navigateByUrl('/detailMovieApi/'+ id);
  }

}
