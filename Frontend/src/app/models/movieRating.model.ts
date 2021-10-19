export interface MovieRatingInterface {
  Author: string,
  Version: number,
  data:DataInterface[]
}
export interface DataInterface{
  id:number,
  movie_rating: number,
  movie_id: number,
  user_id:number
}
