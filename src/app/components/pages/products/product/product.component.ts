import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../../../../interfaces/product'
import { CartService } from 'src/app/services/cart.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  product : Product[] ;

  showData: Boolean;
  id: string;

  constructor(
    private ps: ProductsService,
    private router: Router,
    public cs: CartService,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.product = [] ;

    this.activateRoute.params.subscribe(params => {
      this.id = params['id'];
      this.ps.getProduct(this.id)
        .subscribe(
          res => {
            console.log(res),
            this.product = res
          },

          err => console.log(err)

        )
    })
  }




}
