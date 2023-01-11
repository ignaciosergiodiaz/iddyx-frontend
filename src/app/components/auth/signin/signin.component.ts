import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user = {
    username:"",
    password:""
  }

  userRegistered:any;

  constructor(private us: UsersService, private r: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar() {
    this.snackBar.open('Te has logueado!!!!', 'cerrar');
  }

  signin() {
    this.us.signIn(this.user)
      .subscribe(
        res => {
          // console.log(res)
          localStorage.setItem("token", res.token)
          localStorage.setItem("id_user", res.dataUser._id)
          localStorage.setItem("email", res.dataUser.email)
          localStorage.setItem("username", res.dataUser.username),
          this.r.navigate(['/inicio'])
        },
        err => {
          console.log(err)
        }
      )
  }

}
