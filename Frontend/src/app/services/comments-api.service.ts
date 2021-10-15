import { CommentApiInterface, CommentsResultsInterface } from 'src/app/models/apiComment.model';
//import { CommentsApiService } from './comments-api.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsApiService {

  private baseUrl = "http://localhost:5000/comments"

  constructor(private http : HttpClient) { }

  //***************** CREATE *****************
  addComment = (comment : CommentApiInterface) => {
    return this.http.post<any>(this.baseUrl+"/", comment)
  }

  //***************** READ *****************
  // Richiama uno specifico commento a partire dall'id del commento
  getCommentById(id : number){
    return this.http.get<CommentsResultsInterface>(this.baseUrl + "/" + id);
  }

  // Richiama tutti i commenti che hanno un determinato userId
  getAllCommentsByUserId(userId : number){
     return this.http.get<any>(this.baseUrl + "?user-id=" + userId);
  }

  // Richiama tutti i commenti
  allComments(){
    return this.http.get<CommentApiInterface>(this.baseUrl + "?all");
  }


  // Avrei voluto scrivere una funzione per recuperare da movieId, ma
  // su .NET non è implementata. Da fare.

  //***************** UPDATE *****************
  //modifica il commento corrispondente all'id del commento passato come parametro
  editComment (comment : CommentsResultsInterface) {
    return this.http.put<CommentApiInterface>(this.baseUrl+"/"+comment.Id, comment);
   }
 
  //***************** DELETE ******************
  //cancella il commento corrispondente all'id passato come parametro
  deleteComment(id){
    return this.http.delete<CommentApiInterface>(this.baseUrl+"/"+id);
  }
}