import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../../../models/apiUsers.model';
import { CommentsApiService } from 'src/app/services/comments-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersManagerApiservice } from '../../../services/usersManagerApi.service';
import { CommentsResultsInterface } from '../../../models/apiComment.model';

@Component({
  selector: 'app-display-comments-for-single-movie',
  templateUrl: './display-comments-for-single-movie.component.html',
  styleUrls: ['./display-comments-for-single-movie.component.css']
})
export class DisplayCommentsForSingleMovieComponent implements OnInit {

  constructor( private route: ActivatedRoute,
    private router : Router,
    private commentsService: CommentsApiService,
    private usersService: UsersManagerApiservice) { }

  comments: CommentsResultsInterface[];
  commentIds : number [] = [];
  user: UserInterface;
  userId: number;
  userIds: number[] = [];
  bodies: string[] = [];
  username: string;
  userNames: string[] = [];
  movieId: number;
  userMap = new Map<number, string>();

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    this.movieId = this.route.snapshot.params['id']; // Gets movie ID from route
    this.fetchEntry();
  }

  /**
   * Gets all comments linked to a given movieId
   */
  fetchEntry() {
    this.commentsService.getAllCommentsByMovieId(this.movieId).subscribe((res: any) => {
      this.comments = res;
      this.commentIds = this.comments.map(a => a.id);
      this.userIds = this.comments.map(a => a.userId); // get userId array
      this.bodies = this.comments.map(a => a.body); // get comment body array
      this.getUsernameArray(this.userIds);
    })
  }

  /**
   * Gets an array with the usernames associated with that comment, in the same
   * order of whe user IDs
   * @param userIds A number array with all user IDs in the correct order to display
   */
  getUsernameArray(userIds) {
    var x = 0; // Set counter variable
    for (let userId of this.userIds) {
      this.usersService.getUserById(userId).subscribe((res: any) => {
        x++; // Increase counter
        this.user = res;
        if(this.user != null){
        this.userMap.set(userId, this.user.username);
        } else {
          this.userMap.set(userId, "(unknown user)");
        }
        if (x == this.userIds.length) {   // When for loop is at it lasts instance
          for (let userId of this.userIds) {
            this.userNames.push(this.userMap.get(userId)) // Get a username mapped with given user ID and push it in a string array
          }
        }
      })
    }
  }

  /**
   * Get the id of the table row and use it to get the comment id.
   * Then delete the comment with that id and reload page.
   * @param i The serial id of the row.
   */
  deleteComment(i){
    var commentId = this.commentIds[i];
    this.commentsService.deleteComment(commentId)
    .subscribe(data => {
      window.location.reload();
    }, (err) =>{
      console.log(err);
      window.location.reload();
    });
;
  }

}
