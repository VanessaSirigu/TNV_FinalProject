import { CommentApiInterface, CommentsResultsInterface } from 'src/app/models/apiComment.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CommentsApiService {

  private movieUrl = "http://localhost:5000/movie-id"  // URL for method to get comments by Movie ID only
  private baseUrl = "http://localhost:5000/comments"  // URL for other methods

  constructor(private http: HttpClient) { }

  //***************** CREATE *****************
  // Add a comment
  addComment = (comment: CommentApiInterface) => {
    return this.http.post<any>(this.baseUrl + "/", comment).pipe(catchError(this.handleError));
  }

  handleError(err) {
    return throwError(err)
  }

  //***************** READ *****************
  // Get a specific commment by comment id
  getCommentById(id: number) {
    return this.http.get<CommentsResultsInterface>(this.baseUrl + "/" + id);
  }

  // Get all comments by a given userId
  getAllCommentsByUserId(userId: number) {
    return this.http.get<any>(this.baseUrl + "?user-id=" + userId);
  }

  // Get all comment by given movieId
  getAllCommentsByMovieId(movieId: number) {
    return this.http.get<CommentApiInterface>(this.movieUrl + "/" + movieId);
  }

  // Get all comments in the database
  allComments() {
    return this.http.get<CommentApiInterface>(this.baseUrl + "?all");
  }

  //***************** UPDATE *****************
  // Edit che comment by id passed as a parameter
  editComment(comment: CommentsResultsInterface) {
    console.log(comment.id)
    return this.http.put<CommentsResultsInterface>(this.baseUrl + "/" + comment.id, comment, { responseType: 'text' as 'json' }).pipe(catchError(this.handleError));
  };

  //***************** DELETE ******************
  // Delete comment for Id passed as a parameter
  deleteComment(id) {
    return this.http.delete<CommentApiInterface>(this.baseUrl + "/" + id).pipe(catchError(this.handleError));
  }

}
