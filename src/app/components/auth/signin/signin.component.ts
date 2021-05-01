import { Component, OnInit } from '@angular/core';
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

  error

  constructor(private us: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  signIn(){
    this.us.signIn(this.user)
      .subscribe(
        (res) =>{
          console.log(res)
          localStorage.setItem("token", res.token),
          this.router.navigate([''])
        },

        (error) => {
          this.error = error
        }

      )
  }

}
