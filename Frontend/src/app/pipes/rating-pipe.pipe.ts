import { Pipe, PipeTransform } from '@angular/core';
import { DataInterface } from '../models/movieRating.model';

@Pipe({
  name: 'ratingPipe'
})
export class RatingPipePipe implements PipeTransform {

  transform(rating: DataInterface [], idMovieFilter: number): Array<DataInterface> {
    let myArray =[];
    if(!rating) return;
    for(let i=0;i<rating.length;i++){
      if(rating[i].movie_id==idMovieFilter){
        myArray.push(rating[i]);
      }
    }
    return myArray;
  }

}
