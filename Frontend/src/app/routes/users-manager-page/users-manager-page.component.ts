import { Component, OnInit } from '@angular/core';
import { UsersApiInterface, ResultUsers } from '../../models/apiUsers.model';
import { UsersManagerApiservice } from '../../services/usersManagerApi.service';

@Component({
  selector: 'app-users-manager-page',
  templateUrl: './users-manager-page.component.html',
  styleUrls: ['./users-manager-page.component.css']
})
export class UsersManagerPageComponent implements OnInit {

  users : UsersApiInterface;
  results : ResultUsers[];

  constructor(private usersService : UsersManagerApiservice) { }

  ngOnInit(): void {
    this.getAllUsersOnComponent();
  }

  getAllUsersOnComponent(){
    this.usersService.allUsers().subscribe(
      response => {
        //se è andato tutto bene, allora:
        console.log("ho ottenuto i dati!")
        this.users = response;
        console.log("i dati ottenuti sono: ", this.users);
        this.results= this.users.results;
        console.log("results: ", this.results)
        //console.log("I dati stringify: " + JSON.stringify(this.movies))
      },
      error => console.log(error)
    )
  }

}
