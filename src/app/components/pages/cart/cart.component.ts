import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from './../../../interfaces/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  product : any ;

  showData: Boolean;
  id: string;


  constructor(
    private ps: ProductsService,
    private router: Router,
    public cs: CartService,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.product = {} ;

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

  
  comprarProducto(){

    this.cs.buyProduct(this.product)
      
      .subscribe(res => console.log(res), err => console.log(err))


  }



}


