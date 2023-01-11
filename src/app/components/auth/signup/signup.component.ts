import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  error:any;

  constructor(private us: UsersService,private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar() {
    this.snackBar.open('¡Has creado un nuevo usuario éxitosamente!', 'cerrar');
  }

  signin(){
    this.us.signIn(this.user)
      .subscribe(
        (res) =>{
          console.log(res)
          localStorage.setItem("token", res.token),
          this.router.navigate(['/inicio'])
        },

        (error) => {
          this.error = error
        }

      )
  }

}
