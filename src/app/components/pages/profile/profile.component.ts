import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  user:any;
  email:any;
  token:any;
  id:any;

  ngOnInit(): void {
    this.user =  localStorage.getItem("username")
    this.email =  localStorage.getItem("email")
    this.token =  localStorage.getItem("token")
    this.id = localStorage.getItem("id_user")
  }

}
