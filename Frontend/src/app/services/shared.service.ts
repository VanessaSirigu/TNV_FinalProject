import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  data:string;

  constructor() { }
  sendData(data){
    this.data=data
  }
  getData(){
    return this.data
  }
}
