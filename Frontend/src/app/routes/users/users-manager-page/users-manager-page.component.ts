import { UsersManagerApiservice } from './../../../services/usersManagerApi.service';
import { UsersApiInterface, ResultUsers } from './../../../models/apiUsers.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-manager-page',
  templateUrl: './users-manager-page.component.html',
  styleUrls: ['./users-manager-page.component.css']
})
export class UsersManagerPageComponent implements OnInit {

  users : UsersApiInterface;
  results : ResultUsers[];

  constructor(private usersService : UsersManagerApiservice, private router : Router) { }

  ngOnInit(): void {
    this.getAllUsersOnComponent();
  }

  getAllUsersOnComponent(){
    this.usersService.allUsers().subscribe(
      response => {
        //se è andato tutto bene, allora:
        console.log("ho ottenuto i seguenti dati:")
        this.users = response;
        console.log(this.users);
        //console.log("I dati stringify: " + JSON.stringify(this.movies))
      },
      error => console.log(error)
    )
  }

  goToUserDetails(id){
    this.router.navigateByUrl('/userDetails/' + id);
  }

}
