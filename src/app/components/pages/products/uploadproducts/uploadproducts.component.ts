import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { ProductsService } from '../../../../services/products.service';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}

@Component({
  selector: 'app-uploadproducts',
  templateUrl: './uploadproducts.component.html',
  styleUrls: ['./uploadproducts.component.css']
})

export class UploadproductsComponent implements OnInit {

  public file: File;
  photoSelected: string | ArrayBuffer;

  products: Array<any> ;

  constructor(public ps: ProductsService, private router: Router) { }

  ngOnInit(): void {
  }

  onPhotoSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
      console.log(this.file)
    }
  }

  uploadProduct(

    title: HTMLInputElement, description: HTMLInputElement, details_product: HTMLInputElement,
    price:HTMLInputElement, category: HTMLSelectElement, currency: HTMLInputElement,
    email: HTMLInputElement, code: HTMLInputElement, send_dates: HTMLInputElement,
    quantity: HTMLInputElement, stock: HTMLInputElement, imageURL: File): Boolean{

      this.ps.saveProduct(title.value, description.value, details_product.value, price.value,category.value,
      currency.value, email.value, code.value, send_dates.value, quantity.value, stock.value,
      this.file )

      .subscribe(

          res =>
          {
            console.log(res)
            this.router.navigate(['/products'])
          },
          err => console.log(err))

        return false ;

      }
  }

