import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './../interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  Product = {}
  product: Product;

  // URI = 'https://api.iddux.com/api' ;

  URI = 'http://iddux.cl:3000/api' ;

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<Product[]>(`${this.URI}/products`);
  }

  getProduct(id:string){
    return this.http.get<Product[]>(`${this.URI}/product/${id}`);
  }

  addToCart(product: Product) :Observable<any>   {

    const HttpOptions = {
      headers: new HttpHeaders(
        {
            'Authorization': 'Bearer' + localStorage.getItem("token"),
            'Accept': 'multipart/form-data'
        })
    }

    return this.http.put<Product[]>(`${this.URI}/product/${product._id}`, product) ;

  }

  buyProduct(_id:string):Observable<any> {
    const HttpOptions = {
      headers: new HttpHeaders(
        {
            'Authorization': 'Bearer' + localStorage.getItem("token"),
            'Accept': 'multipart/form-data'
        })
    }
    return this.http.post<any[]>(`${this.URI}/product/${_id}`, HttpOptions)
  }

  saveProduct( title: string, desctiption: string, category: string, code: string, state:string, imageURL: File){

  const HttpOptions = {
    headers: new HttpHeaders(
      {
          'Authorization': 'Bearer' + localStorage.getItem("token"),
          'Accept': 'multipart/form-data'
      })
  }

  const fd = new FormData();

    fd.append('title', title);
    fd.append('description', desctiption);
    fd.append('category', category);
    fd.append('code', code);
    fd.append('state', state);
    fd.append('imageURL', imageURL);

    return this.http.post(`${this.URI}/products/upload/`, fd, HttpOptions);

  }

}
