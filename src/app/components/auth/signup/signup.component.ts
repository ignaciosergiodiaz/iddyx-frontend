import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';

import { UsersService } from './../../../services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = {
    username: "",
    email: "",
    password: ""
  }

  constructor(private us: UsersService, r: Router) { }

  ngOnInit(): void {
  }

  signup() {
    this.us.signUp(this.user)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem("token", res.token)

        },
        err => {
          console.log(err)
        }
      )
  }

}
