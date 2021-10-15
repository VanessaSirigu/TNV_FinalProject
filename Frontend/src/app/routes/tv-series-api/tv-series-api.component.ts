import { TvSeriesApiInterface } from './../../models/apiTvSeries';
import { Component, OnInit } from '@angular/core';
import { TvSeriesApiService } from '../../services/tv-series-api.service';
import { OneTvShowInterface } from '../../models/apiTvSeries';

@Component({
  selector: 'app-tv-series-api',
  templateUrl: './tv-series-api.component.html',
  styleUrls: ['./tv-series-api.component.css']
})
export class TvSeriesApiComponent implements OnInit {

  series : TvSeriesApiInterface;
  oneSeries : OneTvShowInterface [];
  pathImg : string;

  constructor(private apiService : TvSeriesApiService) { }

  ngOnInit(): void {
    this.getTvSeriesOnComponent();
  }

  getTvSeriesOnComponent(){
    this.apiService.getSerieTvList().subscribe(
      response => {
        console.log("ho ottenuto i dati!")
        this.series = response;
      //  this.pathImg = getImageOnComponent()
        this.oneSeries= this.series.results;
        // this.series =
        console.log("i dati ottenuti sono: ", this.oneSeries);
      },
      error => console.log(error)
    )}

    // getImageOnComponent() {
    //   this.apiService.getImage().subscribe(
    //     response => {

    //       this.pathImg = response;
    //       this.oneSeries= this.series.results;
    //       console.log("i dati ottenuti sono: ", this.oneSeries);
    //   },
    //   error => console.log("errore")
    //   )}
}
