import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../services/registration.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserInterface } from '../../models/apiUsers.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  newUser: UserInterface;

  //variabili per il controllo della corrispondenza tra gli input password
  password: string;
  confirmPassword: string;
  passwordOk = true;

  //controllo validità email
  email: string;
  emailOk = true;

  //controllo della spunta termini e condizioni
  terms: string;
  termsOk = true;

  constructor(private registrationService: RegistrationService, private router: Router) { }

  ngOnInit(): void {
  }

  //verifica la corrispondenza tra le password inserite dall'utente
  checkPassword(form: NgForm): boolean {
    this.password = form.form.value.password;
    this.confirmPassword = form.form.value.confirmPassword;
    if (this.password !== this.confirmPassword) {
      return false
    }
    else {
      return true
    }
  }

  //verifica se l'email inserita è in un formato valido
  checkEmail(form: NgForm): boolean {
    this.email = form.form.value.email;
    const at = "@";
    const dot = ".";
    if (this.email.includes(at) && this.email.includes(dot)) {
      return true;
    }
    else {
      return false;
    }

  }
  //verifica la spunta di termini e condizioni
  checkTerms(form: NgForm): boolean {
    this.terms = form.form.value.terms;
    if (this.terms) {
      this.termsOk = true;
      return true;
    }
    else {
      this.termsOk = false;
      return false;
    }
  }

  //Creazione di un nuovo user
  createUser(form: NgForm): void {
    let match = this.checkPassword(form);
    let emailChecked = this.checkEmail(form);

    if (emailChecked) {
      if (match) {
        this.newUser = form.form.value;
        this.newUser.enabled = 1;
        this.registrationService.addUser(this.newUser, "admin", "admin").subscribe(results => {
          console.log("Utente inserito correttamente", results);
          },
          error => {
            console.log(error);
          });
        this.router.navigate(['/login']);
      }
      else {
        this.emailOk = true;
        this.passwordOk = false;
        console.log("Errore! La password inserità è errata");
      }
    }
    else {
      this.emailOk = false;
      console.log("Errore! La mail inserità è errata");
    }
  }
}
