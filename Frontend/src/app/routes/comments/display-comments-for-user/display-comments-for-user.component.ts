import { CommentsResultsInterface } from './../../../models/apiComment.model';
import { Component, OnInit } from '@angular/core';
import { CommentsApiService } from '../../../services/comments-api.service';
import { UsersManagerApiservice } from '../../../services/usersManagerApi.service';
import { UserInterface } from '../../../models/apiUsers.model';
import { MoviesApiService } from '../../../services/moviesapi.service';
import { ResultInterface } from '../../../models/apiMovie.model';

@Component({
  selector: 'app-display-comments-for-user',
  templateUrl: './display-comments-for-user.component.html',
  styleUrls: ['./display-comments-for-user.component.css']
})
export class DisplayCommentsForUserComponent implements OnInit {

  constructor( private usersService : UsersManagerApiservice,
    private commentsService : CommentsApiService,
    private movieService : MoviesApiService) { }

  movie : ResultInterface [];
  user : UserInterface;
  comments : CommentsResultsInterface[];
  username : string;
  movieIds : number [] = [];
  bodies : string [] = [];
  movieTitles : string [] = [];

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
   */
  getAllCommentsByUsername(){
    this.usersService.getUserByUsername(this.username).subscribe((res : any) => {
      this.user = res;
      this.commentsService.getAllCommentsByUserId(this.user.id).subscribe((res: any) =>{
        this.comments = res;
        this.movieIds = this.comments.map(a => a.movieId);
        this.bodies  = this.comments.map(a => a.body);
        for (let movieId of this.movieIds)
          this.movieService.getMovieByMovieId(movieId).subscribe((res : any) =>{
            this.movie = res;
            this.movieTitles = this.movie.map(a => a.title);
      });
    });
  });
  }
}
