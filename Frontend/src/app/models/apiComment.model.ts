export interface CommentApiInterface {

   commentsResults : CommentsResultsInterface []
}

export interface CommentsResultsInterface {
    id : number;
    userId : number;
    movieId : number;
    body : string;
}