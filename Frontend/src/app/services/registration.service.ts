import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserInterface } from '../models/apiUsers.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
      private baseURL = 'http://localhost:8080/users';

      constructor(private http : HttpClient) { }

      addUser =(newUser : UserInterface, username:string, password:string) => {

          const headers=new HttpHeaders({
              'Content-Type':    'application/json',
              Authorization : 'Basic '+ btoa(username+":"+password)});    //btoa= binari to ask
          return this.http.post<UserInterface>(this.baseURL +"/", JSON.stringify({
          "first_name": newUser.first_name,
          "last_name": newUser.last_name,
          "username": newUser.username,
          "password": newUser.password,
           "email": newUser.email,
          "enabled": newUser.enabled,
          }),{headers})

      }
}
