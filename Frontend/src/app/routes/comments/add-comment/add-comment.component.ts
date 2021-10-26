import { CommentsApiService } from './../../../services/comments-api.service';
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
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {


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

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      console.log("id rating",this.id);
      this.fetchEntry()
      this.userName=this.shared.getData()
      this.getUser();
      console.log("userId: ", this.userId)
      console.log("userName: ", this.userName)
      console.log("userLog: ", this.userLog)
    }



    fetchEntry(){
      this.moviesApiService.getMarvelListByMovieId(this.id).subscribe( (res: any ) => {
        this.result = res;
        console.log("result",this.result);
  
      })
    }
  onSubmit(form : NgForm){

    this.commentEntry = form.form.value;
    console.log(form);
    console.log(this.commentEntry);

    if(this.commentEntry!=null){
      this.commentsService.addComment(this.commentEntry).subscribe(response =>{
        console.log("this.commentEntry", this.commentEntry)
        console.log("response ", response);
        this.router.navigate(['/commentsManager']);
      },
        error => console.log(error)
      )
    }
  }

  getUser(){
    this.usersApiService.getUserByUsername(this.userName).subscribe((res:any)=>{
      this.userLog=res;
      this.userId=this.userLog.id;
      console.log("userLog",this.userLog)

    })
  }

}
