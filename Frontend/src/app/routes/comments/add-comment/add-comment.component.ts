import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentApiInterface } from 'src/app/models/apiComment.model';
import { CommentsApiService } from 'src/app/services/comments-api.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  constructor(private commentsService : CommentsApiService,
    private router:Router,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
  }

  commentEntry : CommentApiInterface;

  onSubmit(form : NgForm){

    this.commentEntry = form.form.value;
    console.log(form);
    console.log(this.commentEntry);

    if(this.commentEntry!=null){
      this.commentsService.addComment(this.commentEntry).subscribe(response =>{
        console.log(response);
        this.router.navigate(['/commentsManager']);
      },
      error => {
        alert(error.error.message)
      })
    }
  }
}
