import { UsersManagerApiservice } from './../../../services/usersManagerApi.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersApiInterface, ResultUsers } from '../../../models/apiUsers.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private route: ActivatedRoute, private usersService: UsersManagerApiservice, private router : Router) { }

  userEntry: ResultUsers;
  users: UsersApiInterface

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.fetchEntry(id);
  }


  fetchEntry(id){
    this.usersService.getUserById(id).subscribe( (res: any ) => {
      this.userEntry = res;
      console.log(this.userEntry)
    })
  }

  onSubmit(id){
    console.log(this.userEntry);
    this.usersService.editUser(this.userEntry).subscribe (response => {
      console.log(response);
      this.router.navigate(['/userDetails', this.userEntry.id])
    }), err => {
      console.log(err);
    }
    this.router.navigate(['/userDetails', this.userEntry.id])
  }
}
