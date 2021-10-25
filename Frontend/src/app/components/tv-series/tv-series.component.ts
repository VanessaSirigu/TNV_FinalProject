import { Component, OnInit } from '@angular/core';
import { TvSeriesApiInterface, OneTvShowInterface } from '../../models/apiTvSeries';
import { TvSeriesApiService } from '../../services/tv-series-api.service';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrls: ['./tv-series.component.css']
})
export class TvSeriesComponent implements OnInit {

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
