import { Chart } from 'chart.js';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommentsApiService } from '../../services/comments-api.service';
import { ActivatedRoute } from '@angular/router';
import { UsersManagerApiservice } from '../../services/usersManagerApi.service';
import { UserInterface } from '../../models/apiUsers.model';
import { CommentsResultsInterface } from '../../models/apiComment.model';

@Component({
  selector: 'app-chart-trend',
  templateUrl: './chart-trend.component.html',
  styleUrls: ['./chart-trend.component.css']
})
export class ChartTrendComponent implements OnInit {
  @ViewChild("myCanvas", { static: true }) elemento: ElementRef

  id: number;
  username: string;
  rating: number[];

  commentsResults: CommentsResultsInterface[];
  totalComment: number;

  userLog: UserInterface;
  userId: number;

  showChart: boolean;

  constructor(
    private commentService: CommentsApiService,
    private route: ActivatedRoute,
    private usersApiService: UsersManagerApiservice
  ) { }

  ngOnInit(): void {
    this.showChart = false;
    // this.id = this.route.snapshot.params['id'];
    this.username = localStorage.getItem('username');
    this.getUser();
  }

  getUser() {
    this.usersApiService.getUserByUsername(this.username).subscribe((res: any) => {
      this.userLog = res;
      this.userId = this.userLog.id;
      this.fetchEntry();
    })
  }

  fetchEntry() {
    this.commentService.getAllCommentsByUserId(this.userId).subscribe((res: any) => {
      this.commentsResults = res;
      if (!res) {
        this.showChart = true;
      }
      this.getChart();
      this.getArrayLenght();
    })
  }

  getChart() {
    new Chart(this.elemento.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['totale commenti utente'],
        datasets: [
          {
            data: [this.commentsResults.length, 1],
            borderWidth: 0,
            borderColor: 'green',
            backgroundColor: [
              'rgb(240, 197, 116)',
              'rgb(240, 197, 116, 0.2)'
            ],
          },
        ]
      },
      options: {
        legend: {
          display: true
        },
      }
    })
  }

  getArrayLenght() {
    this.totalComment = this.commentsResults.length;
  }

}

