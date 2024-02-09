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

  URI = 'http://143.198.40.116:3945/api' ;

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

  filterProducts(products: Product[], query: string): Product[] {
    // Lógica de filtrado aquí
    // Puedes utilizar el mismo código del Pipe de Filtro si lo deseas

    if (!products || !query) {
      return products;
    }

    const lowerQuery = query.toLowerCase();

    return products.filter(
      (product) =>
        product.title.toLowerCase().includes(lowerQuery) ||
        product.description.toLowerCase().includes(lowerQuery)
      // Puedes agregar más campos según tus necesidades
    );
  }

  getOriginalProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.URI}/products`);
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

  saveProduct(title: string, desctiption: string, code: string, category: string, state:string,imageURL: File){

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
    fd.append('code', code);
    fd.append('category', category);
    fd.append('state', state);
    fd.append('imageURL', imageURL);

    return this.http.post(`${this.URI}/products/upload/`, fd, HttpOptions);

  }

}
