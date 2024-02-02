import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

import { ProductsService } from '../../../../services/products.service';
import { Product } from 'src/app/interfaces/product';
import { FormControl } from '@angular/forms';

import { Subscription } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  query: string = '';
  isExpanded: boolean = false;
  queryControl = new FormControl('');
  originalProducts: Product[] = [];
  private subscription: Subscription;


  constructor(private ps: ProductsService, private cs: CartService, private router: Router) { }

  ngOnInit(): void {

    this.ps.getOriginalProducts()
      .subscribe(
        res => {
         this.products = res;
         this.originalProducts = res;
         console.log(this.originalProducts)
      })

      // Escucha los cambios en el formulario reactivo y realiza la búsqueda en tiempo real
      this.queryControl.valueChanges.subscribe(() => {
        this.searchProducts();
      });

  }

  ngOnDestroy(): void {
    // Desuscribirse para evitar pérdida de memoria
    this.subscription.unsubscribe();
  }

  onSelectCard(id: string ) {
    this.router.navigate(['/product', id])

  }

  searchProducts(): void {

      // Reiniciar la lista de productos a la original antes de aplicar el filtro
      this.products = [...this.originalProducts];

      // Filtrar productos utilizando el FilterPipe y la consulta de búsqueda
      this.products = this.ps.filterProducts(this.products, this.query);

      if (this.query.trim() !== '') {
        this.isExpanded = true;
      } else {
        this.isExpanded = false;
      }


  }

}
