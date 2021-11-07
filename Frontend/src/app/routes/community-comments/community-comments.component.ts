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
import { OneTvShowInterface } from '../../models/apiTvSeries';
import { TvSeriesApiService } from '../../services/tv-series-api.service';
import { CommentsResultsInterface, CommentApiInterface } from '../../models/apiComment.model';

@Component({
  selector: 'app-community-comments',
  templateUrl: './community-comments.component.html',
  styleUrls: ['./community-comments.component.css']
})
export class CommunityCommentsComponent implements OnInit {

  userId: number;
  movieRatings: MovieRatingInterface;
  user: UserInterface;
  data: DataInterface;
  datas: DataInterface[];
  titles: string[] = [];
  userNames: string[] = [];
  ratings: number[] = [];
  commentsApiResults: CommentApiInterface;
  commentsResults: CommentsResultsInterface [];
  commentsBodies: string[] = [];
  movie: ResultInterface;
  userIds: number[] = [];
  movieIds: number[] = [];
  titleMap = new Map<number, string>();
  userMap = new Map<number, string>();
  displayPage: boolean;
  oneSeries: OneTvShowInterface

  constructor(private dataService: DataService, private router: Router,
    private ratingService: MovieRatingService, private commentService: CommentsApiService,
    private movieService: MoviesApiService, private userService: UsersManagerApiservice,
    private seriesApiService: TvSeriesApiService) { }

  /*Vengono mostrati tutti i rating e i commenti della community*/
  ngOnInit(): void {
    this.getEntryRatingService();
    // this.getEntryCommentService();
  }

  //Mostra i rating memorizzati dal BE Laravel - db localhost:8000
  getEntryRatingService() {
    this.commentService.allComments().subscribe((res: any) => {
      this.commentsResults = res;
      console.log(this.commentsResults)
      this.userIds = this.commentsResults.map(a => a.userId)
      this.movieIds = this.commentsResults.map(b => b.movieId)
      this.commentsBodies = this.commentsResults.map(c => c.body)
      console.log(this.datas)
      console.log("this.userIds: ", this.userIds)
      console.log("this.movieIds: ", this.movieIds)
      console.log("this.commentsBodies: ", this.commentsBodies)
      this.getMovieTitles(this.movieIds);
    }
    )
  }



  //Richiama i movies corrispondenti all'id passato e ne estrae il titolo
  getMovieTitles(movieIds: number[]) {
    var x = 0;
    for (let movieId of movieIds) {
      this.movieService.getMovieByMovieId(movieId).subscribe((response) => {
        this.movie = response;
        this.titleMap.set(movieId, this.movie.title);
        x++;
        if (x == movieIds.length) {
          if (x == movieIds.length) {
            this.createTitlesArray(movieIds)
          }
        }
      }, error => // If an error occurs when getting movie by id, probably the id belongs to a tv series, so try to get it
      {
        this.seriesApiService.getSerieTvBySerieId(movieId).subscribe((res: any) => {
          this.oneSeries = res;
          this.titleMap.set(movieId, this.oneSeries.name);
          x++;
          if (x == movieIds.length) {
            this.createTitlesArray(movieIds)
          }
        },
          error => { // If the id does not belong neither to a movie nor to a tv series, push (unknown movie) string in movie titles
            this.titleMap.set(movieId, "(unknown movie)");
            x++;
            if (x == movieIds.length) {
              this.createTitlesArray(movieIds)
            }
          })
      })
    }
  }

  createTitlesArray(movieIds : number[]){
    for (let movieId of this.movieIds) {
      if ((this.titleMap.get(movieId)) != undefined) {
        this.titles.push(this.titleMap.get(movieId))
      }
    }
    console.log("Titles:", this.titles)
    this.getUsernames(this.userIds);
  }



  //Richiama gli utenti corrispondenti all'id passato e ne estrae il nome
  getUsernames(userIds) {
    var x = 0; // Set counter variable
    for (let userId of this.userIds) {
      this.userService.getUserById(userId).subscribe((res: any) => {
        x++; // Increase counter
        this.user = res;
        if (this.user != null) {
          this.userMap.set(userId, this.user.username);
        } else {
          this.userMap.set(userId, "(unknown user)");
        }
        if (x == this.userIds.length) {   // When for loop is at it lasts instance
          for (let userId of this.userIds) {
            if (this.userMap.get(userId) != undefined) {
              this.userNames.push(this.userMap.get(userId)) // Get a username mapped with given user ID and push it in a string array
            } else {
              this.userNames.push("(unknown user)")
            }
          }
          console.log("Usernames: ", this.userNames)
          this.displayPage = true;
        }
      })
    }
  }

  goToDetails(id) {
    this.router.navigateByUrl('/detailMovieApi/' + id);
  }

}

