import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../services/users.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(public us: UsersService) { }

  ngOnInit(): void {
  }



}
