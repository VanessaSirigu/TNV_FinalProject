import { Component, OnInit } from '@angular/core';
import { CommentsApiService } from '../../../services/comments-api.service';
import { CommentsResultsInterface, CommentApiInterface } from 'src/app/models/apiComment.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EditCommentComponent } from '../edit-comment/edit-comment.component';
import { state } from '@angular/animations';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private commentsService: CommentsApiService,
    private router : Router) { }

    comments: CommentsResultsInterface;
    id: number;
    errorText : string;

    /**
     * This is a component which display details of a single comment.
     * Comment id is given by URL.
     */
    ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.fetchEntry();
    }

    /**
     * Call a method to get comment datas for this id and assign the observable
     * to a CommentResultsInterface object.
     */
     fetchEntry(){
    this.commentsService.getCommentById(this.id).subscribe( (res: any) => {
      this.comments = res;
    })
  }

  /**
   * Delete the current comment with parameters submitted by user or
   * display an error window if needed.
   * @param id The ID of the comment to be deleted. 
   */
  deleteComment(id){
    this.commentsService.deleteComment(id)
    .subscribe(data => {
      this.router.navigate(['/commentsManager']);
    }, error => {
      this.errorText = error.error.message;
      console.log (error)
      alert(this.errorText)
    });
    
  }
}


