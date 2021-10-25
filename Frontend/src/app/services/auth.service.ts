// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { map } from 'rxjs/operators';
// import { UserInterface } from '../models/apiUsers.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor(private httpClient: HttpClient) { }

//   private baseURL = 'http://localhost:8080/users/';

//   /***************************** LOGIN ******************************/
//  login (username : string, password : string) {
//     console.log("login service: " + username + password);
//     const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('admin:admin')});
//     return this.httpClient.get<any>(this.baseURL+"validateLogin", {headers, responseType: 'text' as 'json'});
//   }

//  /* doLogin (username, password) {
//     console.log("doLogin service: " + username + password);
//     const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
//     return this.httpClient.get<any>(this.baseURL+"validateLogin", {headers});
//   }
// */
//   authenticate(username : string, password : string) {
//     localStorage.setItem('username', username);
//     localStorage.setItem('password', password);

//     username = 'admin';
//     password = 'admin' ;
//     console.log(username + password)
//     let provaUs = localStorage.getItem('username')
//     console.log(provaUs);
//     const headers = new HttpHeaders({
//       Authorization: 'Basic ' +
//         btoa(username + ":" + password)});

//     return this.httpClient.get<UserInterface>(this.baseURL, { headers }).pipe(
//       map(userData => {
//         localStorage.setItem('username', username);
//         let authString = 'Basic ' + btoa(username + ':' + password);
//           localStorage.setItem('basicauth', authString);
//           console.log("Username authenticate 3: " + localStorage.getItem('username'))
//         return userData;
//       }));
//   }

//   isUserLoggedIn() {
//     let user = sessionStorage.getItem('username')
//     console.log(!(user === null))
//     return !(user === null)
//   }

//   logOut() {
//     sessionStorage.removeItem('username')
//   }

// }



