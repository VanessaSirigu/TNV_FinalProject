import { Component, OnInit } from '@angular/core';
//import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UsersManagerApiservice } from '../../services/usersManagerApi.service';
import { UserInterface, UsersApiInterface } from '../../models/apiUsers.model';
import { SharedService } from '../../services/shared.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //variabili per l'input
  usernameInput: string;
  passwordInput: string;
  user : string;
  username : string;
  password : string;
  loginError : boolean;
  validLogin : boolean;
  users : UsersApiInterface;
  results : UserInterface;

  constructor(private router: Router,
    private usersService : UsersManagerApiservice,
    private shared : SharedService) { }

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
  //cerca l'utente nel db verificando username e password
  this.usersService.getUserByUsername(this.usernameInput).subscribe (
    response => {
      this.results = response
      if (this.results != null && this.results.password==this.passwordInput){
        this.validLogin = true;
        //se l'utente è stato trovato, viene dato accesso alle risorse
        this.doLogin();
        this.usersService.getUserById(this.results.id);
        this.user=this.results.username;
        this.shared.sendData(this.user)
        this.router.navigate(['/moviesApi'])

      } else {
        this.loginError = true;
      }
    },
  error => error
  )
}

/*Viene dato l'accesso ai dati grazie alle credenziali dell'utenza di servizio admin
richiamata nel service*/
  doLogin() {
    let resp = this.usersService.login(this.usernameInput, this.passwordInput);
    resp.subscribe(data => {
      console.log(data)
    })
  }
}

