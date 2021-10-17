import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentsApiService } from '../../../services/comments-api.service';
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
 
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.fetchEntry(id);
    console.log("Qui siamo dentro ngOnInit: ", this.commentEntry)
  }

  fetchEntry(id){
    this.commentsService.getCommentById(id).subscribe( (res: any) => {
      this.commentEntry = res;
      console.log(this.commentEntry)
    })
  }

  onSubmit(id){
    console.log("Qui siamo in onSubmit: ", this.commentEntry);
    this.commentsService.editComment(this.commentEntry).subscribe (response => {
      console.log(response);
      this.router.navigate(['/commentDetails', this.commentEntry.id])
    }), err => {
      console.log(err);
    }
    this.router.navigate(['/commentDetails', this.commentEntry.id])
  }
}