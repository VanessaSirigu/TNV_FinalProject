import { TvSeriesApiInterface } from './../models/apiTvSeries';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvSeriesApiService {

  private baseURL = 'https://api.themoviedb.org/3/';
  private apiKey = "7b18cdb21655956f46b6cd26e3654eaf";

  constructor(private http: HttpClient) { }

  getSerieTvList (){
    return this.http.get<TvSeriesApiInterface>(this.baseURL+"tv/popular?api_key="+this.apiKey+"&language=en-US&page=1");
  }
  getSerieTvBySerieId(id){
    return this.http.get<TvSeriesApiInterface>(this.baseURL+"tv/"+id+"?api_key="+this.apiKey+"&language=en-US&page=1");
  }
  getImage () {
    return this.http.get<string>(this.baseURL+"tv/{tv_id}/images?api_key="+this.apiKey+"&language=en-US");
  }

}
