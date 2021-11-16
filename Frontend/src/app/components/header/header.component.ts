import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private shared : SharedService) { }

  logged: boolean;

  ngOnInit(): void {
    this.checkLogin();
  }

  checkLogin() {
    this.logged = false;
    if (localStorage.getItem('username')) {
      this.logged = true;
    }
  }

  doLogout() {
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    window.location.reload()
  }

}
