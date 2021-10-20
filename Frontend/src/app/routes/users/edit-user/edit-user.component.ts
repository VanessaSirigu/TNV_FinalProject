import { UsersManagerApiservice } from './../../../services/usersManagerApi.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersApiInterface } from '../../../models/apiUsers.model';
import { UserInterface } from '../../../models/apiUsers.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private route: ActivatedRoute, private usersService: UsersManagerApiservice, private router : Router) { }

  userEntry: UserInterface;
  users: UsersApiInterface
  editing = false;

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.fetchEntry(id);
  }


  fetchEntry(id){
    this.usersService.getUserById(id).subscribe( (res: any ) => {
      this.userEntry = res;
    })
  }

  onSubmit(id){
    this.usersService.editUser(this.userEntry).subscribe (response => {
      this.editing = true;
      this.router.navigate(['/usersManager'])
    }),
    err => {console.log(err);}
  }
}
