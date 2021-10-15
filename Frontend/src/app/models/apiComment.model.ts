export interface CommentApiInterface {

   commentsResults : CommentsResultsInterface []
}

export interface CommentsResultsInterface {
    Id : number;
    UserId : number;
    MovieId : number;
    Body : string;
}