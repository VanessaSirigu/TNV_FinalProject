import { Component, OnInit } from '@angular/core';
import { CommentsApiService } from '../../../services/comments-api.service';
import { CommentsResultsInterface, CommentApiInterface } from 'src/app/models/apiComment.model';
import { ActivatedRoute, Router } from '@angular/router';

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

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.fetchEntry()
  }

  fetchEntry(){
    this.commentsService.getCommentById(this.id).subscribe( (res: any) => {
      this.comments = res;
      console.log(this.comments);
      console.log(this.comments.Id);
      console.log(this.comments.MovieId);
      console.log(this.comments.UserId);
      console.log(this.comments.Body);
    })
  }

  deleteComment(id){
    this.commentsService.deleteComment(id)
    .subscribe(data => {
      this.router.navigate(['/commentsManager']);
    }, (err) =>{
      console.log(err);
      this.router.navigate(['/commentsManager']);
    });
    
  }
}
