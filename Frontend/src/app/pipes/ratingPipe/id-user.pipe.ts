import { Pipe, PipeTransform } from '@angular/core';
import { DataInterface } from 'src/app/models/movieRating.model';
@Pipe({
  name: 'idUser'
})
export class IdUserPipe implements PipeTransform {

  transform(rating: DataInterface [], idUserFilter: number): Array<DataInterface> {
    let myArray =[];
    if(!rating) return;
    for(let i=0;i<rating.length;i++){
      if(rating[i].user_id==idUserFilter){
        myArray.push(rating[i]);
      }
    }
    return myArray;
  }

}
