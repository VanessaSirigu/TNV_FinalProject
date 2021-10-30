import { Component, OnInit } from '@angular/core';
import { TvSeriesApiService } from '../../services/tv-series-api.service';
import { OneTvShowInterface, TvSeriesApiInterface } from '../../models/apiTvSeries';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-details-tv-servies-api',
  templateUrl: './details-tv-servies-api.component.html',
  styleUrls: ['./details-tv-servies-api.component.css']
})
export class DetailsTvServiesApiComponent implements OnInit {

  constructor(
    private seriesApiService:TvSeriesApiService,
    private route:ActivatedRoute,
    private location: Location
  ) { }

  id:number;
  series : TvSeriesApiInterface;
  oneSeries : OneTvShowInterface;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log("this.id",this.id);
    this.fetchEntry()
  }
  fetchEntry(){
    this.seriesApiService.getSerieTvBySerieId(this.id).subscribe( (res: any ) => {
      this.oneSeries = res;
    })
  }
  goBack() {
    this.location.back();
   }

}
