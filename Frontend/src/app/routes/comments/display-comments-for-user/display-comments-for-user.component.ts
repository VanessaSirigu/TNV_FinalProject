import { Router } from '@angular/router';
import { CommentsResultsInterface } from './../../../models/apiComment.model';
import { Component, OnInit } from '@angular/core';
import { CommentsApiService } from '../../../services/comments-api.service';
import { UsersManagerApiservice } from '../../../services/usersManagerApi.service';
import { UserInterface } from '../../../models/apiUsers.model';
import { MoviesApiService } from '../../../services/moviesapi.service';
import { ResultInterface, MovieApiInterface } from '../../../models/apiMovie.model';
import { OneTvShowInterface } from '../../../models/apiTvSeries';
import { TvSeriesApiService } from '../../../services/tv-series-api.service';

@Component({
  selector: 'app-display-comments-for-user',
  templateUrl: './display-comments-for-user.component.html',
  styleUrls: ['./display-comments-for-user.component.css']
})
export class DisplayCommentsForUserComponent implements OnInit {

  constructor( private router: Router,
    private usersService: UsersManagerApiservice,
    private commentsService: CommentsApiService,
    private movieService: MoviesApiService, private seriesApiService: TvSeriesApiService) { }

  results: ResultInterface;
  user: UserInterface;
  comments: CommentsResultsInterface[];
  commentIds: number[] = [];
  username: string;
  movieIds: number[] = [];
  bodies: string[] = [];
  movieTitles: string[] = [];
  oneSeries: OneTvShowInterface;
  movieMap = new Map<number, string>();

  /**
   * Get the current username and call a method to get all
   * comments written by this user.
   */
  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    this.getAllCommentsByUsername()
  }

  /**
   * Get a user by username.
   * Then get a comment objects list by user id.
   * Push the body of each comment in a string array.
   * Get the movie object for every movieId stored in each comment object.
   * Push the title of each movie in a string array.
   * In case the movieId does not match any movie, use it to try to get a tv series.
   * If it does not match a tv series either, push "(unknown movie)" string on array.
   */
  getAllCommentsByUsername() {
    var x = 0;
    this.usersService.getUserByUsername(this.username).subscribe((res: any) => {
      this.user = res;
      this.commentsService.getAllCommentsByUserId(this.user.id).subscribe((res: any) => {
        this.comments = res;
        this.commentIds = this.comments.map(a => a.id);
        this.movieIds = this.comments.map(a => a.movieId);
        this.bodies = this.comments.map(a => a.body);
        for (let movieId of this.movieIds) {
          this.movieService.getMovieByMovieId(movieId).subscribe((res: any) => {
            this.results = res;
            this.movieMap.set(movieId, this.results.title)
            x++;
            if (x == this.movieIds.length) {
              this.createMovieTitlesArray()
            }
          }, error => {
            this.seriesApiService.getSerieTvBySerieId(movieId).subscribe((res: any) => {
              this.oneSeries = res;
              this.movieMap.set(movieId, this.oneSeries.name)
              x++;
              if (x == this.movieIds.length) {
                this.createMovieTitlesArray()
              }
            }, error => {
              this.movieMap.set(movieId, "(unknown title)")
              x++;
              if (x == this.movieIds.length) {
                this.createMovieTitlesArray()
              }
            });
          })
        };
      });
    })
  }

  /**
   * Push every movie/series title with a given id in a string array
   */
  createMovieTitlesArray() {
    for (let movieId of this.movieIds) {
      this.movieTitles.push(this.movieMap.get(movieId));
    }
  }

  /**
  * Get the id of the table row and use it to get the comment id.
  * Then delete the comment with that id and reload page.
  * @param i The serial id of the row.
  */
  deleteComment(i) {
    var commentId = this.commentIds[i];
    this.commentsService.deleteComment(commentId)
      .subscribe(data => {
        window.location.reload();
      }, (err) => {
        console.log("Comment #", commentId, " is not present in the database.");
        window.location.reload();
      });
  }
}
