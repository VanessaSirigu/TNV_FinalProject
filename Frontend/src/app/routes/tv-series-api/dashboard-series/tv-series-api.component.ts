import { TvSeriesApiInterface } from '../../../models/apiTvSeries';
import { Component, OnInit } from '@angular/core';
import { TvSeriesApiService } from '../../../services/tv-series-api.service';
import { OneTvShowInterface } from '../../../models/apiTvSeries';

@Component({
  selector: 'app-tv-series-api',
  templateUrl: './tv-series-api.component.html',
  styleUrls: ['./tv-series-api.component.css']
})
export class TvSeriesApiComponent implements OnInit {

  series : TvSeriesApiInterface;
  oneSeries : OneTvShowInterface [];

  constructor(private apiService : TvSeriesApiService) { }

  ngOnInit(): void {
    this.getTvSeriesOnComponent();
  }

  getTvSeriesOnComponent(){
    this.apiService.getSerieTvList().subscribe(
      response => {
        this.series = response;
        this.oneSeries= this.series.results;
      },
      error => console.log(error)
    )}

}
