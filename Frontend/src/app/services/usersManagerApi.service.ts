import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersApiInterface, ResultUsers } from '../models/apiUsers.model';

@Injectable({
  providedIn: 'root'
})
export class UsersManagerApiservice {

  public username: String;
  public password: String;
  public users: UsersApiInterface

  constructor(private http: HttpClient) { }

  private baseURL = 'http://localhost:8080/users';


  /***************************** CREATE ******************************/
  //aggiunge un nuovo utente
  addUser = (user: UsersApiInterface) => {
    return this.http.post<UsersApiInterface>(this.baseURL+"/", user);
  }

  /***************************** READ ******************************/
  //recupera l'utente corrispondente all'id passato come parametro
  getUserById(id){
    return this.http.get<UsersApiInterface>(this.baseURL+"/"+id);
  }

  //recupera l'utente corrispondente all'username passato come parametro
  getUserByUsername(username){
    return this.http.get<ResultUsers>(this.baseURL+"/username/"+username);
  }

  //recupera un utente dal suo username parziale
  getUserContainingUsername(username){
    return this.http.get<UsersApiInterface>(this.baseURL+"/username/like/"+username);
  }

  //recupera tutti gli user presenti
  allUsers(){
    return this.http.get<UsersApiInterface>(this.baseURL+"/");
  }

  /***************************** UPDATE ******************************/
  //modifica l'utente corrispondente all'id_user passato come parametro
  editUser (user : ResultUsers) {
   return this.http.put<UsersApiInterface>(this.baseURL+"/"+user.id, user);
  }

  /***************************** DELETE ******************************/
  //cancella l'utente corrispondente all'id_user passato come parametro
  deleteUser(id){
    return this.http.delete<UsersApiInterface>(this.baseURL+"/"+id);
  }

}
