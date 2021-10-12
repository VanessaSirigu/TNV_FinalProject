import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersManagerApiservice } from '../../../services/usersManagerApi.service';
import { ResultUsers, UsersApiInterface } from '../../../models/apiUsers.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private usersService: UsersManagerApiservice, private router: Router) { }

  ngOnInit(): void {
  }

  userEntry : UsersApiInterface;

  onSubmit(form : NgForm){

    this.userEntry = form.form.value;
    console.log(form)
    console.log(this.userEntry);

    if(this.userEntry!=null){
      this.usersService.addUser(this.userEntry).subscribe(response => {
        console.log(response);
        this.router.navigate(['/usersManager']);
      },
      (err) => {
        //fai qualcosa
      })
    }
  }

}
