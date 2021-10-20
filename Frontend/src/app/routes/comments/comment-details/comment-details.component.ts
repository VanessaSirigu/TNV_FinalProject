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
//    oldComments: CommentsResultsInterface;
//    comingFromEdit: boolean = history.state;
//    checkChanges : boolean = true;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.fetchEntry();
    console.log(this.comments);
    }


    fetchEntry(){
    this.commentsService.getCommentById(this.id).subscribe( (res: any) => {
      this.comments = res;
      console.log(this.comments);
      console.log(this.comments.id);
      console.log(this.comments.movieId);
      console.log(this.comments.userId);
      console.log(this.comments.body);
    })
  }

  /* This function checks if we are coming from the Edit Page, and if we do,
     it checks if the comments in the database are still the same.
     
  checkIfCommentChanged(){
     if (this.comingFromEdit == true){
       while(this.comments == this.oldComments){
         this.checkChanges = false;
       }
       this.fetchEntry()
       this.checkChanges == true;
     }
  }*/

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


