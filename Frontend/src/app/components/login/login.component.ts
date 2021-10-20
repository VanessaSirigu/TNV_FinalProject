import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //variabili per l'input
  usernameInput: string;
  passwordInput: string;
  invalidLogin = false

  constructor(private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
  }

  checkLogin() {
    //console.log("checkLogin "+this.usernameInput + " " + this.passwordInput);
    (this.authService.authenticate(this.usernameInput, this.passwordInput).subscribe(
      data => {
        this.invalidLogin = false
        this.router.navigate(['/dashboard'])
        },
      error => {
        this.invalidLogin = true
      }
    )
    );
  }

}
