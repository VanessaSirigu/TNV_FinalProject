import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersManagerApiservice } from '../../services/usersManagerApi.service';
import { UserInterface } from '../../models/apiUsers.model';
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

  //variabili di controllo login
  loginError : boolean;
  validLogin : boolean;

  results : UserInterface;
  user : string;
  userid : number;

  constructor(private router: Router, private usersService : UsersManagerApiservice,
    private shared : SharedService) { }

  ngOnInit() {
  }

  //Metodo per la verifica dei dati inseriti nel form di login
  verifyByUsername(){
    this.loginError = false;
    this.validLogin = false;
    //cerca l'utente nel db verificando username e password
    this.usersService.getUserByUsername(this.usernameInput).subscribe (
      response => {
        this.results = response
        if (this.results != null && this.results.password==this.passwordInput){
          this.validLogin = true;
          //se la verifica ha successo, l'utente viene autenticato
          this.doLogin();
          //Assegna alla stringa user l'username dell'utente loggato
          this.usersService.getUserById(this.results.id);
          this.user=this.results.username;
          this.shared.sendData(this.user)
          localStorage.setItem('userId', this.results.id.toString());
          localStorage.setItem('username', this.results.username);
          this.router.navigate(['/myBoard']);
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
    resp.subscribe (data => {
      console.log("doLogin " + data)
    })
  }

  doLogout() {
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    window.location.reload()
  }

}
