import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

import { ProductsService } from '../../../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [] ;

  constructor(private ps: ProductsService, private cs: CartService, private router: Router) { }

  ngOnInit(): void {

    this.ps.getProducts()
      .subscribe(
        res => {
         this.products = res
      })

  }

  onSelectCard(id: string ) {
    this.router.navigate(['/product', id])

  }

}
