import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './../../services/users.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavTogggle = new EventEmitter()

  constructor(public us: UsersService, private router: Router) { }

  user: any ;

  ngOnInit() {
    this.user =  localStorage.getItem("username")
  }

  public onToggleSideNav = () => {
    this.sidenavTogggle.emit()
  }


  public loggedIn(){
    return !!localStorage.getItem("token")
  }

}
