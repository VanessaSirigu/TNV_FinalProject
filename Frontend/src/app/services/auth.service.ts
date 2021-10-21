import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserInterface } from '../models/apiUsers.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  private baseURL = 'http://localhost:8080/users/';

  /***************************** LOGIN ******************************/
 /* doLogin (username, password) {
    console.log("doLogin service: " + username + password);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<any>(this.baseURL+"validateLogin", {headers});
  }
*/
  authenticate(username : string,  password : string) {
    console.log("authenticate 1 " + username, password);
    const headers = new HttpHeaders({
      Authorization: 'Basic ' +
        btoa(username + ":" + password)});
        console.log("Username authenticate 2: " + sessionStorage.getItem('username'))
    return this.httpClient.get<UserInterface>(this.baseURL, { headers }).pipe(
      map(userData => {
        sessionStorage.setItem('username', username);
        let authString = 'Basic ' + btoa(username + ':' + password);
          sessionStorage.setItem('basicauth', authString);
          console.log("Username authenticate 3: " + sessionStorage.getItem('username'))
        return userData;
      }));
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }

}



