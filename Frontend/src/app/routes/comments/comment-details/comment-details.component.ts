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

    /**
     * Get id by url an run fetchEntry
     */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.fetchEntry();
    console.log(this.comments);
    }

    /**
     * Get comment datas by id
     */
    fetchEntry(){
    this.commentsService.getCommentById(this.id).subscribe( (res: any) => {
      this.comments = res;
    })
  }

  /**
   * Delete a comment
   * @param id The id of the comment to delete
   */
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


