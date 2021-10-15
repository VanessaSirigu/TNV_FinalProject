import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersManagerApiservice } from '../../services/usersManagerApi.service';

// export interface UserInterface{
//   username: string,
//   password: string
// }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private usersService : UsersManagerApiservice) { }

  //variabili per l'input
  usernameInput: string;
  passwordInput: string;
  message: any;

  ngOnInit(): void {
  }

  doLoginOnComponent() {
    let resp = this.usersService.doLogin(this.usernameInput, this.passwordInput);
    console.log(this.usernameInput, this.passwordInput);
    resp.subscribe (data => {
      this.message = data;
        console.log(data);
      })
  }

}
