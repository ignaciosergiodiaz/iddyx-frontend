import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './../interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  product: Product ;


  URI = 'http://iddux.cl:3000/api' ;

  constructor(private http: HttpClient) { }

  getProduct(){
    return this.http.get<any>(`${this.URI}/cart`);
  }

  addProduct(product){
    return this.http.post<any>(`${this.URI}/cart`, product)
  }

  addItem(product: any){
    return this.http.post<any>(`${this.URI}/cart`, product )
  }

  myCart(){

    const HttpOptions = {
      headers: new HttpHeaders(
        {
            'Authorization': 'Bearer' + localStorage.getItem("token"),
            'Accept': 'multipart/form-data'
        })
    }

    return this.http.get(`${this.URI}/mycart` )
  }

  buyProduct(product: Product):Observable<any> {
    const HttpOptions = {
      headers: new HttpHeaders(
        {
            'Authorization': 'Bearer' + localStorage.getItem("token"),
            'Accept': 'multipart/form-data'
        })
    }
    return this.http.post<any[]>(`${this.URI}/cart/${product._id}`, product)
  }

}
