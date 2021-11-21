import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn : boolean;

  constructor(private shared : SharedService) {
    this.shared.isUserLoggedIn.subscribe( value => {
      this.isUserLoggedIn = value;
  });
  }

  ngOnInit(): void {
    this.checkLogin();
  }

  checkLogin() {
    this.isUserLoggedIn = false;
    if (localStorage.getItem('username')) {
      this.isUserLoggedIn = true;
    }
  }

  doLogout() {
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    window.location.reload()
  }

}
