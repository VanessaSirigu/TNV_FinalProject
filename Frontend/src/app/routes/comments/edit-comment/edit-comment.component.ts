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

  constructor(private route: ActivatedRoute, private commentsService: CommentsApiService, private router: Router) { }

  commentEntry: CommentsResultsInterface;
  comments: CommentsApiService;
  errorText: string;

  /*
  * This is a service page which is accessed by clicking on comment details.
   * It gets comment ID by the URL
  */
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.fetchEntry(id);
  }

  /*
   * Gets a comment by its ID.
   * @param id The ID of the comment to be read.
   */
  fetchEntry(id) {
    this.commentsService.getCommentById(id).subscribe((res: any) => {
      this.commentEntry = res;
    })
  }

  /*
   * Update the current comment with parameters submitted by user or
   * display an error window if needed.
   * @param id The ID of the comment to be updated.
   */
  onSubmit(id) {
    this.commentsService.editComment(this.commentEntry).subscribe(response => {
      this.router.navigate(['/commentDetails', this.commentEntry.id])
    }, error => {
      this.errorText = error.error.message;
      console.log(error)
      alert(this.errorText)
    })
  }
}
