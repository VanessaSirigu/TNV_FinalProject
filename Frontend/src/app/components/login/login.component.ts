import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UsersManagerApiservice } from '../../services/usersManagerApi.service';
import { UserInterface, UsersApiInterface } from '../../models/apiUsers.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //variabili per l'input
  usernameInput: string;
  passwordInput: string;
  username : string;
  password : string;
  loginError : boolean;
  validLogin : boolean;
  users : UsersApiInterface;
  results : UserInterface;

  constructor(private router: Router,
    private authService: AuthService, private usersService : UsersManagerApiservice) { }

  ngOnInit() {
  }
/*
  checkLogin() {
    this.authService.authenticate(this.usernameInput, this.passwordInput).subscribe(
      data => {
        this.invalidLogin = false
        this.router.navigate(['/dashboard'])
        },
      error => {
        this.invalidLogin = true
      });
  }
*/
  verifyByUsername(){
    this.loginError = false;
    this.validLogin = false;

    console.log (this.usernameInput)
    this.usersService.getUserByUsername(this.usernameInput).subscribe (
      response => {

        console.log (this.usernameInput)
        this.results = response
        console.log (this.results)
        if (this.results == null){
          console.log("Autenticazione non riuscita.")
          this.loginError = true;
        } else {
          this.validLogin = true;
        }
      },
    error => error
    )
  }



}
