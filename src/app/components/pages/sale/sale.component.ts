import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

   sales: any ;

   user: any;

  constructor(
      private cs: CartService,
      private router: Router) { }

  ngOnInit(): void {
    this.cs.myCart()
      .subscribe( res =>  this.sales = res)

  }

}
