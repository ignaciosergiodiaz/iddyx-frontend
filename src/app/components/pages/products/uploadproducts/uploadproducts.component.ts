import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
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

  product = {
    title: "",
    description: "",
    code: "",
    category: "",
    state:"",
    imageURL: ""
  }


  products: Array<any> ;

  constructor(public ps: ProductsService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {

  }



  openSnackBar() {
    this.snackBar.open('Producto subido', 'cerrar');
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

    title: HTMLInputElement, description: HTMLInputElement, category: HTMLSelectElement,
    code: HTMLInputElement,  state: HTMLInputElement, imageURL: File): Boolean{

      this.ps.saveProduct(title.value, description.value, category.value, code.value,  state.value, this.file )

      .subscribe(

          res =>
          {
            console.log(res)
            this.router.navigate(['inicio'])
          },
          err => console.log(err))

          return true ;

      }
  }

