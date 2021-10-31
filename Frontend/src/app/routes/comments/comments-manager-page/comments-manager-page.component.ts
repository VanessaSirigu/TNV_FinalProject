import { Component, OnInit } from '@angular/core';
import { CommentsApiService } from 'src/app/services/comments-api.service';
import { Router } from '@angular/router';
import { CommentsResultsInterface, CommentApiInterface } from 'src/app/models/apiComment.model';

@Component({
  selector: 'app-comments-manager-page',
  templateUrl: './comments-manager-page.component.html',
  styleUrls: ['./comments-manager-page.component.css']
})
export class CommentsManagerPageComponent implements OnInit {

  constructor(private commentsService : CommentsApiService, private router : Router) { }

  comments : CommentApiInterface;
  results : CommentsResultsInterface[];
  /**
   * This is a component for developers to manage all the comments in database.
   * It gets all comments on init.
   */
  ngOnInit(): void {
    this.getAllCommentsOnComponent();  }

    /**
     * Call a method to get all comments and assign the observable
     * to a CommentResultsInterface array.
     */
    getAllCommentsOnComponent(){
      this.commentsService.allComments().subscribe(
        response => {
          this.comments = response;
          this.results = this.comments.commentsResults;
        },
        error => console.log(error)
      )
    }

    /**
     * Navigate to a comment's details page
     * @param id Comment id
     */
    goToCommentDetails (id){
      this.router.navigateByUrl('/commentDetails/' + id);
    }

}
