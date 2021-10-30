import { Chart } from 'chart.js';
import { MovieApiInterface } from './../../models/apiMovie.model';
import { Component, OnInit, ElementRef,ViewChild } from '@angular/core';
import { MoviesApiService } from '../../services/moviesapi.service';
import { ResultInterface } from '../../models/apiMovie.model';
import { CommentsApiService } from '../../services/comments-api.service';
import { ActivatedRoute } from '@angular/router';
import { UsersManagerApiservice } from '../../services/usersManagerApi.service';
import { UserInterface } from '../../models/apiUsers.model';
import { CommentsResultsInterface } from '../../models/apiComment.model';
import { animate, animation } from '@angular/animations';

@Component({
  selector: 'app-chart-trend',
  templateUrl: './chart-trend.component.html',
  styleUrls: ['./chart-trend.component.css']
})
export class ChartTrendComponent implements OnInit {
  @ViewChild("myCanvas",{ static: true}) elemento:ElementRef

  id:number;
  username:string;
  rating: number[];

  commentsResults : CommentsResultsInterface[];
  totalComment:number;


  userLog:UserInterface;
  userId:number;

  constructor(
    private commentService:CommentsApiService,
    private route:ActivatedRoute,
    private usersApiService:UsersManagerApiservice
  ) { }

  ngOnInit(): void {
   // this.id = this.route.snapshot.params['id'];
    this.username = localStorage.getItem('username');
    this.getUser();


  }

  getUser(){
    this.usersApiService.getUserByUsername(this.username).subscribe((res:any)=>{
      this.userLog=res;
      this.userId=this.userLog.id;
      console.log("userLog",this.userLog)
      console.log("userId",this.userId)
      this.fetchEntry();


    })
  }
  fetchEntry(){
    this.commentService.getAllCommentsByUserId(this.userId).subscribe((res:any)=>{
      this.commentsResults= res;
      console.log("comment",this.commentsResults)
      this.getChart();
      this.getArrayLenght();
    })
  }

  getChart(){
    new Chart(this.elemento.nativeElement,{
      type : 'doughnut',
      data: {
        labels:['totale commenti utente'],
        datasets:[
          {
            data:[this.commentsResults.length,1],
            borderWidth:0,
            borderColor:'green',
            backgroundColor:[
              'orange',
              'red'
            ],
            hoverBackgroundColor:[
              'yellow',
              'blu'
            ]


          },
        ]
      },
      options:{
        legend:{
          display: true
        },
      }
    })
  }
  getArrayLenght(){
    this.totalComment=this.commentsResults.length;
  }

  }

