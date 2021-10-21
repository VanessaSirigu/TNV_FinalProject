import { HttpClient, JsonpClientBackend, HttpHeaders, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersApiInterface, UserInterface } from '../models/apiUsers.model';

@Injectable({
  providedIn: 'root'
})
export class UsersManagerApiservice {

  public username: String;
  public password: String;
  public users: UsersApiInterface

  constructor(private http: HttpClient) { }

  private baseURL = 'http://localhost:8080/users';

  // /***************************** LOGIN ******************************/
  // doLogin (username, password) {
  //   return this.http.get<any>('http://localhost:8080');
  // }

  /***************************** CREATE ******************************/
  //aggiunge un nuovo utente
  addUser = (user: UserInterface) => {
    return this.http.post<UserInterface>(this.baseURL+"/", user,  { responseType: 'text' as 'json'});
  }

  /***************************** READ ******************************/
  //recupera l'utente corrispondente all'id passato come parametro
  getUserById(id){
    return this.http.get<UsersApiInterface>(this.baseURL+"/"+id);
  }

  //recupera l'utente corrispondente all'username passato come parametro
  getUserByUsername(username){
    const headers = new HttpHeaders({
      Authorization: 'Basic ' +
        btoa("admin" + ":" + "admin")});
    return this.http.get<UserInterface>(this.baseURL+"/username/" +username, { headers });
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
  editUser (user : UserInterface) {
   return this.http.put<UserInterface>(this.baseURL+"/"+user.id, user, { responseType: 'text' as 'json'});
  }

  /***************************** DELETE ******************************/
  //cancella l'utente corrispondente all'id_user passato come parametro
  deleteUser(id){
    return this.http.delete<UsersApiInterface>(this.baseURL+"/"+id);
  }

}
