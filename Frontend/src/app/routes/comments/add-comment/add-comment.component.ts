import { CommentsApiService } from './../../../services/comments-api.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommentApiInterface } from 'src/app/models/apiComment.model';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  constructor(private commentsService : CommentsApiService, private router : Router) { }

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
        error => console.log(error)
      )
    }
  }
}
