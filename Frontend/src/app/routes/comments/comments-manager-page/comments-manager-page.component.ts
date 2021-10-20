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

    getAllCommentsOnComponent(){
      this.commentsService.allComments().subscribe(
        response => {
          this.comments = response;
          console.log("ho ottenuto i seguenti dati: ", this.comments)
          this.results = this.comments.commentsResults;
          console.log("this.comments.commentResults: ", this.comments.commentsResults);
          console.log("results :", this.results); 
        },
        error => console.log(error)
      )
    }

    goToCommentDetails (id){
      this.router.navigateByUrl('/commentDetails/' + id);
    }

}
