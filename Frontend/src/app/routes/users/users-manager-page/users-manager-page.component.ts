import { UsersManagerApiservice } from './../../../services/usersManagerApi.service';
import { UsersApiInterface } from './../../../models/apiUsers.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormControl } from '@angular/forms';
import { UserInterface } from './../../../models/apiUsers.model';

@Component({
  selector: 'app-users-manager-page',
  templateUrl: './users-manager-page.component.html',
  styleUrls: ['./users-manager-page.component.css']
})
export class UsersManagerPageComponent implements OnInit {

  users : UsersApiInterface;
  results : UserInterface[];
  resultFull : UserInterface;
  usernameInput : string;

  constructor(private usersService : UsersManagerApiservice, private router : Router) { }

  ngOnInit(): void {
    this.getAllUsersOnComponent();
  }

  getAllUsersOnComponent(){
    this.usersService.allUsers().subscribe(
      response => {
        this.users = response;
        this.resultFull = null;
      },
      error => console.log(error)
    )
  }

  goToUserDetails(id){
    this.router.navigateByUrl('/userDetails/' + id);
  }

 getUserByUsernameOnComponent(){
    this.usersService.getUserByUsername(this.usernameInput).subscribe(
      response => {
        this.resultFull = response;
      },
      error => console.log(error)
    )
  }

  getUserContainingUsernameOnComponent(){
    this.usersService.getUserContainingUsername(this.usernameInput).subscribe(
      response => {
        this.users = response;
        this.resultFull = null;
      },
      error => console.log(error)
    )
  }
}
