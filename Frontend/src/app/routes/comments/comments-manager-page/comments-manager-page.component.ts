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

  ngOnInit(): void {
    this.getAllCommentsOnComponent();  }

    /**
     * Get all comments
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
     * Go to a page with details of a specific comment
     * @param id comment id
     */
    goToCommentDetails (id){
      this.router.navigateByUrl('/commentDetails/' + id);
    }

}
