import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent implements OnInit {

  constructor() { }

  username: string;

  ngOnInit(): void {
    this.username = localStorage.getItem('username')
  }

}
