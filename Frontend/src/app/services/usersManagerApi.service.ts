import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersApiInterface } from '../models/apiUsers.model';

@Injectable({
  providedIn: 'root'
})
export class UsersManagerApiservice {

  public username: String;
  public password: String;

  constructor(private http: HttpClient) { }

  private baseURL = 'http://localhost:8080/users';

  //aggiunge un nuovo utente
  addUser(){
      return this.http.get<UsersApiInterface>(this.baseURL+"/");
  }

  //recupera l'utente corrispondente all'id passato come parametro
  getUserById(){
    return this.http.get<UsersApiInterface>(this.baseURL+"/{id}");
  }

  //recupera l'utente corrispondente all'username passato come parametro
  getUserByUsername(){
    return this.http.get<UsersApiInterface>(this.baseURL+"/username/{username}");
  }

  //recupera un utente dal suo username parziale
  getUserContainingUsername(){
    return this.http.get<UsersApiInterface>(this.baseURL+"/username/like/{partialUsername}");
  }

  //recupera tutti gli user presenti
  allUsers(){
    return this.http.get<UsersApiInterface>(this.baseURL+"/");
  }


  //modifica l'utente corrispondente all'id_user passato come parametro
  updateUser(){
    return this.http.get<UsersApiInterface>(this.baseURL+"/{id}");
  }

  //cancella l'utente corrispondente all'id_user passato come parametro
  deleteUser(){
    return this.http.get<UsersApiInterface>(this.baseURL+"/{id}");
  }

}
