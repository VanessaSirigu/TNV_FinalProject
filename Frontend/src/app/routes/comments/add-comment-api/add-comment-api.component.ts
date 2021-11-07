import { CommentsApiService } from '../../../services/comments-api.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentApiInterface } from 'src/app/models/apiComment.model';
import { SharedService } from 'src/app/services/shared.service';
import { MoviesApiService } from 'src/app/services/moviesapi.service';
import { UsersManagerApiservice } from 'src/app/services/usersManagerApi.service';
import { ResultInterface } from 'src/app/models/apiMovie.model';
import { UserInterface } from 'src/app/models/apiUsers.model';

@Component({
  selector: 'app-add-comment-api',
  templateUrl: './add-comment-api.component.html',
  styleUrls: ['./add-comment-api.component.css']
})
export class AddCommentApiComponent implements OnInit {

    constructor(private commentsService : CommentsApiService,
      private router:Router,
      private route:ActivatedRoute,
      private moviesApiService:MoviesApiService,
      private usersApiService:UsersManagerApiservice,
      private shared: SharedService) { }

  id:number;
  result:ResultInterface;
  userName:string;
  userLog:UserInterface;
  userId:number;
  commentEntry : CommentApiInterface;
  errorText : string;
  errorOccurred : boolean;

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.fetchEntry()
      this.userName = localStorage.getItem('username')
      this.getUser();
      console.log(this.userId)
    }

    fetchEntry(){
      this.moviesApiService.getMovieByMovieId(this.id).subscribe( (res: any ) => {
        this.result = res;
      })
    }

  onSubmit(form : NgForm){
    this.commentEntry = form.form.value;
    if(this.commentEntry!=null){
      this.commentsService.addComment(this.commentEntry).subscribe(response =>{
        window.location.reload();
        this.errorOccurred = false;
      },
        error => {
          this.errorText = error.error.message;
          this.errorOccurred = true;
          console.log (error)
        }
      )
    }
  }

  getUser(){
    this.usersApiService.getUserByUsername(this.userName).subscribe((res:any)=>{
      this.userLog=res;
      if (this.userLog != null){
      this.userId=this.userLog.id;
      } else { console.log("No user logged")}
    })
  }

}
