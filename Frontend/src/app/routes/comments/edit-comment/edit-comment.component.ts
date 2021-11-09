import { CommentsApiService } from 'src/app/services/comments-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentsResultsInterface } from 'src/app/models/apiComment.model';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent implements OnInit {

    constructor(private route : ActivatedRoute, private commentsService : CommentsApiService, private router : Router) {  }

  commentEntry : CommentsResultsInterface;
  comments: CommentsApiService;
  errorText : string;
  errorOccurred : boolean;

  /**
   * Get comment id by url
   */
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.fetchEntry(id);
  }

  /**
   * Get comment by id
   * @param id comment id
   */
  fetchEntry(id){
    this.commentsService.getCommentById(id).subscribe( (res: any) => {
      this.commentEntry = res;
    })
  }

  /**
   * Submit edited datas about the comment with given id or
   * saver error message in a text string in case error occurs.
   * @param id comment id
   */
  onSubmit(id){
    this.commentsService.editComment(this.commentEntry).subscribe (response => {
      this.router.navigate(['/commentDetails', this.commentEntry.id])
    },         error => {
      this.errorText = error.error.message;
      this.errorOccurred = true;
    })
  }
}
