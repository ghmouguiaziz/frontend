import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/Models/user.model';
import { UserService } from 'app/user.service';


enum userType{
  admin,user
}
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  nuser=new User();

  constructor(private router: Router , private UserService: UserService) { }

  login() {
    
    this.router.navigate(['/Zone']);
  }
  addUser(){
    this.nuser.typeuser=userType.admin;
    this.UserService.addUser(this.nuser).subscribe()
    
    window.location.reload()
    console.log(this.nuser)
  }


}
