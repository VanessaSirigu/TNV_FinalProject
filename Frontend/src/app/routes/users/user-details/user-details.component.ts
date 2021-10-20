import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersApiInterface } from 'src/app/models/apiUsers.model';
import { UsersManagerApiservice } from '../../../services/usersManagerApi.service';
import { UserInterface } from 'src/app/models/apiUsers.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private usersService: UsersManagerApiservice,
    private router : Router) { }

    users: UserInterface;
    id: number;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.fetchEntry()
  }

  fetchEntry(){
    this.usersService.getUserById(this.id).subscribe( (res: any ) => {
      this.users = res;
    })
  }


  deleteUser(id){
    this.usersService.deleteUser(id)
    .subscribe(data => {
      this.router.navigate(['/usersManager']);
    }, (err) => {
      console.log(err);
    });

  }

}
